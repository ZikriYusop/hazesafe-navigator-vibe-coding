import { pointOptions, routePaths } from "../lib/sampleData.js";

const routeTypes = ["Fastest", "Cleanest"];

export default function RoutePlanner({
  start,
  destination,
  routeType,
  onStartChange,
  onDestinationChange,
  onRouteTypeChange,
}) {
  const activePath = routePaths[routeType];

  return (
    <section
      aria-label="Route planner"
      className="rounded-2xl border border-line bg-white p-4"
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-ink">Plan a route</h2>
        <span className="rounded-full bg-accent/30 px-2 py-0.5 text-xs font-medium text-ink">
          Sample data
        </span>
      </div>

      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted">Point A (start)</span>
          <select
            value={start}
            onChange={(e) => onStartChange(e.target.value)}
            className="min-h-[44px] rounded-xl border border-line bg-white px-3 text-base text-ink focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {pointOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted">
            Point B (destination)
          </span>
          <select
            value={destination}
            onChange={(e) => onDestinationChange(e.target.value)}
            className="min-h-[44px] rounded-xl border border-line bg-white px-3 text-base text-ink focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {pointOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-4">
        <span className="text-xs font-medium text-muted">Route type</span>
        <div
          role="group"
          aria-label="Route type"
          className="mt-1 flex rounded-full border border-line bg-surface p-1"
        >
          {routeTypes.map((type) => {
            const isActive = type === routeType;
            return (
              <button
                key={type}
                type="button"
                aria-pressed={isActive}
                onClick={() => onRouteTypeChange(type)}
                className={`min-h-[44px] flex-1 rounded-full px-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-transparent text-muted"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      <dl className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-line bg-surface px-3 py-2">
          <dt className="text-xs font-medium text-muted">Distance</dt>
          <dd className="text-base font-semibold text-ink">
            {activePath.distance}
          </dd>
        </div>
        <div className="rounded-xl border border-line bg-surface px-3 py-2">
          <dt className="text-xs font-medium text-muted">Walk time</dt>
          <dd className="text-base font-semibold text-ink">
            {activePath.duration}
          </dd>
        </div>
      </dl>

      <p className="mt-3 text-sm text-muted">
        Showing the <span className="font-medium text-ink">{activePath.label}</span> route from{" "}
        <span className="font-medium text-ink">{start}</span> to{" "}
        <span className="font-medium text-ink">{destination}</span>. Mocked
        values.
      </p>
    </section>
  );
}