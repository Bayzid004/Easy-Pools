import React from 'react'
import Image from 'next/image'
const StartProject = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto pt-10 lg:flex lg:flex-row flex-col-reverse flex justify-between'>
        {/* Content */}
        <div>
          <div className='flex items-center gap-3 justify-center lg:justify-start pt-10 lg:pt-0'>
            <div>
              <Image
                className='pt-1'
                src='/Btn1.png'
                width={48}
                height={15}
                alt='Button'
              />
            </div>
            <div>
              <p className='text-black'>Ready to Start</p>
            </div>
          </div>
          <h2 className='lg:text-[42px] text-[32px] text-center lg:text-left font-medium text-black'>
          Ready to Start Your Project with Easy Pools
          </h2>
          <p className='lg:w-[768px] pr-5 pl-3 lg:pl-0 text-center lg:text-left text-[17px]'>
          Transform your backyard into an oasis of relaxation and fun with Easy Pools, your premier vinyl pool installation company. Whether you are envisioning a serene space for family gatherings or a refreshing retreat from the summer heat, our expert team is dedicated to making your dream pool a reality. Whether you need regular cleaning, equipment upgrades, or repairs, our knowledgeable team is here to ensure your pool remains a source of enjoyment for years to come. Ready to dive into the Easy Pools experience? Contact us today to learn more about our services, explore design options, and start planning your perfect backyard getaway. Let us turn your outdoor space into a sanctuary of relaxation and joy with our expertly crafted vinyl pools. Your oasis awaits—lets create it together.

          </p>
        </div>
        {/* Image */}
        <div className='pt-10'>
          <Image src='/Image7.png' width={836} height={492} alt='PoolInstall' />
        </div>
      </div>
    </main>
  )
}

export default StartProject
