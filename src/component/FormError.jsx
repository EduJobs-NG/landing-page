import React from 'react'

function FormError (props) {
  return <div className='text-red-600'>{props.children}</div>
}

export default FormError