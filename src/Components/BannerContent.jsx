import React from 'react'
import Image from 'next/image'
const BannerContent = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      {/* image and content */}
      <div className='md:flex justify-between'>
        <div
          className='bg-cover bg-center md:w-[970px] bg-[#188B89]'
          style={{ backgroundImage: "url('/BannerImage.png')" }}
        >
          <div className='md:w-[644px] lg:ml-[285px] lg:mt-[264px] lg:p-0 p-8'>
            <h2 className='lg:text-6xl text-4xl text-left  font-bold text-[#000] pb-5'>
              Vinyl Pool Installation in Toronto
            </h2>
            <p className='lg:text-xl text-base pb-3 text-[#0D0D0D] font-[400]'>
              Discover the artistry of vinyl pool installation in Toronto with
              Easy Pools where precision meets passion to create aquatic
              masterpieces.
            </p>
            <div className='flex'>
              <button className='bg-[#049E43] flex items-center gap-3 text-white  border rounded-full border-none px-4'>
                Get an Estimate
                <span>
                  <Image
                    src='/RightArrow.png'
                    width={5}
                    height={5}
                    alt='RightArrow'
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Image
            className='lg:block hidden'
            src='/Image11.png'
            width={950}
            height={812}
            sizes='(max-width: 640px) 100vw,(max-width: 1024px)58vw, 33vw'
            alt='Banner Image'
          />
        </div>
      </div>
      {/* Star Score rating */}
      <div className='lg:w-[1350px] w-[300px] mt-12 mx-auto bg-white rounded-md p-4 lg:relative bottom-24 pt-10'>
        <div className='lg:flex'>
          {/* Star 99% */}
          <div className='flex-col justify-items-center'>
            <div className='flex items-center gap-1'>
              <h3>Star Score</h3>
              <div className='border border-[#535455] w-3 h-3 flex justify-center items-center rounded-[50%]'>
                <p className='text-[14px]'>i</p>
              </div>
            </div>
            <div className='flex space-x-2 items-center'>
              <Image src='/Star.png' width={60} height={60} alt='Star' />
              <p className='text-4xl font-bold'>99%</p>
            </div>
          </div>
          {/* rating bars */}
          <div className='lg:flex gap-6'>
            {/* Left side */}
            <div className='flex-col justify-items-end lg:pl-4 md:pr-8 pt-4 lg:pt-1'>
              <div className='flex items-center gap-2'>
                <h4 className='md:text-base text-[8px]'>average rating</h4>
                <p className='lg:w-[400px] w-[200px] h-[8px] md:h-[15px] bg-[#7EB537] rounded-full'></p>
                <div className='border border-[#535455] w-3 h-3 hidden md:flex justify-center items-center rounded-[50%]'>
                  <p className='text-[14px]'>i</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <h4 className='md:text-base text-[8px]'>recency</h4>
                <p className='lg:w-[400px] w-[200px] md:h-[15px] h-[8px] bg-[#7EB537] rounded-full'></p>
                <div className='border border-[#535455] w-3 h-3 hidden md:flex justify-center items-center rounded-[50%]'>
                  <p className='text-[14px]'>i</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <h4 className='md:text-base text-[8px]'>reputation</h4>
                <p className='lg:w-[400px] w-[200px] md:h-[15px] h-[8px] bg-[#7EB537] rounded-full'></p>
                <div className='border border-[#535455] w-3 h-3 hidden md:flex justify-center items-center rounded-[50%]'>
                  <p className='text-[14px]'>i</p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <h4 className='md:text-base text-[8px]'>responsiveness</h4>
                <p className='lg:w-[400px] w-[200px] md:h-[15px] h-[8px] bg-[#7EB537] rounded-full'></p>
                <div className='border border-[#535455] w-3 h-3 hidden md:flex justify-center items-center rounded-[50%]'>
                  <p className='text-[14px]'>i</p>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className='lg:flex justify-between items-center lg:space-x-6'>
              <div className='md:pr-12 lg:pr-0 pt-4 lg:pt-1'>
                <h2 className='font-semibold'>
                  Reviews by rating <span className='font-light'>(past 12 months)</span>
                </h2>
                <div className='flex-col justify-items-end'>
                  <div className='flex items-center gap-1'>
                    <h4 className='md:text-base text-[8px]'>Great</h4>
                    <p className='lg:w-[400px] w-[200px] md:h-[15px] h-[8px] bg-[#7EB537] rounded-full'></p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <h4 className='md:text-base text-[8px]'>Average</h4>
                    <p className='lg:w-[400px] w-[200px] md:h-[15px] h-[8px] bg-[#D1D2D4] rounded-full'></p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <h4 className='md:text-base text-[8px]'>Poor</h4>
                    <p className='lg:w-[400px] w-[200px] md:h-[15px] h-[8px] bg-[#D1D2D4] rounded-full'></p>
                  </div>
                </div>
              </div>
              <div className='flex-1 justify-items-center pt-5 lg:pt-1'>
                <Image
                  src='/logorating.png'
                  width={100}
                  height={100}
                  alt='Logo'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sponsor */}
      <div className='lg:w-[1350px] mx-auto grid lg:grid-cols-6 grid-cols-2 gap-y-4 p-6 gap-x-2'>
        <div className='flex-col justify-center border lg:border-none rounded-2xl p-3 place-items-center'>
          <Image src='/Banner31.png' width={148} height={66} alt='Banner31' />
          <p className='text-base font-normal text-center text-[#414141]'>
            Read our 5-star reviews{' '}
            <span className='lg:block hidden'>on Google Maps</span>
          </p>
        </div>
        <div className=' flex-col justify-center border lg:border-none rounded-2xl p-3 place-items-center'>
          <Image src='/Banner32.png' width={71} height={66} alt='Banner31' />
          <p className='text-base font-normal pt-4 text-center text-[#414141]'>
            Easy excels at turning ordinary{' '}
            <span className='lg:block hidden'>into outstanding.</span>
          </p>
        </div>
        <div className='rounded-2xl p-3 border lg:border-none  flex-col justify-center place-items-center'>
          <Image src='/Banner33.png' width={158} height={66} alt='Banner31' />
          <p className='text-base lg:pt-10 pt-5 font-normal text-center text-[#414141]'>
            Join our satisfied customers
          </p>
        </div>
        <div className=' border lg:border-none rounded-2xl p-3 flex-col justify-center place-items-center'>
          <Image src='/Banner34.png' width={110} height={66} alt='Banner31' />
          <p className='text-base font-normal pt-4 text-center text-[#414141]'>
            Outstanding Achievement Award
          </p>
        </div>
        <div className=' border lg:border-none rounded-2xl p-3 flex-col justify-center place-items-center'>
          <Image src='/Banner35.png' width={155} height={66} alt='Banner31' />
          <p className='text-base font-normal pt-4 text-center text-[#414141]'>
            Getting a professional design <span className='lg:block hidden'>service in addition</span>
          </p>
        </div>
        <div className=' border lg:border-none rounded-2xl p-3 flex-col justify-center place-items-center'>
          <Image src='/Banner36.png' width={85} height={66} alt='Banner31' />
          <p className='text-base font-normal pt-4 text-center text-[#414141]'>
            Getting a professional design <span className='lg:block hidden'>service in addition</span>
          </p>
        </div>
      </div>
    </main>
  )
}

export default BannerContent
