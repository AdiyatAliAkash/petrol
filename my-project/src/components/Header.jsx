import React from 'react';
import { MdOutlineEmail,MdCall } from "react-icons/md";
import { FaFacebookF,FaTwitterSquare,FaLinkedinIn,FaInstagram} from "react-icons/fa";


const Header = () => {
  return (
    <header className="bg-bghead py-[15px]">
        <div className='max-w-container mx-auto'>
            <div className="flex">
                <div className="w-1/4">
                  <div className="flex items-center gap-x-2 text-[#FFFFFF]">
                    <MdOutlineEmail className='text-[#FFFFFF]'/>
                    <h2 className="font-pops font-normal text:{12px}">mail@yourcompany.com</h2>
                  </div>
                </div>
                <div className="w-1/4">
                  <div className="flex items-center gap-x-2 text-[#FFFFFF]">
                    <MdCall className="text-[#FFFFFF]"/>
                    <h3 className="font-pops font-normal text:{12px}">+896 120 5889 (Toll free)</h3>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex justify-end gap-x-3">
                    <FaFacebookF className="text-[#FFFFFF]"/>
                    <FaTwitterSquare className="text-[#FFFFFF]"/>
                    <FaLinkedinIn className="text-[#FFFFFF]"/>
                    <FaInstagram className="text-[#FFFFFF]"/>
                  </div>
                </div>
              
            </div>
    </div>
    </header>
  )
}

export default Header