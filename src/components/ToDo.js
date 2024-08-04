import React from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiFillDelete} from 'react-icons/ai'
const ToDo = ({text, updateToDo, deleteToDo}) => {
  return (
    <div className='todo'>
    <div className='text'>{text}</div>
    <div className='icons'>
    <BiEdit className='icon' onClick={updateToDo}/>
    <AiFillDelete className='icon' onClick={deleteToDo}/>
    </div>
    </div>
  )
}

export default ToDo