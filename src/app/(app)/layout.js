import './global.css'
import Header from '@/components/Header'

export default async function Layout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body className="relative flex flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  )
}
