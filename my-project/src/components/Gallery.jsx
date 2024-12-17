import React from 'react'
import One from '../assets/view1.png'
import Two from '../assets/view2.png'
import Three from '../assets/view3.png'
import Four from '../assets/view4.png'
import Ban from '../assets/ban1.png'
import Ban2 from '..//assets/ban2.png'
import Ban3 from '../assets/ban3.png'
import Learn from '../assets/learn.png'
const Gallery = () => {
  return (
    <section>
      <div className='flex justify-between'>
        <div className='w-[24%]'>
          <img src={One} alt="One" />
        </div>
        <div className='w-[24%]'>
          <img src={Two} alt="Two" />
        </div>
        <div className='w-[24%]'>
          <img src={Three} alt="Three" />
        </div>
        <div className='w-[24%]'>
          <img src={Four} alt="Four" />
        </div>
      </div>
      <div className='py-4'>
        <div className='flex'>
          <div className='w-1/2 py-[134px] px-[150px]'>
            <h2 className='font-bold font-pops text-[36px] '>Our Services</h2>
            <p className='font-medium font-pops text-[16px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
          <div className='w-1/2 '>
            <div className='py-[148px] px-[123px] relative z-[1] after:absolute after:left-0 after:top-0 after:bg-[#00000060] after:h-full after:w-full after:z-[-1] ' style={{ backgroundImage: `url(${Ban})` }}>
              <div className='max-w-container mx-auto'>
                <h2 className='text-[28px] font-bold font-pops text-white '>Modern natural oil and gas refineries.</h2>
                <a className='py-[13px] px-[40px] bg-[#F40404] text-white font-pops font-normal text-[15px] inline-block' href="#">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-4">
          <div className='w-1/2 '>
            <div className='py-[148px] px-[123px] relative z-[1] after:absolute after:left-0 after:top-0 after:bg-[#00000060] after:h-full after:w-full after:z-[-1] ' style={{ backgroundImage: `url(${Ban2})` }}>
              <div className='max-w-container mx-auto'>
                <h2 className='text-[28px] font-bold font-pops text-white '>Supply of national industries.</h2>
                <a className='py-[13px] px-[40px] bg-[#F40404] text-white font-pops font-normal text-[15px] inline-block' href="#">LEARN MORE</a>
              </div>
            </div>
          </div>
          <div className='w-1/2 '>
            <div className='py-[148px] px-[123px] relative z-[1] after:absolute after:left-0 after:top-0 after:bg-[#00000060] after:h-full after:w-full after:z-[-1] ' style={{ backgroundImage: `url(${Ban3})` }}>
              <div className='max-w-container mx-auto'>
                <h2 className='text-[28px] font-bold font-pops text-white '>National fuel distribution and supply.</h2>
                <a className='py-[13px] px-[40px] bg-[#F40404] text-white font-pops font-normal text-[15px] inline-block' href="#">LEARN MORE</a>
              </div>
            </div>
          </div>

        </div>

        <div className="learn bg-[#00000010] py-[100px]">
          <div className="max-w-container mx-auto flex">
            <div className="txt w-[35%] bg-[#f00] py-[100px] px-[75px]">
              <h2 className='text-[36px] font-pops font-bold text-[#fff]'>Learn more about our company</h2>
            </div>
            <div className="w-[65%] bg-cover flex justify-center items-center" style={{ backgroundImage:`url(${Learn})` }}>
            <a className='py-[13px] px-[40px] bg-[#Fff] text-red-600 font-pops font-normal text-[15px] inline-block' href="#">LEARN MORE</a>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Gallery