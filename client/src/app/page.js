import Navbar from '@/components/common/Navbar'
import HomeSection from '@/components/home/HomeSection'
import VideoContainer from '@/components/video/VideoContainer'

export default function Home() {
  return (
    <div className=' py-8 px-16 bg-slate-900'>
      <Navbar />
      <HomeSection />
      <VideoContainer />
    </div>
  )
}
