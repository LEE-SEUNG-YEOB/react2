import { Nanum_Pen_Script } from 'next/font/google'

const geist = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: '400',
});

export default function Page() {
  return (
    <main className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Welcome to Blog2 Page</h2>
      <p className={`p-4 text-4xl ${geist.className}`}>
        하늘그림 펜 스크립트 폰트가 적용된 블로그2 페이지입니다.
      </p>
    </main>
  );
}
