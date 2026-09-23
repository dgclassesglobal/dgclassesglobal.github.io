import type { Metadata } from "next";
import { AchievementGallery } from "@/components/AchievementGallery";
import { campusMoments, starBatches, topAchievers } from "@/lib/achievements";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Star performers and commerce top achiever photographs published by DG Classes Global. Ranks are shown only where DG Classes published them.",
  alternates: { canonical: "/achievements/" },
};

export default function AchievementsPage() {
  return (
    <div className="wrap py-12">
      <p className="eyebrow">Achievements</p>
      <h1 className="display mt-4 max-w-4xl">Star performers, as DG Classes published them.</h1>
      <p className="lede mt-5">
        These ranks come from the institute’s own star-performer posts. Marks are not added where they were not published. The current results page also marks many later months, including August 2026, as coming soon.
      </p>

      <div className="mt-12 space-y-12">
        {starBatches.map((batch) => (
          <section key={batch.id}>
            <h2 className="text-2xl font-semibold">{batch.title}</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {batch.performers.map((person) => (
                <article key={`${batch.id}-${person.name}`} className="overflow-hidden rounded-[1.3rem] border border-line bg-surface">
                  <img src={person.image} alt={`${person.name}, ${person.rank}, ${person.grade}`} className="h-80 w-full object-cover object-top" />
                  <div className="p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-dark">{person.rank}</p>
                    <h3 className="mt-1 text-xl font-semibold">{person.name}</h3>
                    <p className="text-sm text-muted">{person.grade} · {person.batch}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="section-title">Commerce top achievers</h2>
        <p className="lede mt-3">Open any photograph. Use the arrow keys, swipe, or Escape to close.</p>
        <div className="mt-6">
          <AchievementGallery images={topAchievers.map((image) => ({ ...image, caption: "Commerce top achiever" }))} />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="section-title">From the classroom archive</h2>
        <div className="mt-6">
          <AchievementGallery images={campusMoments.map((image) => ({ ...image, caption: image.alt }))} columns="sm:grid-cols-2 lg:grid-cols-3" />
        </div>
      </section>
    </div>
  );
}
