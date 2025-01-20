import * as migration_20250119_202641 from "./20250119_202641";

export const migrations = [
  {
    up: migration_20250119_202641.up,
    down: migration_20250119_202641.down,
    name: "20250119_202641",
  },
];
