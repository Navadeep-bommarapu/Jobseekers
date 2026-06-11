import React from 'react'
import Login from './Login'

const Navbar = () => {
  return (
    <section className='flex w-[100vw] justify-between items-center'>
        <h2 className='relative insert-1 text-[2rem] font-bold left-[1rem]'>JobSeeker</h2>
        <ul className='list-none flex justify-between gap-[10px] items-center right-[1rem]'>
            <li className='border-1 rounded-[2px] p-1'>About</li>
            <li className='border-1 rounded-[2px] p-1'>How it works</li>
            <li className='border-1 rounded-[2px] p-1'>Login</li>
        </ul>
    </section>
  )
}

export default Navbar   