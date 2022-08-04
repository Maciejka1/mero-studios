import React from 'react'
import {FaCaretDown} from 'react-icons/fa'
export default function Faq(props) {
  return (
    <div className='bg-slate-900 rounded-full p-5 mt-5'>
      <div className='flex justify-between items-center'>
        {props.title}
        <FaCaretDown/>
      </div>
    </div>
  )
}
