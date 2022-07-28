import React from 'react'
export default function Game() {
  return (
    <div className="h-[100vh] overflow-hidden flex flex-col">
    <div className="h-[100%] lg:w-[50%] lg:absolute flex flex-col bg-[#0f1015] justify-center items-center " >
      <div className='grid gap-4'>
        <h1 className='text-5xl font-bold'>Never Found</h1>
        <p className='max-w-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error excepturi optio vero nihil consequuntur deserunt sit earum asperiores</p>
        <div className='flex gap-2'>
          <p className='btn bg-violet-400 hover:bg-violet-500 transition-all'>
            Download 
          </p>
          <a href="/contact" className='btn border-violet-400 border-[2px] hover:bg-violet-500 hover:border-violet-500 transition-all'>
            WYmysl tu cos
          </a>
          #0f1015
          dodaj snap scrolling
        </div>
      </div>
    </div>
    <video autoPlay loop muted className="w-[100%] bg-gray-500">
        <source src="" type="video/mp4" />
    </video>
</div>
  )
}
