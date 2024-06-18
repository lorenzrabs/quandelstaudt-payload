export default function Hero({ data }) {
  return (
    <section className="w-full p-4 rounded-xl border">
      <div className="prose max-w-prose">
        <h2 className="text-4xl mb-2">{data?.title}</h2>
        <p>
          <strong>Author: </strong>
          {data?.author?.value?.name}
        </p>
      </div>
    </section>
  )
}
