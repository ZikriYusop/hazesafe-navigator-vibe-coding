import { useEffect, useState } from "react";
import { pointOptions } from "../lib/sampleData.js";

function blankForm(start, destination, routeType) {
  return { name: "", start, destination, routeType };
}

export default function RouteForm({
  start,
  destination,
  routeType,
  editingRoute,
  onAdd,
  onUpdate,
  onCancelEdit,
}) {
  const isEditing = Boolean(editingRoute);
  const [form, setForm] = useState(() =>
    blankForm(start, destination, routeType)
  );
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editingRoute) {
      setForm({
        name: editingRoute.name,
        start: editingRoute.start,
        destination: editingRoute.destination,
        routeType: editingRoute.routeType,
      });
      setErrors({});
    }
  }, [editingRoute]);

  useEffect(() => {
    if (editingRoute) return;
    setForm((prev) => ({
      ...prev,
      start,
      destination,
      routeType,
    }));
  }, [editingRoute, start, destination, routeType]);

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Enter a route name.";
    if (!form.start.trim()) nextErrors.start = "Choose a start point.";
    if (!form.destination.trim())
      nextErrors.destination = "Choose a destination.";
    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const values = {
      name: form.name.trim(),
      start: form.start,
      destination: form.destination,
      routeType: form.routeType,
    };

    if (isEditing) {
      onUpdate({ ...editingRoute, ...values });
    } else {
      onAdd({ id: `route-${Date.now()}`, ...values });
      setForm(blankForm(start, destination, routeType));
    }

    setErrors({});
  }

  function handleCancel() {
    setErrors({});
    onCancelEdit();
  }

  return (
    <section
      aria-label={isEditing ? "Edit route" : "Save a route"}
      className="rounded-2xl border border-line bg-white p-4"
    >
      <h2 className="text-lg font-semibold text-ink">
        {isEditing ? "Edit route" : "Save this route"}
      </h2>
      <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-muted">Route name</span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Morning school walk"
            className="min-h-[44px] rounded-xl border border-line bg-white px-3 text-base text-ink focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {errors.name && (
            <span className="text-xs text-haze-unhealthy">{errors.name}</span>
          )}
        </label>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted">Start (Point A)</span>
            <select
              value={form.start}
              onChange={(e) => update("start", e.target.value)}
              className="min-h-[44px] rounded-xl border border-line bg-white px-3 text-base text-ink focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a start point</option>
              {pointOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.start && (
              <span className="text-xs text-haze-unhealthy">{errors.start}</span>
            )}
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium text-muted">
              Destination (Point B)
            </span>
            <select
              value={form.destination}
              onChange={(e) => update("destination", e.target.value)}
              className="min-h-[44px] rounded-xl border border-line bg-white px-3 text-base text-ink focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select a destination</option>
              {pointOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.destination && (
              <span className="text-xs text-haze-unhealthy">
                {errors.destination}
              </span>
            )}
          </label>
        </div>

        <span className="text-xs font-medium text-muted">Route type</span>
        <div
          role="group"
          aria-label="Route type"
          className="flex rounded-full border border-line bg-surface p-1"
        >
          {["Fastest", "Cleanest"].map((type) => {
            const isActive = type === form.routeType;
            return (
              <button
                key={type}
                type="button"
                aria-pressed={isActive}
                onClick={() => update("routeType", type)}
                className={`min-h-[44px] flex-1 rounded-full px-3 text-sm font-medium transition-colors ${
                  isActive ? "bg-primary text-white" : "bg-transparent text-muted"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
        <p className="text-xs text-muted">
          {isEditing
            ? "Editing a saved route. Mocked values — sample data only."
            : "Prefilled from your plan above. Mocked values — sample data only."}
        </p>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="submit"
            className="min-h-[44px] w-full rounded-xl bg-primary px-4 text-base font-semibold text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {isEditing ? "Save changes" : "Save route"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={handleCancel}
              className="min-h-[44px] w-full rounded-xl border border-line bg-white px-4 text-base font-semibold text-ink focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}