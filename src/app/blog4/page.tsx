// export default function Page() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <h1 className="text-4xl font-bold">Welcome to Next.js!</h1>
//     </main>
//   );
// }
// import styles from './blog.module.css'

// export default function BlogPage() {
//   return <main className={styles.blog}>Blog Page</main>
// }
export default function Blog4Page() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Blog4 Page</h1>

      <p className="text-lg">
        This is the Blog4 page styled with Tailwind CSS.
      </p>

      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>
    </main>
  );
}