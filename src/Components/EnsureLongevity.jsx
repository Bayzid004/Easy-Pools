import React from 'react'
import Image from 'next/image'
const EnsureLongevity = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto pt-10'>
        <div className='flex justify-center items-center gap-3 p-6'>
          <div className='pt-1'>
            <Image src='/Btn1.png' width={48} height={15} alt='Button' />
          </div>
          <div>
            <p className='text-black'>Ensure Longevity</p>
          </div>
        </div>
        <h1 className='md:text-4xl text-[32px] font-semibold text-center'>
          Ensure Longevity for Vinyl Pool Installation in Toronto
        </h1>
        <div>
          <div className='lg:w-[1350px] mt-6 w-[280px] mx-auto h-[4px] bg-[#00787A] rounded-full'></div>
          <div className='lg:flex gap-x-4'>
            <div className='flex-col justify-items-center'>
              <div className='border-l-4 px-1 border-[#00787A] h-16'></div>
              <div>
                <Image
                  className='border-2 px-3 py-2 rounded-[50%] border-[#049E43]'
                  src='/Ensure1.png'
                  width={87.738}
                  height={87.738}
                  alt='Process1'
                />
              </div>
              <div className='border-l-4 px-1 border-[#00787A] h-16'></div>
              <div className='w-[320px] ml-2 lg:mb-0 lg:ml-0 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
                <h3 className='text-2xl font-bold'>Premium Vinyl Liner</h3>
                <p className='text-xl font-light'>
                  Easy Pools prioritizes top-grade vinyl liners, enhancing
                  resilience against wear, tear, and UV rays.
                </p>
              </div>
            </div>
            <div className='flex-col lg:block hidden justify-items-center'>
              <div className='border-l-4 px-1 border-[#00787A] h-16'></div>
              <div>
                <Image
                  className='border-2 px-3 py-2 rounded-[50%] border-[#049E43]'
                  src='/Ensure1.png'
                  width={87.738}
                  height={87.738}
                  alt='Process1'
                />
              </div>
              <div className='border-l-4 px-1 border-[#00787A] h-16'></div>
              <div className='w-[320px] mb-5 ml-2 lg:mb-0 lg:ml-0 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
                <h3 className='text-2xl font-bold'>Robust Frame Structure</h3>
                <p className='text-xl font-light'>
                  Easy Pools prioritizes top-grade vinyl liners, enhancing
                  resilience against wear, tear, and UV rays.
                </p>
              </div>
            </div>
            <div className='flex-col lg:block hidden justify-items-center'>
              <div className='border-l-4 px-1 border-[#00787A] h-16'></div>
              <div>
                <Image
                  className='border-2 px-3 py-2 rounded-[50%] border-[#049E43]'
                  src='/Ensure3.png'
                  width={87.738}
                  height={87.738}
                  alt='Process1'
                />
              </div>
              <div className='border-l-4 px-1 border-[#00787A] h-16'></div>
              <div className='w-[320px] mb-5 ml-2 lg:mb-0 lg:ml-0 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
                <h3 className='text-2xl font-bold'>Seamless Installation</h3>
                <p className='text-xl font-light'>
                  Precision in construction minimizes potential vulnerabilities,
                  guaranteeing
                </p>
              </div>
            </div>
            <div className='flex-col lg:block hidden justify-items-center'>
              <div className='border-l-4 px-1 border-[#00787A] h-16'></div>
              <div>
                <Image
                  className='border-2 px-3 py-2 rounded-[50%] border-[#049E43]'
                  src='/Ensure4.png'
                  width={87.738}
                  height={87.738}
                  alt='Process1'
                />
              </div>
              <div className='border-l-4 px-1 border-[#00787A] h-16'></div>
              <div className='w-[320px] mb-5 ml-2 lg:mb-0 lg:ml-0 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
                <h3 className='text-2xl font-bold'>Chemical Resistance</h3>
                <p className='text-xl font-light'>
                  Our company integrates vinyl compounds resistant to pool
                  chemicals, preserving
                </p>
              </div>
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
      </div>
    </main>
  )
}

export default EnsureLongevity
