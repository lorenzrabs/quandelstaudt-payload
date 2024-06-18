import Link from 'next/link'
import formatDate from '@/lib/formatDate'
export default function Card({ data }) {
  return (
    <div className="p-4 rounded-xl border prose">
      <Link href={`/docs/${data.slug}`} className="no-underline">
        <div className="text-black/50">{formatDate(data.createdAt)}</div>
        <h2 className="mb-2 mt-1">{data.title}</h2>
        <p>{data.excerpt}</p>
      </Link>
    </div>
  )
}
