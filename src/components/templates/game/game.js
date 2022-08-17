import React from 'react'
export default function Game(props) {
  return (
<div className="h-[100vh] flex justify-center items-center gap-16">
  <div className={`h-[100%] flex flex-col bg-[#0f1015] justify-center items-center ${props.styleRight && "lg:right-0"}`} >
    <div className='grid gap-4 p-2'>
      <h1 className='header'>{props.title}</h1>
      <p className='max-w-xl text-2xl'>{props.desc}</p>
      <div className='flex flex-wrap gap-2'>
        <a href={props.download} target="blank" className='btn bg-violet-400 hover:bg-violet-500 transition-all'>
          Download
        </a>
      </div>
    </div>
  </div>

  <div >
    <video autoPlay loop muted>
      <source src={props.video} type="video/mp4" className='rounded-xl' />
    </video>
  </div>
</div>
  )
}
