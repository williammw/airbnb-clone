import React from 'react'
import Image from 'next/image'
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700]">
      <Image 
        src='https://imagedelivery.net/Y07ySA3u_Km8xu1A8ejC2g/e024c8b2-0789-40f4-6be1-80d4f296d900/public' 
        layout="fill" 
        objectFit="cover"/>
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">FUCKｕ my stomach</p>

        <button className="text-purple-500 bg-white px-10 py-4 
        shadow-md rounded-full font-bold my-3 hover:shadow-xl 
        active:scale-90 transition duration-150">
          i am flexable
        </button>
      </div>
    </div>
  )
}

export default Banner
