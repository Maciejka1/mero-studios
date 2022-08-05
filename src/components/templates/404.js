import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='container '>
      <div className='flex justify-center items-center min-h-[80vh] flex-col'>
        <h1 className='font-bold text-8xl'>404</h1>
        <Link to="/" className='btn bg-violet-400 hover:bg-violet-500'>Go back</Link>
      </div>
    </div>
  )
}
