import React from 'react'
import Image from 'next/image'
const FooterPool = () => {
  return (
    <main className='lg:w-[1920px] mx-auto'>
      <div
        className='lg:w-[1920px] mx-auto lg:h-[568px] bg-cover bg-center'
        style={{
          backgroundImage: "url('/Footer.png')"
        }}
      >
        <div className='lg:w-[1350px] mx-auto text-white pt-28'>
          <div className='lg:grid grid-cols-4'>
            <div>
              <Image
                src='/LOGO.png'
                width={128}
                height={128}
                alt='Footer LOGO'
              />
              <p className='text-[13px] lg:w-[300px] pr-12 pt-3'>
                With expert pool installers Easy Pools specializes in
                professional vinyl pool installation and pool liner services in
                Toronto.
              </p>
              <div className='flex gap-x-8 pt-6'>
                <Image
                  src='/Social1.png'
                  width={28}
                  height={30}
                  alt='Facebook'
                />
                <Image
                  src='/Social2.png'
                  width={28}
                  height={30}
                  alt='Facebook'
                />
                <Image
                  src='/Social3.png'
                  width={28}
                  height={30}
                  alt='Facebook'
                />
                <Image
                  src='/Social4.png'
                  width={28}
                  height={30}
                  alt='Facebook'
                />
              </div>
            </div>
            <div className='pl-10'>
              <h2 className='text-2xl pb-4 font-semibold'>News </h2>
              <ul className='text-[14px] font-light space-y-5'>
                <li>How it works </li>
                <li>Gallery</li>
                <li>Testimonials</li>
                <li>Careers</li>
                <li>Sitemap</li>
              </ul>
            </div>
            <div className='pl-10'>
              <h2 className='text-2xl pb-4 font-semibold'>Ours Services</h2>
              <ul className='text-[14px] font-light space-y-5'>
                <li>Vinyl pool</li>
                <li>Fiberglass pool</li>
                <li>Concrete pool</li>
                <li>ICF pool</li>
                <li>Pool Installations</li>
              </ul>
            </div>
            <div className='pl-10'>
              <h2 className='text-2xl pb-4 font-semibold'>Contact Us</h2>
              <div className='flex gap-x-2 pb-5'>
                <Image
                  src='/Contact1.png'
                  width={21}
                  height={21}
                  alt='Contact1'
                />
                <p className='text-[12px] font-light'>
                  1331 Major Mackenzie dr West, Vaughan
                </p>
              </div>
              <div className='flex gap-x-2 pb-5'>
                <Image
                  src='/Contact2.png'
                  width={21}
                  height={21}
                  alt='Contact1'
                />
                <p className='text-[12px] font-light'>+1(647)449-9512</p>
              </div>
              <div className='flex gap-x-2 pb-5'>
                <Image
                  src='/Contact3.png'
                  width={21}
                  height={21}
                  alt='Contact1'
                />
                <p className='text-[12px] font-light'>
                  easypools.landscaping@gmail.com
                </p>
              </div>
              <div className='grid lg:grid-cols-4 grid-cols-3 gap-x-2'>
                <Image
                  src='/Contact11.png'
                  width={58}
                  height={23}
                  alt='Contact1'
                />
                <Image
                  src='/Contact12.png'
                  width={89}
                  height={24}
                  alt='Contact1'
                />
                <Image
                  src='/Contact13.png'
                  width={58}
                  height={23}
                  alt='Contact1'
                />
                <Image
                  src='/Contact14.png'
                  width={60}
                  height={24}
                  alt='Contact1'
                />
                <Image
                  src='/Contact15.png'
                  width={56}
                  height={26}
                  alt='Contact1'
                />
              </div>
              <div className='text-center lg:hidden block'>
                <div className='pt-8 pb-5'>
                  <p>© All Copyright 2024 by Easy Pools</p>
                </div>
                <div className='flex gap-x-5 pt-8 pb-5'>
                  <p>Terms & Condition</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[1920px] mx-auto bg-gradient-to-r from-[#041312] to-[#139896] text-white'>
        <div className='lg:w-[1350px] mx-auto flex justify-between'>
          <div className='flex items-center pt-5 pb-5 gap-x-2'>
            <h2 className='lg:text-2xl text-[8px] pl-6 lg:pl-0 font-bold'>WEBSITE DESIGN AND SEO BY :-</h2>
            <Image
              src='/Gokundu-logo.png'
              width={164}
              height={42}
              alt='Gokundu-logo'
            />
          </div>
          <div className='pt-8 pb-5 lg:block hidden'>
            <p>© All Copyright 2024 by Easy Pools</p>
          </div>
          <div className='lg:flex gap-x-5 pt-8 pb-5 hidden'>
            <p>Terms & Condition</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default FooterPool
