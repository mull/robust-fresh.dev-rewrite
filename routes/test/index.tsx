import { Handlers, PageProps } from "$fresh/server.ts"
import { createTest } from "../../lib/createTest.ts"
import { parseUrl } from "../../lib/parseUrl.ts"

interface Data {
  url: string
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url)
    return ctx.render({ url: url.toString() })
  },

  async POST(req, ctx) {
    const formData = await req.formData()
    const url = formData.get("url")!.toString()
    const parsed = parseUrl(url)

    const ids = await createTest(parsed)

    const headers = new Headers({
      location: `${new URL(req.url).origin}/test/${ids.test_run_id}`,
    })
    return new Response(null, {
      status: 302,
      headers,
    })
  },
}

export default function Page({ data }: PageProps<Data>) {
  const { url } = data

  return (
    <div>
      <form method="POST">
        <input type="text" name="url" value={url} />
        <button type="submit">Do it</button>
      </form>
    </div>
  )
}
