import { useEffect, useRef, useState } from "react";
import AppShell from "./components/AppShell.jsx";
import DashboardHeader from "./components/DashboardHeader.jsx";
import MockMapGrid from "./components/MockMapGrid.jsx";
import RoutePlanner from "./components/RoutePlanner.jsx";
import RouteForm from "./components/RouteForm.jsx";
import SavedRoutesList from "./components/SavedRoutesList.jsx";
import { loadRoutes, saveRoutes } from "./lib/storage.js";

export default function App() {
  const [start, setStart] = useState("Block 120");
  const [destination, setDestination] = useState("Town Park");
  const [routeType, setRouteType] = useState("Cleanest");
  const [savedRoutes, setSavedRoutes] = useState(loadRoutes);
  const [editingId, setEditingId] = useState(null);
  const [savedId, setSavedId] = useState(null);
  const savedTimer = useRef(null);

  const editingRoute = savedRoutes.find((route) => route.id === editingId) || null;

  useEffect(() => {
    saveRoutes(savedRoutes);
  }, [savedRoutes]);

  useEffect(() => {
    return () => {
      if (savedTimer.current) clearTimeout(savedTimer.current);
    };
  }, []);

  function flashSaved(id) {
    setSavedId(id);
    if (savedTimer.current) clearTimeout(savedTimer.current);
    savedTimer.current = setTimeout(() => setSavedId(null), 2000);
  }

  function handleAddRoute(route) {
    setSavedRoutes((prev) => [...prev, route]);
  }

  function handleEdit(id) {
    setEditingId(id);
  }

  function handleCancelEdit() {
    setEditingId(null);
  }

  function handleUpdateRoute(updated) {
    setSavedRoutes((prev) =>
      prev.map((route) => (route.id === updated.id ? updated : route))
    );
    setEditingId(null);
    flashSaved(updated.id);
  }

  function handleDeleteRoute(id) {
    const target = savedRoutes.find((route) => route.id === id);
    const label = target ? `"${target.name}"` : "this route";
    if (!window.confirm(`Delete ${label}? This cannot be undone.`)) return;

    setSavedRoutes((prev) => prev.filter((route) => route.id !== id));
    if (editingId === id) setEditingId(null);
    if (savedId === id) setSavedId(null);
  }

  return (
    <AppShell>
      <div className="flex flex-col gap-4">
        <DashboardHeader />
        <MockMapGrid routeType={routeType} />
        <RoutePlanner
          start={start}
          destination={destination}
          routeType={routeType}
          onStartChange={setStart}
          onDestinationChange={setDestination}
          onRouteTypeChange={setRouteType}
        />
        <RouteForm
          start={start}
          destination={destination}
          routeType={routeType}
          editingRoute={editingRoute}
          onAdd={handleAddRoute}
          onUpdate={handleUpdateRoute}
          onCancelEdit={handleCancelEdit}
        />
        <SavedRoutesList
          routes={savedRoutes}
          editingId={editingId}
          savedId={savedId}
          onEdit={handleEdit}
          onDelete={handleDeleteRoute}
        />
      </div>
    </AppShell>
  );
}