import React, {useEffect, useRef} from 'react'

function UseRefHookInput() {
    const inputRef = useRef(null)

    useEffect(() =>{
        inputRef.current.focus()
    })
  return (
    <div>
        <h1>UseRefHookInput</h1>
        <input ref={inputRef} type='text' />
    </div>
  )
}

export default UseRefHookInput