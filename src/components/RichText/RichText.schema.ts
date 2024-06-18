import { Block } from 'payload/types'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

const RichText: Block = {
  slug: 'RichText', // required
  imageURL: 'https://placebear.com/600/300',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'RichTextBlock', // optional
  fields: [
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          // The HTMLConverter Feature is the feature which manages the HTML serializers.
          // If you do not pass any arguments to it, it will use the default serializers.
          HTMLConverterFeature({}),
        ],
      }),
    },
    lexicalHTML('richText', { name: 'richText_html' }),
  ],
}

export default RichText
