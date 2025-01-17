import React from 'react'
import Image from 'next/image'
const BenefitsPool = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto pt-10'>
        <div className='flex justify-center items-center gap-3 p-6'>
          <div className='pt-1'>
            <Image src='/Btn1.png' width={48} height={15} alt='Button' />
          </div>
          <div>
            <p className='text-black'>Benefits</p>
          </div>
        </div>
        <h1 className='text-4xl font-semibold text-center mb-16'>
          The Benefits of Vinyl Pools for Homeowners
        </h1>
        <div className='lg:grid grid-cols-3 p-3 lg:p-0'>
          <div className='mb-6 lg:w-[425px] lg:h-[200px] border-2 border-gray-300 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6] rounded-lg'>
            <h3 className='text-black text-3xl text-center font-semibold pt-4 pb-3'>
              Durability and Longevity
            </h3>
            <p className='text-black text-[18px] text-center relative font-normal '>
              Vinyl pools boast exceptional durability,  resisting cracks
              and tears. Their longevity  ensures a lasting investment in
              your home.
            </p>
          </div>
          <div className='mb-6 lg:w-[425px] lg:h-[200px] border-2 border-gray-300 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6] rounded-lg'>
            <h3 className='text-black text-3xl text-center font-semibold pt-4 pb-3'>
              Design Versatility
            </h3>
            <p className='text-black text-[18px] text-center relative font-normal '>
              Easy Pools offers a myriad of design  options with vinyl
              liners, allowing  homeowners to customize their pools 
              appearance to match their aesthetic.
            </p>
          </div>
          <div className='mb-6 lg:w-[425px] lg:h-[200px] border-2 border-gray-300 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6] rounded-lg'>
            <h3 className='text-black text-3xl text-center font-semibold pt-4 pb-3'>
              Cost-Effective
            </h3>
            <p className='text-black text-[18px] text-center relative font-normal '>
              Compared to other pool types, vinyl pools  are often more
              budget-friendly, providing  homeowners with a cost-effective
              solution  for creating a refreshing oasis.
            </p>
          </div>
        </div>
        <div className='lg:grid grid-cols-3 lg:pt-6 p-3 lg:p-0'>
          <div className='mb-6 lg:w-[425px] lg:h-[200px] border-2 border-gray-300 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6] rounded-lg'>
            <h3 className='text-black text-3xl text-center font-semibold pt-4 pb-3'>
              Low Maintenance
            </h3>
            <p className='text-black text-[18px] text-center relative font-normal '>
              Vinyl pools require minimal maintenance,
               simplifying the upkeep process for  homeowners. This
              translates to more time  enjoying the pool and less time.
            </p>
          </div>
          <div className='mb-6 lg:w-[425px] lg:h-[200px] border-2 border-gray-300 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6] rounded-lg'>
            <h3 className='text-black text-3xl text-center font-semibold pt-4 pb-3'>
              Seamless Repairs
            </h3>
            <p className='text-black text-[18px] text-center relative font-normal '>
              In the event of any damage, vinyl pool  repairs are often
              seamless and cost- 
              effective. Small tears or punctures can be  quickly
              addressed.
            </p>
          </div>
          <div className='mb-6 lg:w-[425px] lg:h-[200px] border-2 border-gray-300 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6] rounded-lg'>
            <h3 className='text-black text-3xl text-center font-semibold pt-4 pb-3'>
              Energy Efficiency
            </h3>
            <p className='text-black text-[18px] text-center relative font-normal '>
               Vinyl pools can be insulated to help  maintain water
              temperatures efficiently.  This energy-saving feature not
              only  contributes to environmental sustainability
            </p>
          </div>
        </div>
        <div className='lg:flex justify-evenly lg:pt-6 p-3 lg:p-0'>
          <div className='mb-6 lg:w-[425px] lg:h-[200px] border-2 border-gray-300 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6] rounded-lg'>
            <h3 className='text-black text-3xl text-center font-semibold pt-4 pb-3'>
              Quick Installation
            </h3>
            <p className='text-black text-[18px] text-center relative font-normal '>
              Our company’s vinyl construction  facilitates quicker
              installation compared to  other pool types. Homeowners can
              enjoy  their aquatic retreat sooner, minimizing
            </p>
          </div>
          <div className='lg:w-[425px] lg:h-[200px] border-2 border-gray-300 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6] rounded-lg'>
            <h3 className='text-black text-3xl text-center font-semibold pt-4 pb-3'>
              Algae Resistance
            </h3>
            <p className='text-black text-[18px] text-center relative font-normal '>
              The smooth, non-porous surface of vinyl  liners resists
              algae growth more effectively  than other pool materials.
              This not only  keeps the pool water clearer.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default BenefitsPool
