export default function Quote({ data }) {
  return (
    <section className="w-full flex justify-center p-4 rounded-xl border">
      <div className="prose max-w-prose text-center">
        <h2>{data.quoteText}</h2>
        <p>{data.quoteAuthor}</p>
      </div>
    </section>
  )
}
