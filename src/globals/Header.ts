import type { GlobalConfig } from 'payload/types'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'sitename',
      type: 'text',
    },
  ],
}
