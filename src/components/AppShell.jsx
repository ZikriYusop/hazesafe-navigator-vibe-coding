export default function AppShell({ children }) {
  return (
    <div className="min-h-full bg-surface">
      <header className="sticky top-0 z-10 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-app flex-col gap-1 px-4 py-3">
          <h1 className="text-xl font-semibold text-ink">HazeSafe Navigator</h1>
          <p className="text-xs font-medium text-muted">
            Sample data prototype
          </p>
        </div>
      </header>
      <main className="mx-auto max-w-app px-4 py-6">{children}</main>
    </div>
  );
}