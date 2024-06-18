import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function getPageBySlug(collection, slug) {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: collection,
    where: {
      slug: {
        equals: slug,
      },
    },
    draft: true,
    limit: 1,
  })

  return data
}
