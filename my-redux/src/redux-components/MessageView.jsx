import React from 'react'
import { useDispatch } from 'react-redux'

export default function MessageView({ messages }) {

    const dispatch = useDispatch();

    const handleDelete = (index) => {
        dispatch({
            type:'DELETE_MESSAGE',
            index,
        })
    }


  return (
    <div>
        {
            messages.map( (msg, i) => <h4 key={i} onClick={()=>handleDelete(i)}>{msg}</h4>)
        }
    </div>
  )
}
