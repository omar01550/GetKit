import Image from 'next/image'
import React, { Suspense } from 'react';
import FcbImage from '../public/images/shirts/fcb/fcp-main.webp'
import Hero from './components/hero';
import Clubs from './components/clubs';
import BestSaller from './components/OurProducts';
import OurProducts from './components/OurProducts';

const HomePage = () => {
  return (
    <main className="w-full">
             <Hero/>

<Suspense fallback="loading......">
    <OurProducts/>
  
</Suspense>

      </main>

)
}

export default HomePage