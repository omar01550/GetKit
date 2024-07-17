import Image from 'next/image'
import React from 'react'
import HeroImage from '../../public/images/website-images/fcb.webp';
import Fcb from '../../public/images/website-images/psg.jpeg'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="hero w-full h-[400px] md:h-[600px] relative flex justify-center items-center">
            <div className="overlay absolute w-full h-full bg-black opacity-70 left-0 top-0 z-20"></div>
           <Image src={Fcb} alt='not found hero iamge' className='w-full h-full absolute'/>
           <div className="content relative text-3xl text-white text-center -translate-y-[20px] md:-translate-y-[30px] z-50 px-8 w-full lg:w-7/12 ">
                 <h1 className="text-4xl md:text-3xl font-semibold capitalize ">
                        Add your name and number on your best football t-shirt
                 </h1>
                 
           </div>
    </section>

)
}

export default Hero