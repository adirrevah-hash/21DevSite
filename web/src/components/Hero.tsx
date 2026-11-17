import { useLayoutEffect, useRef } from "react"
import "@/styles/site.css"

/**
 * Top nav + hero for the shading/pergola site. Ported from the original
 * static index.html: same markup and CSS (src/styles/site.css), with the
 * load-time "open" animation re-implemented as a layout effect instead of a
 * blocking <script> in <head> (same intent: set the pre-reveal state before
 * first paint, then reveal on the next couple of frames).
 */
export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) return
    document.documentElement.classList.add("js-ready")
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        heroRef.current?.classList.add("reveal")
      })
    })
    return () => cancelAnimationFrame(raf1)
  }, [])

  return (
    <>
      <header className="topbar">
        <div className="wrap">
          <div className="brand">
            <span className="mark">אופק</span>
            <span className="tag">הצללה אדריכלית</span>
          </div>
          <nav className="nav">
            <a href="#">פרגולות</a>
            <a href="#">סוככים חשמליים</a>
            <a href="#projects">פרויקטים</a>
            <a href="#">צור קשר</a>
          </nav>
          <div className="actions">
            <span className="phone">03-900-1500</span>
            <a href="#quote" className="btn btn-primary btn-sm">
              הצעת מחיר
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero" id="hero" ref={heroRef}>
          <div className="wrap">
            <div className="content">
              <p className="eyebrow">
                <span className="bar"></span>פרגולות אלומיניום · סוככים חשמליים · הצללה אדריכלית
              </p>
              <h1 className="headline">
                שולטים ב<span className="hl-light">אור</span>.<br />
                שולטים ב<span className="hl-shadow">צל</span>.
              </h1>
              <p className="sub">
                פרגולות אלומיניום בלהבים נפתחים וסוככים חשמליים, בעיצוב אדריכלי ובבנייה שעומדת בכל מזג אוויר —
                מהתכנון ועד ההתקנה, הכול בבית אחד.
              </p>
              <div className="cta-row">
                <a href="#quote" className="btn btn-primary">
                  קבלו הצעת מחיר בחינם
                </a>
                <a href="#projects" className="btn btn-ghost">
                  צפו בפרויקטים שבנינו
                </a>
              </div>
              <div className="stats">
                <div className="stat">
                  <span className="v">0°–135°</span>
                  <span className="l">טווח הטיית הלהבים</span>
                </div>
                <div className="stat">
                  <span className="v">IP65</span>
                  <span className="l">דירוג עמידות מים ואבק</span>
                </div>
                <div className="stat">
                  <span className="v">12</span>
                  <span className="l">שנות אחריות על המבנה</span>
                </div>
              </div>
            </div>

            <div className="visual">
              <div className="stage">
                <div className="glow"></div>
                <div className="sun"></div>
                <div className="louvers">
                  <div className="louver"></div>
                  <div className="louver"></div>
                  <div className="louver"></div>
                  <div className="louver"></div>
                  <div className="louver"></div>
                </div>
                <div className="live-card">
                  <div className="l">זווית נוכחית</div>
                  <div className="v">68°</div>
                  <div className="bar-track">
                    <div className="bar-fill"></div>
                  </div>
                </div>
                <div className="speed-badge">מותקן בתוך 48 שעות</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
