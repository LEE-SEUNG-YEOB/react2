import Link from "next/link"
import ThemeProvider from "./components/theme-provider"
import ThemeStatus from "./components/theme-status"
import "./globals.css"
import 'bootstrap/dist/css/bootstrap.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ThemeProvider>
        <header>
          <h1 className="text-2xl font-bold p-4 bg-gray-200">My Website Header</h1>
          </header>
        <nav className="p-4 bg-gray-100">
        <Link href="/">Home</Link> |{" "}
        <Link href={"/blog"}>Blog1</Link> |{" "}
        <Link href={"/blog2"}>Blog2</Link> |{" "}
        {/* <Link href={"/blog3"}>Blog3</Link> |{" "}
        <Link href={"/products"}>Products</Link> |{" "} */}
        <Link href={"/blog4"}>Blog4</Link> |{" "}
        <Link href={"/blog5"}>Blog5</Link> |{" "}
        <Link href={"/counter"}>Counter</Link> |{" "}
        <Link href={"/1"}>1</Link> |{" "}
        <Link href={"/2"}>2</Link> |{" "}
        <Link href={"/3"}>3</Link> |{" "}
        <Link href={"/4"}>4</Link> |{" "}
        <Link href={"/carousel"}>Carousel</Link> |{" "}
        <Link href={"/artist"}>Artist</Link>
                <ThemeStatus />
        </nav>
        <hr />
        <main>{children}</main>
        <footer></footer>
        </ThemeProvider>
      </body>
    </html>
  )
}