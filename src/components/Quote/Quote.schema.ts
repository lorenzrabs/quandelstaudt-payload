import { Block } from 'payload/types'

const Quote: Block = {
  slug: 'Quote', // required
  imageURL: 'https://placebear.com/600/300',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'QuoteBlock', // optional
  fields: [
    {
      name: 'quoteText',
      type: 'text',
      required: true,
    },
    {
      name: 'quoteAuthor',
      type: 'text',
    },
  ],
}

export default Quote
