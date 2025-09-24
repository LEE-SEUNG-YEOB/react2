import Link from "next/link"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>=== Root Layout ===</header>
        <Link href="/">Home</Link> |{" "}
        <Link href={"/blog"}>Blog</Link> |{" "}
        <Link href={"/products"}>Products</Link> |
        <main>{children}</main>
        <footer>=== Root Footer ===</footer>
      </body>
    </html>
  )
}