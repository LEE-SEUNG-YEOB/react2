/// app/blog/[slug]/page.tsx

import { posts } from '../posts';

// 빌드 타임에 생성할 slug 경로 정의
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug == params.slug);

  if (!post) return <h1>404 Not Found</h1>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
