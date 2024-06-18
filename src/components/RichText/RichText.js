export default function RichText({ data }) {
  return (
    <section className="w-full p-4 rounded-xl border">
      <div className="prose max-w-prose">
        <div dangerouslySetInnerHTML={{ __html: data.richText_html }} />
      </div>
    </section>
  )
}
