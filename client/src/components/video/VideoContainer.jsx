import React from 'react'
import Video from './Video'
import Processing from './Processing'

function VideoContainer() {
    const videos = [1, 2, 3]
  return (
    <div className=' my-10'>
        <h1 className=' text-3xl font-semibold text-stone-50 my-4'>Demo</h1>
        <div className=' flex items-center gap-7'>
            {
                videos.map((video, index)=>{
                    return <Video key={index}/>
                })
            }
        </div>
        <div className="mt-20">
            <Processing />
        </div>
    </div>
  )
}

export default VideoContainer