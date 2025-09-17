export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>Root Marketing Header</header>
        {children}
        <footer>Root Marketing Footer</footer>
      </body>
    </html>
  );
}
