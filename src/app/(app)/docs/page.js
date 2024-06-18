import DocsPreview from '@/components/DocsPreview'

export default async function Page({ params }) {
  return (
    <main className="flex flex-col w-full my-8 px-4 gap-8 md:max-w-xl lg:max-w-4xl">
      <DocsPreview title={'Latest Docs'} exclude={params.slug} />
    </main>
  )
}
