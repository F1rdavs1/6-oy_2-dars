import React from 'react'
import HeroImg from "../../assets/images/hero-img.png"

const Hero = () => {
  return (
    <section className='hero-bg'>
      <div className="w-[1250px] mx-auto">
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='w-[482px] font-medium text-[64px] leading-[64px] text-[#8BAC3E]'>Good Food Us Good Mood</h2>
            <p className='font-normal my-[32px]	w-[482px] text-[18px] leading-[29px] text-[#757575]'>I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
            <button className='w-[147px] rounded-[100px] bg-[#8BAC3E] py-[10px] font-medium text-[14px] leading-[22px] text-[#FFFFFF] hover:bg-yellow-400 ease-linear transition-all'>Daftar Sekarang</button>
            <button className='w-[98px] py-[10px] rounded-[100px] bg-[#F2F2F2] font-medium text-[14px] leading-[22px] ml-[16px] hover:bg-[#8BAC3E] hover:text-white ease-linear transition-all'>About Us</button>
          </div>
          <img src={HeroImg} alt="Hero Image" width={651} height={663} />
        </div>
      </div>
    </section>
  )
}

export default Hero