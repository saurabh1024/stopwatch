import React from 'react'

const Controller = () => {
  return (
    <div className='flex h-24 p-4 justify-between border-4 rounded-xl'>
        <div className='w-1/2 text-center px-4'>
            <button className='border-solid rounded-xl border-2 h-full w-full border-sky-500 uppercase cursor-pointer'>start</button>
        </div>
        <div className='w-1/2 text-center px-4'>
            <button className='border-solid rounded-xl border-2 h-full w-full border-sky-500 uppercase cursor-pointer'>Reset</button>
        </div>
    </div>
  )
}

export default Controller