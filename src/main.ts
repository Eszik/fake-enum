import { DataKey } from "./dataKey";

const getDataKeys = (): DataKey[] => [DataKey.FIRST, DataKey.SECOND];

for (const key of getDataKeys()) {
  console.log(key);
}
