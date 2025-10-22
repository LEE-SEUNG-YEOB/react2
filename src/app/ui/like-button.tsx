'use client'

import { useState } from 'react'

export default function LikeButton({ likes }: { likes: number }) {
  // 🔹 Optimistic Updates(낙관적 업데이트)
  // 클릭과 동시에 화면 반영 - 즉, 사용자의 반응에 즉시 반영합니다.
  // 서버에서 저장이 늦어지거나, 다음 렌더 시에 상태가 수정될 수 있음을 감안합니다.
  const [count, setCount] = useState<number>(likes ?? 0)
  const [isLiking, setIsLiking] = useState(false)

  const handleClick = async () => {
    // 🔸 낙관적 업데이트
    setIsLiking(true)
    setCount((c) => c + 1)

    // 현재 저장 로직(API 호출 등)이 있다면 여기에서 호출할 수 있습니다.
    // 예: await fetch('/api/like', { method: 'POST', body: JSON.stringify({ id }) })

    // 예시에서는 짧은 지연 후 버튼 상태를 복구합니다.
    setTimeout(() => setIsLiking(false), 300)
  }

  return (
    <button onClick={handleClick} disabled={isLiking} aria-pressed={false}>
      👍 {count}
    </button>
  )
}
