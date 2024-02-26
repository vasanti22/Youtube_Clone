import React from 'react'

const Button = ({ name }) => {
    return (
        <div>
            <button className='px-3 py-1 bg-slate-300 rounded-md'>{name}</button>
        </div>
    )
}

export default Button