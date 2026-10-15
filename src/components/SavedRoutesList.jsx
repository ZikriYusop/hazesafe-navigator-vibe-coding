import EmptyState from "./EmptyState.jsx";
import SavedRouteCard from "./SavedRouteCard.jsx";

export default function SavedRoutesList({
  routes,
  editingId,
  savedId,
  onEdit,
  onDelete,
}) {
  return (
    <section aria-label="Saved routes" className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-ink">Saved routes</h2>
        <span className="text-xs text-muted">
          {routes.length} {routes.length === 1 ? "route" : "routes"}
        </span>
      </div>

      {routes.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <ul className="flex flex-col gap-3">
            {routes.map((route) => (
              <SavedRouteCard
                key={route.id}
                route={route}
                isEditing={route.id === editingId}
                justSaved={route.id === savedId}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))}
          </ul>
          <p className="text-xs text-muted">
            Saved in this browser — refresh to confirm.
          </p>
        </>
      )}
    </section>
  );
}