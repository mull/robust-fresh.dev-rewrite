/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />
export { Buffer } from "https://deno.land/std@0.160.0/node/buffer.ts"

import { start } from "$fresh/server.ts"
import manifest from "./fresh.gen.ts"

import twindPlugin from "$fresh/plugins/twind.ts"
import twindConfig from "./twind.config.ts"

await start(manifest, { plugins: [twindPlugin(twindConfig)] })
