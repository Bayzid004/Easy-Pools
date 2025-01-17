import React from 'react'
import Image from 'next/image'
const ServingPool = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto pt-10'>
        <div className='flex justify-center items-center gap-3 p-6'>
          <div className='pt-1'>
            <Image src='/Btn1.png' width={48} height={15} alt='Button' />
          </div>
          <div>
            <p className='text-black'>Our Service Areas</p>
          </div>
        </div>
        <h1 className='text-4xl font-semibold text-center'>
          Serving the Greater Toronto Horseshoe Area for all your pools
        </h1>
        <div className='lg:flex justify-between py-6 justify-items-center'>
          <div className='w-[300px] text-center bg-[#188B89] rounded-xl'>
              <Image className='rounded-t-xl' src='/map1.png' width={300} height={189} alt='map1' />
            <p className='py-1'>Toronto</p>
          </div>
          <div className='w-[300px] lg:block hidden text-center bg-[#188B89] rounded-xl'>
              <Image className='rounded-t-xl' src='/map2.png' width={300} height={189} alt='map2' />
            <p className='py-1'>Barrie</p>
          </div>
          <div className='w-[300px] lg:block hidden text-center bg-[#188B89] rounded-xl'>
              <Image className='rounded-t-xl' src='/map3.png' width={300} height={189} alt='map3' />
            <p className='py-1'>Woodbridge</p>
          </div>
          <div className='w-[300px] lg:block hidden text-center  bg-[#188B89] rounded-xl'>
              <Image className='rounded-t-xl' src='/map1.png' width={300} height={189} alt='map4' />
            <p className='py-1'>Richmond Hill</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ServingPool
