import * as edgedb from "https://deno.land/x/edgedb@v0.22.8/mod.ts"
import { Handlers, PageProps } from "$fresh/server.ts"
import getTest, { TestShape } from "$/lib/getTest.ts"
import TestResult from "$/islands/TestResults.tsx"

interface Data {
  test: NonNullable<TestShape>
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const id = ctx.params.id!
    const test = await getTest(id)
    if (!test) return ctx.renderNotFound()

    return new Response(JSON.stringify(test), {
      headers: { "Content-Type": "application/json" },
    })
  },
}
