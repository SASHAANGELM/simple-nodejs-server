export const config = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "dist/index.js",
  platform: "node",
  target: "node18",
  external: ["express"],
  format: "esm",
};
