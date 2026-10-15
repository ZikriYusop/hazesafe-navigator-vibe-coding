import { sampleMetrics } from "../lib/sampleData.js";

export default function DashboardHeader() {
  return (
    <section
      aria-label="Today's conditions"
      className="rounded-2xl border border-line bg-white p-4"
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-ink">Today's conditions</h2>
        <span className="rounded-full bg-accent/30 px-2 py-0.5 text-xs font-medium text-ink">
          Sample data
        </span>
      </div>
      <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
        {sampleMetrics.map((metric) => (
          <li
            key={metric.id}
            className="rounded-xl border border-line bg-surface px-3 py-2"
          >
            <p className="text-xs font-medium text-muted">{metric.label}</p>
            <p className="text-base font-semibold text-ink">{metric.value}</p>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-muted">
        Sample data — not real air quality.
      </p>
    </section>
  );
}