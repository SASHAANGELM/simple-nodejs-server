import esbuild from "esbuild";

import { config } from "./config.js";

esbuild
  .build({
    ...config,
    logLevel: "debug",
    minify: false,
  })
  .catch(() => process.exit(1));
