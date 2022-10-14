import { TestArguments } from "./common-types.ts"

export function createTest(_testArguments: TestArguments): Promise<string> {
  return Promise.resolve(crypto.randomUUID())
}
