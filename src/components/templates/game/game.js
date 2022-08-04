import React from 'react'
export default function Game(props) {
  return (
    <div className="h-[100vh] overflow-hidden flex flex-col ">
    <div className={`h-[100%] lg:w-[50%] lg:absolute flex flex-col bg-[#0f1015] justify-center items-center ${props.styleRight && "lg:right-0"}`} >
      <div className='grid gap-4 p-2'>
        <h1 className='header'>{props.title}</h1>
        <p className='max-w-xl'>{props.desc}</p>
        <div className='flex flex-wrap gap-2'>
          <a href={props.download} target="blank" className='btn bg-violet-400 hover:bg-violet-500 transition-all'>
            Download 
          </a>
        </div>
      </div>
    </div>
    <video autoPlay loop muted className="md:object-cover">
        <source src={props.video} type="video/mp4" />
    </video>
</div>
  )
}
