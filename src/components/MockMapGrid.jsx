import {
  landmarks,
  levelMeta,
  MAP_HEIGHT,
  MAP_WIDTH,
  roads,
  routePaths,
  zones,
} from "../lib/sampleData.js";

function MapBase() {
  return (
    <>
      <rect x="0" y="0" width={MAP_WIDTH} height={MAP_HEIGHT} fill="#EEF1EF" />

      {roads.map((road) => (
        <path
          key={`${road.id}-casing`}
          d={`M ${road.points}`}
          fill="none"
          stroke="#D8DED9"
          strokeWidth={road.kind === "main" ? 13 : 8}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}
      {roads.map((road) => (
        <path
          key={road.id}
          d={`M ${road.points}`}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth={road.kind === "main" ? 9 : 5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {landmarks.map((item) => {
        if (item.kind === "canal") {
          return (
            <path
              key={item.id}
              d={`M ${item.points}`}
              fill="none"
              stroke="#D6E4EC"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          );
        }
        if (item.kind === "park") {
          return (
            <g key={item.id}>
              <rect
                x={item.x}
                y={item.y}
                width={item.w}
                height={item.h}
                rx="10"
                fill="#DCEBDF"
              />
              <text
                x={item.x + item.w / 2}
                y={item.y + item.h / 2 + 4}
                textAnchor="middle"
                fontSize="9"
                fill="#5C7A64"
              >
                {item.label}
              </text>
            </g>
          );
        }
        return (
          <rect
            key={item.id}
            x={item.x}
            y={item.y}
            width={item.w}
            height={item.h}
            rx="4"
            fill="#E2E8E4"
          />
        );
      })}
    </>
  );
}

export default function MockMapGrid({ routeType }) {
  const activePath = routePaths[routeType];
  const inactiveKey = routeType === "Fastest" ? "Cleanest" : "Fastest";
  const inactivePath = routePaths[inactiveKey];
  const activePoints = activePath.points.split(" ");
  const start = activePoints[0].split(",");
  const end = activePoints[activePoints.length - 1].split(",");

  return (
    <section
      aria-label="Neighborhood haze map"
      className="rounded-2xl border border-line bg-white p-4"
    >
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-ink">Neighborhood haze map</h2>
        <span className="rounded-full bg-accent/30 px-2 py-0.5 text-xs font-medium text-ink">
          Sample data
        </span>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-line">
        <svg
          role="img"
          aria-label={`Mock neighborhood map showing the ${activePath.label} route and haze zones`}
          viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
          className="block h-auto w-full"
        >
          <MapBase />

          {/* Haze zone patches */}
          {zones.map((zone) => {
            const meta = levelMeta[zone.level];
            return (
              <g key={zone.id}>
                <circle
                  cx={zone.cx}
                  cy={zone.cy}
                  r={zone.r}
                  fill={meta.color}
                  opacity="0.32"
                />
                <circle
                  cx={zone.cx}
                  cy={zone.cy}
                  r={zone.r * 0.55}
                  fill={meta.color}
                  opacity="0.28"
                />
              </g>
            );
          })}

          {/* Zone level pills (text, not color alone) */}
          {zones.map((zone) => {
            const meta = levelMeta[zone.level];
            const label = `${meta.label} ${zone.pm25}`;
            const width = label.length * 5.4 + 10;
            return (
              <g key={`${zone.id}-label`}>
                <rect
                  x={zone.cx - width / 2}
                  y={zone.cy - 8}
                  width={width}
                  height="16"
                  rx="8"
                  fill="#FFFFFF"
                  opacity="0.9"
                />
                <text
                  x={zone.cx}
                  y={zone.cy + 3}
                  textAnchor="middle"
                  fontSize="8"
                  fontWeight="600"
                  fill={meta.color}
                >
                  {label}
                </text>
              </g>
            );
          })}

          {/* Inactive alternative route */}
          <path
            d={`M ${inactivePath.points}`}
            fill="none"
            stroke="#9AA6A0"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="6 6"
          />

          {/* Active route */}
          <path
            d={`M ${activePath.points}`}
            fill="none"
            stroke="#1F6F4A"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Start and destination markers */}
          <circle cx={start[0]} cy={start[1]} r="9" fill="#1F6F4A" opacity="0.9" />
          <text
            x={start[0]}
            y={Number(start[1]) + 3}
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fill="#FFFFFF"
          >
            A
          </text>
          <circle cx={end[0]} cy={end[1]} r="9" fill="#23302B" opacity="0.9" />
          <text
            x={end[0]}
            y={Number(end[1]) + 3}
            textAnchor="middle"
            fontSize="9"
            fontWeight="700"
            fill="#FFFFFF"
          >
            B
          </text>
        </svg>
      </div>

      <ul className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
        {Object.entries(levelMeta).map(([key, meta]) => (
          <li key={key} className="flex items-center gap-1">
            <span
              aria-hidden="true"
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: meta.color }}
            />
            {meta.label}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-xs text-muted">
        Solid green line is the active{" "}
        <span className="font-medium text-ink">{activePath.label}</span> route;
        the dashed grey line is the alternative. A = start, B = destination.
        Mock PM2.5 values in µg/m³ — sample data, not real air quality.
      </p>
    </section>
  );
}