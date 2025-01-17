import React from 'react'
import Image from 'next/image'
const NavbarContent = () => {
  return (
    <main className='lg:w-[1920px] mx-auto'>
      <div className='flex justify-between items-center'>
        <div className='lg:pl-60'>
          <Image src='/LOGO.png' width={71} height={71} alt='Logo' />
        </div>
        <div>
          <ul className='lg:flex md:flex hidden justify-between space-x-3'>
            <li className='text-[17] font-[700] text-[#484848]'>About Us</li>
            <li className='text-[17] font-[700] text-[#484848]'>
              Our Services
            </li>
            <li className='text-[17] font-[700] text-[#484848]'>Blog</li>
            <li className='text-[17] font-[700] text-[#484848]'>Projects</li>
            <li className='text-[17] font-[700] text-[#484848]'>Contact Us</li>
          </ul>
        </div>
        <div className='flex space-x-2 lg:pr-60'>
          <Image src='/phone-call.png' width={37} height={37} alt='phone' />
          <p className='text-[#049E43] md:text-2xl lg:text-3xl font-[700]'>+1(647) 449 9512</p>
        </div>
        <div className='lg:hidden md:hidden block'>
          <Image src='/threeline.png' width={40} height={22} alt='threeline'/>
        </div>
      </div>
    </main>
  )
}

export default NavbarContent
