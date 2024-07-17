import Image from 'next/image'
import React, { Suspense } from 'react';
import FcbImage from '../public/images/shirts/fcb/fcp-main.webp'
import Hero from './components/hero';
import Clubs from './components/clubs';
import BestSaller from './components/OurProducts';
import OurProducts from './components/OurProducts';
import TShirtSkeleton from './components/TShistSkeleton';

const HomePage = () => {
  return (
    <main className="w-full">
             <Hero/>

<Suspense fallback={<section className='flex justify-between items-center lg:items-between flex-wrap px-10 pb-16'>
    {[1,2,3,4,5,6,7,8].map(() => {
        return (
           <TShirtSkeleton/>
        )
    })}
  </section>}>
    <OurProducts/>
  
</Suspense>

      </main>

)
}

export default HomePage