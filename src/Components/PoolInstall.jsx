import React from 'react'
import Image from 'next/image'
const PoolInstall = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto lg:pt-6 lg:flex lg:flex-row flex-col-reverse flex justify-between'>
        {/* Content */}
        <div className='text-center lg:text-left pt-8'>
          <div className='flex justify-center md:justify-start items-center gap-3'>
            <div>
              <Image src='/Btn1.png' width={48} height={15} alt='Button' />
            </div>
            <div>
              <p className='text-black'>About Us</p>
            </div>
          </div>
          <h2 className='md:text-[42px] text-[32px] font-medium text-black'>
            About Our Vinyl Pool Installation Company in Toronto
          </h2>
          <p className='lg:w-[768px] text-[18px] lg:p-0 lg:pr-6 p-4'>
            Welcome to Easy Pools, Toronto’s premier vinyl pool installation
            company. With years of experience and a passion for creating
            luxurious outdoor spaces, we are dedicated to transforming your
            backyard into a personal oasis. At Easy Pools, we pride ourselves on
            our craftsmanship, attention to detail, and exceptional customer
            service. Our skilled professionals bring expertise and innovation to
            every project, ensuring that your pool is beautiful and built to
            last. We specialize in installing high-quality vinyl pools, offering
            a variety of designs and customization options to fit your style and
            budget. Our seamless installation process ensures that your pool is
            ready for use in no time. We provide comprehensive renovation
            services to update and enhance your pool’s appearance and
            functionality. Our commitment to our clients extends beyond
            installation. We offer reliable maintenance and repair services to
            keep your pool in perfect condition year-round.
          </p>
        </div>
        {/* Image */}
        <div className='pt-10'>
          <Image src='/Image2.png' width={836} height={564} alt='PoolInstall' />
        </div>
      </div>
    </main>
  )
}

export default PoolInstall
