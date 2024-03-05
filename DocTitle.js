import React, {useState} from 'react'
import UseCusDocTitle from './UseCusDocTitle'

function DocTitle() {
    const [count, setCount] = useState(0)

UseCusDocTitle(count)

  return (
    <div>
        <button onClick={()=> setCount(count + 1)}> Count - {count} </button>
    </div>
  )
}

export default DocTitle