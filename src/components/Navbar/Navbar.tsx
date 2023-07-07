import React, {useState} from 'react'
import logo from '../../assets/logo.svg'
import { HiMenu, HiOutlineX } from 'react-icons/hi';
import {Link} from 'react-scroll'



const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = ()=> setToggle(!toggle)


  return (
    <div className='w-full h-[80px] bg-bg-primary sticky top-0 z-10'>
        <div className='lg:max-w-[1480px] md:max-w[1280px] max-w-[600px] m-auto w-full h-full flex justify-around items-center'>
          
            <img src={logo} alt="logo" className='h-[30px]'/>
           
            <div className='hidden lg:flex items-center'>
            
                <ul className='flex lg:gap-6 md:gap-2 text-gray-300 font-medium cursor-pointer'>
                    <li className='hover:text-white'>
                        <Link activeClass="active" smooth spy to="first">Login & Register</Link></li>
                    <li className='hover:text-white'>
                        <Link activeClass="active" smooth spy to="second">Homepages</Link></li>
                    <li className='hover:text-white'>About Team & Careers</li>
                    <li className='hover:text-white'>Case Studies</li>
                    <li className='hover:text-white'>Blog</li>
                    <li className='hover:text-white'>Portfolio</li>
                    <li className='hover:text-white'>Pricing Plans</li>
                    <li className='hover:text-white'>Contacts</li>
                    <li className='hover:text-white'>Misc</li>       
                </ul>
                
            </div>
            <div className='hidden lg:flex'>
                <button className='px-6 py-3 rounded-full text-white font-medium bg-green-600'>Buy</button>
            </div>

            <div className='lg:hidden text-white text-3xl' onClick={handleClick}>
              {toggle ? <HiOutlineX /> : <HiMenu />}
            </div>
        </div>

            {/* ---------- Mobile view ----------------- */}
        <div className={toggle?'absolute z-10 p-5 bg-white w-full px-0 lg:hidden':'hidden'}>
        <ul className='text-center'>
                    <li className='p-3 hover:bg-gray-100'>Login & Register</li>
                    <li className='p-3 hover:bg-gray-100'>Homepages</li>
                    <li className='p-3 hover:bg-gray-100'>About Team & Careers</li>
                    <li className='p-3 hover:bg-gray-100'>Case Studies</li>
                    <li className='p-3 hover:bg-gray-100'>Blog</li>
                    <li className='p-3 hover:bg-gray-100'>Portfolio</li>
                    <li className='p-3 hover:bg-gray-100'>Pricing Plans</li>
                    <li className='p-3 hover:bg-gray-100'>Contacts</li>
                    <li className='p-3 hover:bg-gray-100'>Misc</li>
            <div className='flex flex-col my-4'>
                <button className='px-6 py-3 rounded-full text-white font-medium bg-green-600'>Buy</button>
            </div>
        </ul>
        </div>
    </div>
  )
}

export default Navbar