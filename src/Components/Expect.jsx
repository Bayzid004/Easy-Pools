import React from 'react'
import Image from 'next/image'
const Expect = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto pt-10'>
        <div className='flex justify-center items-center gap-3 p-6'>
          <div className='pt-1'>
            <Image src='/Btn1.png' width={48} height={15} alt='Button' />
          </div>
          <div>
            <p className='text-black'>Review</p>
          </div>
        </div>
        <h1 className='text-4xl font-semibold text-center'>
          Here’s what to expect when you hire us
        </h1>
        {/* Card */}
        <div className='lg:flex justify-between items-center pt-8'>
          <div className='lg:block hidden w-[381px] h-[242px] border-2 rounded-xl p-4 shadow bg-white backdrop-contrast-50 bg-white/60'>
            <div>
              <Image src='/Banner31.png' width={148} height={83} alt='Expect' />
            </div>
            <div>
              <Image src='/Stars.png' width={148} height={83} alt='Expect' />
            </div>
            <p className='text-[12px] mt-1 mb-1'>
              I would highly recommend this company. They came in, listened to
              our crazy budget restrictions, and came up with the most genius
              cost-saving suggestion that we pulled.
            </p>
            <h4 className='text-sm font-bold'>Lisa Silva</h4>
            <p className='text-[9px]'>North York</p>
          </div>
          <div className='lg:w-[538px] lg:h-[334px] mx-3 border-2 rounded-xl p-4 shadow bg-white'>
            <div>
              <Image src='/Banner31.png' width={148} height={83} alt='Expect' />
            </div>
            <div>
              <Image src='/Stars.png' width={148} height={83} alt='Expect' />
            </div>
            <p className='text-[18px] mt-1 mb-1'>
              I would highly recommend this company. They came in, listened to
              our crazy budget restrictions, and came up with the most genius
              cost-saving suggestion that we pulled off effortlessly. Huge
              thanks. From start to finish working with Easy Renovation was a
              great experience.
            </p>
            <h4 className='text-base font-bold'>Lisa Silva</h4>
            <p className='text-[10px]'>North York</p>
          </div>
          <div className='lg:block hidden w-[381px] h-[242px] border-2 rounded-xl p-4 shadow bg-white backdrop-contrast-50 bg-white/60'>
            <div>
              <Image src='/Banner31.png' width={148} height={83} alt='Expect' />
            </div>
            <div>
              <Image src='/Stars.png' width={148} height={83} alt='Expect' />
            </div>
            <p className='text-[12px] mt-1 mb-1'>
              I would highly recommend this company. They came in, listened to
              our crazy budget restrictions, and came up with the most genius
              cost-saving suggestion that we pulled.
            </p>
            <h4 className='text-sm font-bold'>Lisa Silva</h4>
            <p className='text-[9px]'>North York</p>
          </div>
        </div>
        <div className='lg:w-[900px] w-[300px] mx-auto'>
          <div className='flex items-center justify-center space-x-2 py-4'>
            <div className='flex-grow border-t-2 border-[#049E43]'></div>
            <button className='flex items-center justify-center w-8 h-8 bg-white text-green-500 hover:text-white rounded-full hover:bg-green-600'>
              &lt;
            </button>
            <button className='flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600'>
              &gt;
            </button>
            <div className='flex-grow border-t-2 border-[#049E43]'></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Expect
