import React from 'react'
import Image from 'next/image'
const GalleryPool = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='pt-10'>
        <div className='flex justify-center items-center gap-3 p-6'>
          <div className='pt-1'>
            <Image src='/Btn1.png' width={48} height={15} alt='Button' />
          </div>
          <div>
            <p className='text-black'>Gallery</p>
          </div>
        </div>
        <h1 className='md:text-4xl text-[32px] font-semibold text-center'>
          Pool Installation Gallery Of Past Projects
        </h1>
        <div className='p-4 md:p-0'>
          <div className='lg:grid grid-cols-4 content-center pt-6'>
            <Image
              src='/Gallery1.png'
              width={464}
              height={337}
              alt='Gallery1'
            />
            <Image
              src='/Gallery2.png'
              width={464}
              height={337}
              alt='Gallery2'
            />
            <Image
              src='/Gallery3.png'
              width={464}
              height={337}
              alt='Gallery3'
            />
            <Image
              src='/Gallery4.png'
              width={464}
              height={337}
              alt='Gallery4'
            />
          </div>
          <div className='lg:flex justify-between hidden'>
            <Image
              src='/Gallery5.png'
              width={182}
              height={337}
              alt='Gallery5'
            />
            <Image
              src='/Gallery6.png'
              width={464}
              height={337}
              alt='Gallery6'
            />
            <Image
              src='/Gallery7.png'
              width={464}
              height={337}
              alt='Gallery7'
            />
            <Image
              src='/Gallery8.png'
              width={464}
              height={337}
              alt='Gallery8'
            />
            <Image
              src='/Gallery9.png'
              width={261}
              height={337}
              alt='Gallery9'
            />
          </div>
        </div>
      </div>
    </main>
  )
}

export default GalleryPool
