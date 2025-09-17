export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Root Blog Header</header>
        {children}
        <footer>Root Blog Footer</footer>
      </body>
    </html>
  );
}
