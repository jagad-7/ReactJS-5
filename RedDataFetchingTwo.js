import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':   
        return {
            loading: false,
            post: action.playload,
            error: ''
        }
        case 'FETCH_ERROR':
        return {
            loading: false,
            post: {},
            error: 'Something Went Wrong!'
        }
        default:
            return state
    }
}

function RedDataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState) 

    useEffect(() =>{
        axios
        .get('https://jsonplaceholder.typicode.com/posts/1')
        .then(Response =>{
            dispatch({type: 'FETCH_SUCCESS', playload : Response.data})
        })
        .catch(error =>{
            dispatch({type: 'FETCH_ERROR'})
        })
    }, [])
  return (
    <div>
        {state.loading ? 'Loading' : state.post.tutle}
        {state.error ? state.error : null}
    </div>
  )
}

export default RedDataFetchingTwo