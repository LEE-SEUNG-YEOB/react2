import Link from 'next/link'

export default function ArtistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header>Artist Page</header>
      <nav>
        <Link href="/artist/Bret">Bret</Link> &nbsp;
        <Link href="/artist/Antonette">Antonette</Link> &nbsp;
        <Link href="/artist/Samantha">Samantha</Link> &nbsp;
      </nav>
      <main>{children}</main>
      <footer>Shop Layout Footer</footer>
    </>
  )
}
