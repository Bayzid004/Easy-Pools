import React from 'react'
import Image from 'next/image'
const QualityExcellence = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto lg:pt-6 lg:flex lg:flex-row flex-col-reverse flex justify-between'>
        {/* Content */}
        <div className='text-center lg:text-left'>
          <div className='flex items-center gap-3 justify-center md:justify-start mt-6'>
            <div>
              <Image className='pt-1' src='/Btn1.png' width={48} height={15} alt='Button' />
            </div>
            <div>
              <p className='text-black'>Quality Excellence</p>
            </div>
          </div>
          <h2 className='md:text-[42px] text-[32px] font-medium text-black'>
            Easy Pools Ensures Quality and Aquatic Excellence
          </h2>
          <p className='lg:w-[768px] pr-5 p-5 lg:p-0'>
            Quality meets innovation at Easy Pools vinyl pool installation
            wonders, setting a new benchmark for excellence in the world of
            aquatic indulgence. Imbued with meticulous craftsmanship, our vinyl
            pools reflect a commitment to durability and design that goes beyond
            expectations. Transform your outdoor space into a sanctuary of
            relaxation, where our company’s vinyl wonders redefine the very
            essence of superior pool experiences. At our company, we understand
            that a pool is more than just a recreational space; its a statement
            of your lifestyle. Our vinyl wonders epitomize this philosophy by
            seamlessly blending modern aesthetics with enduring quality. Step
            into a realm where each pool reflects our dedication to providing
            not just a swimming pool but an enduring piece of aquatic art that
            enhances the beauty of your home.
          </p>
        </div>
        {/* Image */}
        <div className='md:pt-10'>
          <Image src='/Image2.png' width={836} height={564} alt='PoolInstall' />
        </div>
      </div>
    </main>
  )
}

export default QualityExcellence
