import React from 'react'

function Button({handClick, children}) {
    console.log('Redering button -', children)
  return (
        <Button onClick ={handClick}>
            {children}
        </Button>
  )
}

export default React.memo(Button)