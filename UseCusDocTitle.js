import React, {useEffect} from 'react'

function UseCusDocTitle(count) {
    useEffect(()=> {
        document.title = 'Count ${count}'
    }, [count])
}

export default UseCusDocTitle