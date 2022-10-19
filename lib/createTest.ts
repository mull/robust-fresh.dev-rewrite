import { e, createClient } from "./edgedb.ts"

import { TestArguments } from "./common-types.ts"

export async function createTest(
  testArguments: TestArguments
): Promise<{ domain_id: string; test_run_id: string }> {
  const client = createClient()

  const testRun = e.insert(e.TestRun, {
    url: "https://iteam.se",
    test_arguments: testArguments,
  })

  const domain = e
    .insert(e.Domain, {
      title: "iteam.se",
    })
    .unlessConflict((domain) => ({
      on: domain.title,
      else: domain,
    }))

  const { id: domain_id } = await domain.run(client)

  const { id: test_run_id } = await e
    .update(domain, (_domain) => ({
      set: {
        test_runs: { "+=": testRun },
      },
    }))
    .run(client)

  return {
    domain_id,
    test_run_id,
  }
}
