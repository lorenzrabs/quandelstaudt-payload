import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Card from '@/components/Card'

export default async function DocsPreview({ exclude = '', title }) {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'docs',
    where: {
      slug: {
        not_equals: exclude,
      },
      _status: {
        equals: 'published',
      },
    },
    limit: 2,
  })

  const { docs } = data

  return (
    <section className="w-full">
      {title && <h2 className="text-4xl font-bold mb-4">{title}</h2>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {docs.map((doc) => (
          <Card key={doc.id} data={doc} />
        ))}
      </div>
    </section>
  )
}
