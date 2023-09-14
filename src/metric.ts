export type Metric = (typeof Metric)[keyof typeof Metric];

export const Metric = {
  FIRST: "FIRST",
  SECOND: "SECOND",
} as const;
