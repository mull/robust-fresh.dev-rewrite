import { e, createClient } from "./edgedb.ts"

export default async function getTest(id: string) {
  const client = createClient()

  return await e
    .select(e.TestRun, (testRun) => ({
      ...e.TestRun["*"],
      filter: e.op(testRun.id, "=", e.uuid(id)),
    }))
    .run(client)
}

export type TestShape = Awaited<ReturnType<typeof getTest>>
