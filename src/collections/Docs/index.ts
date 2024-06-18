import type { CollectionConfig } from 'payload/types'
import Quote from '@/components/Quote/Quote.schema'
import RichText from '@/components/RichText/RichText.schema'
import formatSlug from './hooks/formatSlug'

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
      label: 'Slug',
      type: 'text',
      index: true,
      admin: {
        position: 'sidebar',
      },
      hooks: {
        beforeValidate: [formatSlug('title')],
      },
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
