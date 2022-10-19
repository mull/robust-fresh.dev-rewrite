import { useEffect, useMemo } from "preact/hooks"
import { TestShape } from "../lib/getTest.ts"

interface Props {
  test: NonNullable<TestShape>
}

export default function TestResults({ test }: Props) {
  return (
    <div>
      <p>I should auto-fetch</p>
      <b>Yes</b>
      <pre>{JSON.stringify(test, null, 2)}</pre>
    </div>
  )
}
