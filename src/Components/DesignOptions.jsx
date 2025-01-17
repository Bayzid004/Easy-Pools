import React from 'react'
import Image from 'next/image'
const DesignOptions = () => {
  return (
    <main className='bg-[#E1FFFE] lg:w-[1920px] mx-auto'>
      <div className='lg:w-[1350px] mx-auto pt-10'>
        <div className='flex justify-center items-center gap-3 p-6'>
          <div>
            <Image src='/Btn1.png' width={48} height={15} alt='Button' />
          </div>
          <div>
            <p className='text-black'>Design</p>
          </div>
        </div>
        <h1 className='text-center lg:text-4xl text-3xl font-semibold'>
          Design Options for Vinyl Pool Installation in Toronto
        </h1>
        {/* Cards */}
        <div className='lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 gap-6 mt-8 gap-y-5 pb-1'>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>Tailored Patterns</h3>
            <p className='text-xl font-light'>
               Easy Pools offer a myriad of vinyl patterns,
              from mosaics to geometric designs,
              allowing for a personalized touch that suits your aesthetic
              preferences.
            </p>
          </div>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>Color Palette Diversity</h3>
            <p className='text-xl font-light'>
              Choose from a wide array of vinyl colors to harmonize with your
              outdoor space,
              creating a pool that seamlessly integrates into your
              landscape.
            </p>
          </div>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>Texture Selection</h3>
            <p className='text-xl font-light'>
              Customizable vinyl textures provide a luxurious feel,
              enhancing both the visual and tactile appeal of your pool
              and elevating its overall elegance.
            </p>
          </div>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>Inlay Options</h3>
            <p className='text-xl font-light'>
              Our company allows for unique inlays,
              such as logos or intricate designs, adding a <br />{' '}
              distinctive flair that transforms your pool into a true
              reflection of your style.
            </p>
          </div>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>Border Varieties</h3>
            <p className='text-xl font-light'>
               Select from different border options, like decorative
              tiles or contrasting vinyl strips,
              to frame your pool and enhance its visual appeal.
            </p>
          </div>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>Underwater Illumination</h3>
            <p className='text-xl font-light'>
              Enhance the nighttime ambiance by choosing vinyl with
              light-diffusing properties, transforming your pool into a{' '}
              captivating display with customizable.
            </p>
          </div>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>Transition Effects</h3>
            <p className='text-xl font-light'>
               Our company provides options for gradient vinyl designs,
              allowing for subtle color transitions that create a
              visually stunning and dynamic effect.
            </p>
          </div>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>Custom Vinyl Murals</h3>
            <p className='text-xl font-light'>
              Commission bespoke vinyl murals that showcase your
              creativity, turning your pool into a one-of-a-kind art
              vinyl pool installation that captivates and inspires.
            </p>
          </div>
          <div className='mb-5 mx-5 border rounded-md text-center p-4 bg-gradient-to-b from-[#D9D9D933] to-[#D9D9D9A6]'>
            <h3 className='text-3xl font-bold'>
              Have a project in mind? Contact us!
            </h3>
            <button className='bg-[#049E43] flex items-center gap-3 text-white p-1 mt-3 mb-2 pl-6 ml-6 pr-6 border rounded-full border-none'>
            Get Your Free Estimated{' '}
              <span>
                <Image
                  src='/RightArrow.png'
                  width={5}
                  height={5}
                  alt='RightArrow'
                />
              </span>
            </button>
            <p className='font-semibold text-xl'>or Call Us: <span className='text-[#049E43]'>+1(647) 449 9512</span></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DesignOptions
