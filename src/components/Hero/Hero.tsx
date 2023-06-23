import React from 'react'
import preview1 from '../../assets/preview-desktop.jpg'
import preview2 from '../../assets/preview-tablet.jpg'
import preview3 from '../../assets/preview-mobile.jpg'

const Hero = () => {
  return (
    <div id='hero' className='w-full bg-bg-primary'>
        <div className='max-w-[1480px] m-auto'>
        <h1 className='text-center text-4xl py-28 font-semibold text-teal-100 sm:mx-12'>
        Clean, modern, multi-purpose design for any website.</h1>

        <div className="relative sm:mx-10 lg:mx-20 lg:max-h-[500px] z-0">
          <img className='w-[60%] object-fill rounded-xl' src={preview1} alt="gbr1" />
          <img className='w-[40%] h-[91%] object-fill rounded-xl absolute left-[49%] top-[9%] shadow-[0px_5px_150px_10px_rgba(0,0,0,0.56)]' src={preview2} alt="gbr2" />
          <img className='w-[15%] h-[84%] absolute object-fill rounded-xl right-0 top-[16%] shadow-[0px_5px_150px_10px_rgba(0,0,0,0.56)]' src={preview3} alt="gbr3" />
        </div>

        
        
        </div>
    
    </div>
  )
}

export default Hero