// app/blog/page.tsx
import Posts from './posts'
import { Suspense } from 'react'
import getPosts from '../lib/getPosts'

export default function Page() {
  // Promise 반환하는 getPosts() 사용
  const posts = getPosts('https://jsonplaceholder.typicode.com/posts')

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Posts posts={posts} />
    </Suspense>
  )
}
