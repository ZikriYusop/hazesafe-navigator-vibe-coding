export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-line bg-white p-6 text-center">
      <p className="text-base font-semibold text-ink">No saved routes yet</p>
      <p className="mt-1 text-sm text-muted">
        Plan a route above, then save it to reuse it later. Saved routes stay in
        this browser only.
      </p>
    </div>
  );
}