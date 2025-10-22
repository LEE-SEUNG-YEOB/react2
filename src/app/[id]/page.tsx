import LikeButton from '../ui/like-button'

// 🔹 앞서 import { getPost } from "@/lib/data" 대신 데이터의 직접 가져옵니다.
import { posts } from "../lib/data"
import { notFound } from 'next/navigation'
import Counter from '../components/counter'

// 🔹 옵션식에는 다음 구문으로 표시시 작성하면 좋다는 것이 더 명확해집니다.
// export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  // posts에서 슬러그에 해당하는 포스트를 불러옵니다.
  // getPost 대신 직접 posts에서 찾습니다.
  const post = posts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <main>
      <h1>{post.title}</h1>
      {/* ... */}
      <LikeButton likes={post.likes} />
      <Counter />
    </main>
  )
}
