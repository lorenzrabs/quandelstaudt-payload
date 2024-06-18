import Link from 'next/link'

export default async function Page() {
  return (
    <main className="flex flex-col w-full my-8 px-4 gap-8 md:max-w-xl lg:max-w-4xl">
      <section className="w-full p-4 border rounded-xl">
        <div className="prose max-w-prose">
          <h1 className="mb-2">
            Your Resource for Tutorials, Workflows, and Internal Documentation
          </h1>
          <p>
            Welcome to our internal documentation hub. Here, you'll find comprehensive guides,
            detailed workflows, and essential tutorials to streamline our processes and enhance
            productivity.
          </p>
          <Link href="/docs">Read the Docs</Link>
        </div>
      </section>
    </main>
  )
}
