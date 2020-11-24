import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function ScreenAddMovie(){
    let dispatch = useDispatch()
    let [ title, setTitle ] = useState('')

    return (
        <div>
            <input value={title} onChange={(event) => setTitle(event.target.value)} />
            <br/>
            <button onClick={() => dispatch({ type: 'ADD_MOVIE'})}>Add</button>
        </div>
    )
}