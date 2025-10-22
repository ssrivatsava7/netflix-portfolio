// src/components/ui/chart.tsx
// -------------------------------------------------------------
// This version fixes all TS issues from Recharts payload typing.
// -------------------------------------------------------------

import * as RechartsPrimitive from "recharts";
import React from "react";

// Safe utility — some UI components rely on this
export const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

// Simplified ChartContainer component
export function ChartContainer({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 rounded-lg bg-card border border-border">
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
      )}
      {children}
    </div>
  );
}

// Tooltip with safer payload handling
export function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: any[];
  label?: string;
}) {
  if (!active || !payload || payload.length === 0) return null;

  return (
    <div className="rounded-md border border-border bg-background/95 backdrop-blur-sm p-2 shadow-lg">
      {label && (
        <p className="text-sm text-muted-foreground mb-1">{label}</p>
      )}
      {payload.map((item: any, index: number) => (
        <div key={index} className="text-sm text-foreground">
          <span
            className="inline-block w-3 h-3 mr-2 rounded-full"
            style={{ backgroundColor: item.color }}
          ></span>
          {item.name}: <strong>{item.value}</strong>
        </div>
      ))}
    </div>
  );
}

// Legend with safe optional typing
export function ChartLegend({
  payload = [],
  verticalAlign = "bottom",
}: {
  payload?: any[];
  verticalAlign?: "top" | "middle" | "bottom";
}) {
  if (!payload || payload.length === 0) return null;

  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-4 mt-3",
        verticalAlign === "top" && "mb-2",
        verticalAlign === "bottom" && "mt-2"
      )}
    >
      {payload.map((item: any, i: number) => (
        <div
          key={i}
          className="flex items-center space-x-2 text-sm text-muted-foreground"
        >
          <span
            className="inline-block w-3 h-3 rounded-full"
            style={{ backgroundColor: item.color }}
          ></span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  );
}

// Exporting core Recharts components for usage convenience
export const {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} = RechartsPrimitive;
