import React from 'react'
import Image from 'next/image'
const BestCompany = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1605px] lg:flex lg:space-x-9 px-3 pt-12'>
        <div>
          <Image src='/Image6.png' width={950} height={810} alt='Image5' />
        </div>
        <div>
          <div className='flex items-center gap-3 justify-center lg:justify-start lg:pt-0 pt-8'>
            <div>
              <Image src='/Btn1.png' width={48} height={15} alt='Button' />
            </div>
            <div>
              <p className='text-black'>Q&A</p>
            </div>
          </div>
          <h2 className='md:text-4xl text-[32px] text-center lg:text-left font-semibold pb-6'>
            Some Questions for Choosing the Best Company
          </h2>
          {/* questions */}
          <div className='lg:w-[700px] flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium text-[18px]'>
            <p>How many years have you been installing vinyl pools?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#FFFFFF] pl-6 pr-10 py-3 text-black font-medium mb-[6px] text-base'>
            <p>Discover our commitment to quality, personalized service, and a seamless installation process that ensures your satisfaction.</p>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium mb-[6px] text-[18px]'>
            <p>Can you provide references from past clients or examples of  recent installations?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium mb-[6px] text-[18px]'>
            <p>Are you licensed and insured for pool installation in this area?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium mb-[6px] text-[18px]'>
            <p>What types of vinyl pool designs do you specialize in?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium mb-[6px] text-[18px]'>
            <p>Do you offer a warranty on your installation work and the vinyl  liner?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium mb-[6px] text-[18px]'>
            <p>How do you handle permits and local regulations for pool  installations?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium mb-[6px] text-[18px]'>
            <p>What is your process for assessing the site and  determining  the best pool design?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium mb-[6px] text-[18px]'>
            <p>How long does the typical vinyl pool installation take from start  to finish?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
          <div className='lg:w-[700px]  flex justify-between items-center bg-[#188B89] px-6 py-2 text-white font-medium mb-[6px] text-[18px]'>
            <p>What maintenance services do you offer post-installation, if any?</p>
            <div>
              <Image src='/White.png' width={9} height={16} alt='White Arrow' />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BestCompany
