export default function SavedRouteCard({
  route,
  isEditing,
  justSaved,
  onEdit,
  onDelete,
}) {
  return (
    <li
      className={`rounded-2xl border border-line p-4 transition-colors ${
        justSaved ? "bg-accent/20" : "bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-base font-semibold text-ink">{route.name}</p>
        <div className="flex shrink-0 items-center gap-1">
          {justSaved && (
            <span className="rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">
              Saved
            </span>
          )}
          <span className="rounded-full bg-accent/30 px-2 py-0.5 text-xs font-medium text-ink">
            {route.routeType}
          </span>
        </div>
      </div>
      <p className="mt-1 text-sm text-muted">
        {route.start} <span aria-hidden="true">→</span> {route.destination}
      </p>

      <div className="mt-3 flex gap-2">
        <button
          type="button"
          onClick={() => onEdit(route.id)}
          disabled={isEditing}
          aria-label={`Edit ${route.name}`}
          className="min-h-[44px] flex-1 rounded-xl border border-primary px-3 text-sm font-semibold text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => onDelete(route.id)}
          aria-label={`Delete ${route.name}`}
          className="min-h-[44px] flex-1 rounded-xl border border-haze-unhealthy px-3 text-sm font-semibold text-haze-unhealthy focus:outline-none focus:ring-2 focus:ring-haze-unhealthy focus:ring-offset-2"
        >
          Delete
        </button>
      </div>
    </li>
  );
}