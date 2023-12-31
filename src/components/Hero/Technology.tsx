import React from 'react'
import logocss from '../../assets/css3.svg'
import logohtml from '../../assets/html5.svg'
import logosass from '../../assets/sass.svg'
import logopug from '../../assets/pug.svg'

const Technology = () => {
  return (
    <div className='w-full bg-bg-primary py-[90px]'>
        <div className='lg:max-w-[1480px] md:max-w-[1280px] m-auto max-w-[600px]'>
            <div className='grid lg:grid-cols-2 md:mx-32 gap-5'>
                <div className='lg:ml-44 lg:text-left text-center'>
                <h1 className='lg:text-xl md:text-lg text-lg font-bold text-white'>Clean & Simple Technology Stack </h1>
                <p className='md:text-lg mt-2 text-base font-normal text-gray-300'>Royalty-free for personal & commercial projects.</p>
                </div>
                <div className='flex lg:mr-24 md:gap-10 gap-5 items-center mx-3 justify-center'>
                  <div className=' bg-bg-secondary px-5 py-5 rounded-full'>
                    <img className='w-6' src={logocss} alt="css" />
                  </div>
                  <div className='  bg-bg-secondary px-5 py-5 rounded-full'>  
                    <img className='w-6' src={logohtml} alt="html" />
                  </div>
                  <div className='  bg-bg-secondary px-3 py-4 rounded-full'>
                    <img className='w-[45px]' src={logosass} alt="sass" />
                  </div>
                  <div className='  bg-bg-secondary px-4 py-5 rounded-full'>
                    <img className='w-9' src={logopug} alt="pug" />
                  </div>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Technology