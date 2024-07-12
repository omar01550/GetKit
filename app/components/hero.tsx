import Image from 'next/image'
import React from 'react'
import HeroImage from '../../public/images/website-images/fcb.webp';
import Fcb from '../../public/images/website-images/psg.jpeg'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero w-full h-[600px] relative flex justify-center items-center">
            <div className="overlay absolute w-full h-full bg-black opacity-80 left-0 top-0 z-20"></div>
           <Image src={Fcb} alt='not found hero iamge' className='w-full h-full absolute'/>
           <div className="content relative text-3xl text-white text-center -translate-y-[30px] z-50 px-8 w-full lg:w-7/12">
                 <h1 className="text-3xl font-semibold capitalize ">
                     Take your Football t-shirt and chose your favuotrate player or add your name and number on t shirt
                 </h1>
                 
           </div>
    </section>

)
}

export default Hero