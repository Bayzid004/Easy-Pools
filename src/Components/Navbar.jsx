import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <section className='bg-gradient-to-r from-[#062524] to-[#188B89] lg:w-[1920px] lg:mx-auto'>
      <div className='xl:flex xl:w-9/12 lg:flex md:flex hidden justify-between items-center lg:w-10/12 md:w-11/12 mx-auto p-1'>
        <div className='flex space-x-2'>
          <Image src='/Canada.png' width={30} height={40} alt='me'/>
          <h3 className='text-white font-bold'>
            Swimming Pool Installation in Toronto
          </h3>
        </div>
        <div>
          <ul className='flex justify-center items-center gap-10'>
            <li>
                <Image src='/Facebook.png' width={30} height={40} alt='me'/>
            </li>
            <li>
                <Image src='/x.png' width={30} height={40} alt='me'/>
            </li>
            <li>
                <Image src='/Instagram.png' width={30} height={40} alt='me'/>
            </li>
            <li>
                <Image src='/Linkein.png' width={30} height={40} alt='me'/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar
