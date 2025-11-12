type Playlist = {
    id: string;
    name: string;
};

type Album = {
    id: number;
    title?: string;
};

export default async function getArtistPlaylists(artistID: string): Promise<Playlist[]> {
  // jsonplaceholder의 albums 엔드포인트를 artistID(userId)로 조회해서 플레이리스트(앨범) 검색
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${encodeURIComponent(
      artistID
    )}`,
    { next: { revalidate: 60 } } // 서버 캐시 옵션(선택)
  )
  const albums = await res.json()

  if (!Array.isArray(albums)) return []

  return (albums as Album[]).map((album) => ({
    id: String(album.id),
    name: album.title ?? `Playlist ${album.id}`,
    }));
}