interface Props {
  title: string
}

export default function NewTestForm({ title }: Props) {
  return (
    <div>
      <h4 class="text-md font-bold text-lightPeach mb-4">{title}</h4>
      <form
        method="post"
        action="/test/"
        class="flex flex-1 flex-col lg:flex-row gap-2 md:gap-0"
      >
        <input
          class="rounded-t-lg lg:rounded-t-none lg:rounded-l-lg p-6 border-0 bg-lightPeach flex-grow-1"
          type="url"
          name="url"
          placeholder="Ex: https://example.com"
          required={true}
        />
        <button
          type="submit"
          class="rounded-b-lg lg:rounded-b-none lg:rounded-br-lg lg:rounded-tr-lg py-4 border-0 bg-orange uppercase text-sm font-bold whitespace-nowrap px-8"
        >
          Starta test
        </button>
      </form>
    </div>
  )
}
