(function () {
  "use strict";

  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- footer year -----------------------------------------------------
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // ---- hero image fallback: if assets/img/hero.jpg isn't there yet,
  // hide the broken-image icon and let the CSS gradient placeholder show.
  var heroImg = document.getElementById("heroImg");
  if (heroImg) {
    heroImg.addEventListener("error", function () {
      heroImg.setAttribute("data-state", "error");
    });
  }

  if (reduceMotion) return;

  // ---- entrance: hero reveals on load, sections reveal on scroll -------
  document.documentElement.classList.add("js-ready");

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      var hero = document.querySelector(".hero");
      if (hero) hero.classList.add("reveal");
    });
  });

  var revealTargets = [document.getElementById("platformGrid")].filter(Boolean);

  if ("IntersectionObserver" in window && revealTargets.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    revealTargets.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("reveal");
    });
  }

  // ---- subtle hero parallax: the photo drifts slower than the page -----
  var heroMedia = document.querySelector(".hero-media");
  if (heroMedia && heroImg) {
    var ticking = false;
    var update = function () {
      ticking = false;
      var y = window.scrollY || window.pageYOffset;
      var shift = Math.min(y * 0.25, 120);
      heroImg.style.transform = "translateY(" + shift + "px) scale(1.05)";
    };
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true }
    );
  }
})();
