import React from 'react'
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-[#F40404] py-[30px]">
        <div className='max-w-container mx-auto'>
            <div className="flex justify-between items-center">
                <div className="">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="">
                    <ul className="flex">
                        <li>
                            <a className="font-semibold text-[16px] text-white font-pops capitalize px-[24px]" href="#">Home</a>
                        </li>
                        <li>
                            <a className="font-semibold text-[16px] text-white font-pops capitalize px-[24px]" href="#">About</a>
                        </li>
                        <li>
                            <a className="font-semibold text-[16px] text-white font-pops capitalize px-[24px]" href="#">Services</a>
                        </li>
                        <li>
                            <a className="font-semibold text-[16px] text-white font-pops capitalize px-[24px]" href="#">Gallery</a>
                        </li>
                        <li>
                            <a className="font-semibold text-[16px] text-white font-pops capitalize px-[24px]" href="#">Blog</a>
                        </li>
                        <li>
                            <a className='py-[13px] px-[31px] border-2 border-white text-white uppercase' href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar