import esbuild from "esbuild";

import { config } from "./config.js";

esbuild
  .build({
    ...config,
    logLevel: "info",
    minify: true,
  })
  .catch(() => process.exit(1));
