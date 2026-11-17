import GlassFolder from "@/components/ui/glass-folder-cards"

/**
 * Projects gallery, right after the hero. Each category is a real glass
 * folder: closed it shows only its cover art, hover leans the glass toward
 * you, and a click fans out that category's case studies by name.
 */
export default function ProjectsGallery() {
  return (
    <section id="projects" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          color: "var(--paper)",
          backgroundImage: "radial-gradient(currentColor 1.1px, transparent 1.4px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="wrap relative" style={{ paddingBlock: "clamp(64px, 9vw, 110px)" }}>
        <p className="eyebrow">
          <span className="bar"></span>
          תיק עבודות · 60+ פרויקטים שהושלמו
        </p>
        <h2 className="section-title">כל פרויקט מקבל תיק משלו</h2>
        <p className="section-sub">
          מבחר פרויקטים נבחרים מהשנים האחרונות — ממגורים פרטיים ועד בתי קפה ובתי מלון. לחצו על תיק כדי לדפדף בתמונות.
        </p>

        <div className="grid grid-cols-1 items-end justify-items-center gap-x-10 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
          <GlassFolder
            label="פרגולות למגורים"
            meta="וילות ובתים פרטיים"
            tone="light"
            art="aurora"
            seed={3}
            action="none"
            labelPlacement="bottom-left"
            files={[
              { name: "וילה בהרצליה פיתוח", meta: "85 מ״ר · 2024", art: "ember" },
              { name: "פנטהאוז ברמת השרון", meta: "40 מ״ר · 2023", art: "dusk" },
              { name: "תכנית בית בקיסריה", meta: "PDF · 1.4MB" },
            ]}
          />
          <GlassFolder
            label="הצללה מסחרית"
            meta="בתי קפה ובתי מלון"
            tone="dark"
            art="ember"
            seed={11}
            action="none"
            labelPlacement="top-right"
            files={[
              { name: "פטיו קפה, נמל תל אביב", meta: "60 מ״ר · 2024", art: "verdant" },
              { name: "חצר מלון, חיפה", meta: "95 מ״ר · 2025", art: "aurora" },
              { name: "הזמנת עבודה חתומה", meta: "PDF · 320KB" },
            ]}
          />
          <GlassFolder
            label="סוככים חשמליים"
            meta="בקרה ואוטומציה"
            tone="light"
            art="glacier"
            seed={7}
            action="none"
            labelPlacement="top-left"
            files={[
              { name: "דירת גג, גבעתיים", meta: "30 מ״ר · 2024", art: "dusk" },
              { name: "מרפסת פרטית, נתניה", meta: "22 מ״ר · 2023", art: "ember" },
              { name: "מפרט התקנה", meta: "PDF · 560KB" },
            ]}
          />
        </div>

        <p className="mt-16 text-center font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: "var(--muted)" }}>
          רחפו כדי להטות · לחצו כדי לפתוח
        </p>
      </div>
    </section>
  )
}
