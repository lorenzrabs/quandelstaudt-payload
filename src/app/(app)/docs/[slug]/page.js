import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { notFound } from 'next/navigation'
import BlockRenderer from '@/lib/blockRenderer'
import Hero from '@/components/Hero'
import DocsPreview from '@/components/DocsPreview'
import { RefreshRouteOnSave } from '@/lib/refreshRouteOnSave'
import { draftMode } from 'next/headers'

export const dynamic = 'force-dynamic'

export default async function Page({ params }) {
  const { isEnabled } = draftMode()

  const payload = await getPayloadHMR({
    config: configPromise,
  })

  let data

  if (!isEnabled) {
    data = await payload.find({
      collection: 'docs',
      where: {
        slug: {
          equals: exclude,
        },
        _status: {
          equals: 'published',
        },
      },
      limit: 1,
    })
  } else {
    data = await payload.find({
      collection: 'docs',
      where: {
        slug: {
          equals: params.slug,
        },
      },
      draft: true,
      limit: 1,
    })

    console.log('draftMode: ', isEnabled)
    console.log(data)

    if (!data.docs[0]) return notFound()

    return (
      <>
        <RefreshRouteOnSave />
        <main className="flex flex-col w-full my-8 px-4 gap-8 md:max-w-xl lg:max-w-4xl">
          <Hero data={data.docs[0]} />
          <BlockRenderer layout={data.docs[0].layout} />
          <DocsPreview title={'Other Docs'} exclude={params.slug} />
        </main>
      </>
    )
  }
}
