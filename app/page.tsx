import Image from 'next/image'
import React from 'react';
import FcbImage from '../public/images/shirts/fcb/fcp-main.webp'
import Hero from './components/hero';
import Clubs from './components/clubs';
import BestSaller from './components/OurProducts';
import OurProducts from './components/OurProducts';

const HomePage = () => {
  return (
    <main className="w-full">
             <Hero/>

             <OurProducts/>    
      </main>

)
}

export default HomePage