import React from 'react'

const Banner = () => {
    return (
        <section className='bg-ban bg-no-repeat bg-center bg-cover py-[257px] relative z-[1] after:absolute after:left-0 after:top-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.61)] after:z-[-1]'>
            <div className='max-w-container mx-auto'>
                <h2 className='text-[64px] font-bold font-pops text-white pb-[30px]'>We exist since 1975 on the oil and gas industry.</h2>
                <a className='py-[13px] px-[40px] bg-[#F40404] text-white font-pops font-normal text-[15px]' href="#">LEARN MORE</a>
            </div>
        </section>
        
    )
}

export default Banner