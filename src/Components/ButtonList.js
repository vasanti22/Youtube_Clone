import React from 'react'
import Button from './Button'


const btnList = ["All", "Live", "Gaming", "Music", "Movies", "Coding", "Podcasts", "Travel", "Food", "New", "TV","Watched"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {(btnList).map((btnName) => (
        <div className='mx-1'>
         <Button name={btnName} />
        </div>
      ))
    }
  </div>
  )
}

export default ButtonList