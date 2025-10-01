export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>=== Blog Layout ===</header>
        <main>{children}</main>
        <footer>=== Blog Footer ===</footer>
      </body>
    </html>
  )
}