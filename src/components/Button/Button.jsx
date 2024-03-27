import React from 'react'

const Button = ({
    onClick,
    children,
    width,
    height,
   
}) => {
    return (
    <button className='add_btn'
        onClick={onClick}
        sryle={{
            width: width,
            height: height,
            cursor:'Pointer',
        }}
    >
        {children}
        </button>
    )
  
}

export default Button