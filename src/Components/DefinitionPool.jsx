import React from 'react'
import Image from 'next/image'
const DefinitionPool = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto pt-10 lg:flex justify-between'>
        <div className='md:w-[600px] ml-2  w-[280px] flex-col justify-items-center'>
          <div>
            <Image
              src='/Image3.png'
              width={616}
              height={200}
              alt='Image3'
            />
          </div>
          <div className='relative bottom-10 left-10'>
            <Image
              src='/Image4.png'
              width={616}
              height={200}
              alt='Image4'
            />
          </div>
        </div>
        <div className='text-center lg:text-left'>
          <div className='flex items-center gap-3 p-4 justify-center md:justify-start lg:pl-0'>
            <div>
              <Image src='/Btn1.png' width={48} height={15} alt='Button' />
            </div>
            <div>
              <p className='text-black'>Definition</p>
            </div>
          </div>
          <h2 className='text-[36px] font-medium text-black'>
            Definition of a Vinyl Pool
          </h2>
          <p className='lg:w-[670px] lg:pr-24'>
            A vinyl pool is a type of swimming pool that uses a vinyl liner to
            contain the water. The liner is a flexible, waterproof membrane that
            lines the pool interior, providing a smooth and durable surface.
            Vinyl pools are typically constructed with steel or polymer wall
            panels that form the shape of the pool, over which the vinyl liner
            is installed. The vinyl liner serves as the pool waterproof
            membrane, offering a smooth and comfortable surface. We specialize
            in creating these pools with precision and ease of maintenance,
            ensuring a cost-effective solution for those seeking a versatile and
            visually appealing swimming experience. With a vinyl pool by our
            vinyl pool installer, individuals can enjoy the benefits of a
            well-crafted pool that seamlessly integrates into their outdoor
            space, combining durability and aesthetic appeal.Our seamless installation process ensures that your pool is ready for use in no time. We provide comprehensive renovation services to update and enhance your pool’s appearance and functionality. Our commitment to our clients extends beyond installation. 
          </p>
        </div>
      </div>
    </main>
  )
}

export default DefinitionPool
