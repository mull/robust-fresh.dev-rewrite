import { Handlers, PageProps } from "$fresh/server.ts"
import TestResults from "$/islands/TestResults.tsx"
import getTest, { TestShape } from "$/lib/getTest.ts"

interface Data {
  test: NonNullable<TestShape>
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const id = ctx.params.id!
    const test = await getTest(id)

    if (!test) return ctx.renderNotFound()
    return ctx.render({ test })
  },
}

export default function Placeholder({ data: { test } }: PageProps<Data>) {
  return (
    <div>
      <pre>{JSON.stringify(test, null, 2)}</pre>
      <h1>Here's that island you wanted</h1>
      <TestResults test={test} />
    </div>
  )
}
