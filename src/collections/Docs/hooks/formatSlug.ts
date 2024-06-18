import type { FieldHook } from 'payload/types'

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase()

const formatSlug =
  (fallback: string): FieldHook =>
  (props) => {
    const { operation, data, value, originalDoc } = props

    if (typeof value === 'string' && value !== '') {
      return format(value)
    }

    if (operation === 'update') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback]

      if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData)
      }
    }

    return value
  }

export default formatSlug
