import Link from "next/link"
import ThemeProvider from "./components/theme-provider"
import ThemeStatus from "./components/theme-status"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <ThemeProvider>
        <header>=== Root Layout ===</header>
        <Link href="/">Home</Link> |{" "}
       <Link href={"/blog"}>Blog1</Link> |{" "}
         {/* <Link href={"/blog2"}>Blog2</Link> |{" "}
        <Link href={"/blog3"}>Blog3</Link> |{" "}
        <Link href={"/products"}>Products</Link> |{" "} */}
        <Link href={"/counter"}>Counter</Link> |{" "}
        <Link href={"/1"}>1</Link> |{" "}
        <Link href={"/2"}>2</Link> |{" "}
        <Link href={"/3"}>3</Link> |{" "}
        <Link href={"/4"}>4</Link> |{" "}
        <Link href={"/carousel"}>Carousel</Link>
        <hr />
        <ThemeStatus />
        <main>{children}</main>
        <footer>=== Root Footer ===</footer>
        </ThemeProvider>
      </body>
    </html>
  )
}