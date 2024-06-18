import type { CollectionConfig } from 'payload/types'
import Quote from '@/components/Quote/Quote.schema'
import RichText from '@/components/RichText/RichText.schema'
import { loggedIn } from './access/loggedIn'
import { publishedOrLoggedIn } from './access/publishedOrLoggedIn'

export const Docs: CollectionConfig = {
  slug: 'docs',
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data }) => {
        return `${process.env.NEXT_PUBLIC_BASE_URL}/api/draft?&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}&collection=docs&slug=${data.slug}`
      },
    },
    preview: (data) => {
      return `${process.env.NEXT_PUBLIC_BASE_URL}/api/draft?&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}&collection=docs&slug=${data.slug}`
    },
  },
  access: {
    read: publishedOrLoggedIn,
    create: loggedIn,
    update: loggedIn,
    delete: loggedIn,
  },
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: ['users'],
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: false,
    },
    {
      name: 'layout',
      type: 'blocks',
      minRows: 1,
      maxRows: 20,
      blocks: [Quote, RichText],
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' },
      },
      required: false,
    },
  ],
}
