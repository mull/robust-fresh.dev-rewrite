// TODO: Ugly hack
// export { createClient } from "https://raw.githubusercontent.com/seanaye/edgedb-js/dist/deno/mod.ts"
import * as edgedb from "https://deno.land/x/edgedb@v0.22.8/mod.ts"
import _e from "../dbschema/edgeql-js/index.ts"
export type { $infer } from "../dbschema/edgeql-js/index.ts"

// export const client = createClient()
export const e = _e
export const createClient = edgedb.createClient
