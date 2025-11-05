import Gallery from '../components/gallery'
 
export default function Page() {
  return (
    <div>
      <p>View pictures</p>
      {/*  Works, since Carousel is a Client Component */}
      <Gallery />
    </div>
  )
}