import { Metric } from "./metric.js";

export type DataKey = Metric;
export const DataKey = Metric;

export const isDataKey = (value: string): value is DataKey => value in DataKey;
