import Navbar from '@/components/common/Navbar'
import VideoContainer from '@/components/video/VideoContainer'

export default function Home() {
  return (
    <div className=' py-8 px-16 bg-slate-900'>
      <Navbar />
      <VideoContainer />
    </div>
  )
}
