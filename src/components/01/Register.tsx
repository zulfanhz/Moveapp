import React from 'react'

import pic1 from '../../assets/D1.jpg'
import pic2 from '../../assets/D2.jpg'
import pic3 from '../../assets/D3.jpg'
import pic4 from '../../assets/D4.jpg'
import pic5 from '../../assets/D5.jpg'



const Register = () => {
  return (
    
    <div id='first' className='w-full bg-bg-secondary py-[90px]'>
      <div className='md:max-w-[1480px] m-auto max-w-[600px]'>
        <div className='relative'>
          <h1 className='text-center text-9xl font-bold text-gray-800'>01</h1>
          <h2 className='absolute top-[43%] left-[37%] md:top-[45%] md:left-[43%] text-white md:text-2xl text-lg font-bold'>Login & Register</h2>
        </div>
        
        <div className='grid md:grid-cols-2 grid-cols-1 gap-12 mx-8 mt-20'>
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic1} alt="sign-up" />
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic2} alt="sign-in" />
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic3} alt="recover-pass" />
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic4} alt="sign-up-image" />
          <img className='rounded-2xl hover:opacity-75 hover:ease-in duration-150' src={pic5} alt="sign-in-image" />
        </div>
      </div>
    </div>
    
  )
}

export default Register