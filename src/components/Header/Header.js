import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export default async function Header() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.findGlobal({
    slug: 'header',
  })

  return (
    <header className="sticky top-4 flex flex-col w-full px-4 md:max-w-xl lg:max-w-4xl mt-4 backdrop-blur-md">
      <div className="flex justify-between p-4 rounded-xl border">
        <Link href="/" className="text-xl font-bold no-underline">
          {data?.sitename}
        </Link>
        <Link href="/docs" className="text-xl font-bold no-underline">
          Docs
        </Link>
      </div>
    </header>
  )
}
