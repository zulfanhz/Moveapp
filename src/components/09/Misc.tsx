import React from 'react'
import pic1 from '../../assets/M1.jpg'
import pic2 from '../../assets/M2.jpg'
import pic3 from '../../assets/M3.jpg'
import pic4 from '../../assets/M4.jpg'
import pic5 from '../../assets/M5.jpg'




const Misc = () => {
  return (
    
    <div id="nine" className='w-full bg-bg-secondary py-[90px]'>
      <div className='md:max-w-[1480px] m-auto max-w-[600px]'>
        <div className='relative'>
          <h1 className='text-center text-9xl font-bold text-gray-800'>09</h1>
          <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white md:text-2xl text-2xl font-medium md:font-bold'>Misc</h2>
        </div>
        
        <div className='grid md:grid-cols-2 grid-cols-1 gap-12 mx-8 mt-20'>
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic1} alt="sign-up" />
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic2} alt="sign-in" />
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic3} alt="sign-in" />
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic4} alt="sign-in" />
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic5} alt="sign-in" />
    
          
        </div>
      </div>
    </div>
  )
}

export default Misc