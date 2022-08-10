import React from 'react'
import {FaCaretDown} from 'react-icons/fa'
export default function Faq(props) {
  let [visible, setVisible] = React.useState(false)
  return (
    <div className='bg-slate-900 rounded-3xl p-5 mt-5' onClick={() => {setVisible(!visible)}}>
      <div className='flex justify-between items-center'>
        <p className='font-bold'>{props.title}</p>
        <FaCaretDown/>
      </div>
      <div style={{display: visible ? "flex" : "none"}}>
        <p>
          {props.content}
        </p>
      </div>
    </div>
  )
}
