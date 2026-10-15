export const MAP_WIDTH = 320;
export const MAP_HEIGHT = 360;

export const levelMeta = {
  low: { label: "Low", color: "#3FA66A", textClass: "text-white" },
  moderate: { label: "Moderate", color: "#E4C24A", textClass: "text-ink" },
  high: { label: "High", color: "#E08A3C", textClass: "text-white" },
  unhealthy: {
    label: "Unhealthy",
    color: "#C0483C",
    textClass: "text-white",
  },
};

export const roads = [
  { id: "r1", kind: "main", points: "24,72 296,72" },
  { id: "r2", kind: "main", points: "24,206 296,206" },
  { id: "r3", kind: "main", points: "16,178 304,236" },
  { id: "r4", kind: "street", points: "86,20 86,344" },
  { id: "r5", kind: "street", points: "160,20 160,344" },
  { id: "r6", kind: "street", points: "234,20 234,344" },
  { id: "r7", kind: "street", points: "24,120 234,120" },
  { id: "r8", kind: "street", points: "86,272 296,272" },
  { id: "r9", kind: "street", points: "20,322 300,330" },
];

export const landmarks = [
  { id: "canal", kind: "canal", points: "300,24 228,96 208,152" },
  { id: "park", kind: "park", x: 196, y: 40, w: 84, h: 58, label: "Riverpark" },
  { id: "blk1", kind: "block", x: 40, y: 40, w: 32, h: 22 },
  { id: "blk2", kind: "block", x: 104, y: 40, w: 40, h: 22 },
  { id: "blk3", kind: "block", x: 40, y: 138, w: 30, h: 26 },
  { id: "blk4", kind: "block", x: 104, y: 138, w: 42, h: 26 },
  { id: "blk5", kind: "block", x: 250, y: 138, w: 34, h: 26 },
  { id: "blk6", kind: "block", x: 44, y: 236, w: 30, h: 22 },
  { id: "blk7", kind: "block", x: 104, y: 236, w: 42, h: 22 },
  { id: "blk8", kind: "block", x: 250, y: 236, w: 34, h: 22 },
];

export const zones = [
  { id: "z1", cx: 62, cy: 44, r: 42, level: "low", pm25: 12 },
  { id: "z2", cx: 236, cy: 70, r: 46, level: "low", pm25: 10 },
  { id: "z3", cx: 160, cy: 96, r: 40, level: "moderate", pm25: 30 },
  { id: "z4", cx: 40, cy: 150, r: 40, level: "low", pm25: 13 },
  { id: "z5", cx: 158, cy: 166, r: 46, level: "high", pm25: 62 },
  { id: "z6", cx: 250, cy: 268, r: 46, level: "unhealthy", pm25: 92 },
  { id: "z7", cx: 120, cy: 240, r: 40, level: "moderate", pm25: 33 },
  { id: "z8", cx: 62, cy: 306, r: 44, level: "low", pm25: 11 },
  { id: "z9", cx: 210, cy: 190, r: 42, level: "moderate", pm25: 28 },
];

export const routePaths = {
  Fastest: {
    label: "Fastest",
    distance: "1.2 km",
    duration: "10 min",
    points: "62,44 160,96 158,166 196,232 250,268",
    dangerZoneIds: ["z5", "z6"],
  },
  Cleanest: {
    label: "Cleanest",
    distance: "1.6 km",
    duration: "14 min",
    points: "62,44 40,150 120,240 210,290 250,268",
    dangerZoneIds: [],
  },
};

export const pointOptions = [
  "Block 120",
  "Block 128",
  "Community Hub",
  "Town Park",
  "Mall Entrance",
  "School Gate",
  "MRT Exit B",
];

export const sampleMetrics = [
  { id: "aqi", label: "Air Quality", value: "38 AQI" },
  { id: "wind", label: "Wind Direction", value: "NE · 8 km/h" },
  { id: "trees", label: "Tree Density", value: "42%" },
];