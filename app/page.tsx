import React from 'react'
import Hero from './components/hero'
import ContainerWrapper from './components/containerWrapper'
import Image from 'next/image'
import DoctorImage from '../public/images/website-images/pexels-photo-356040.webp'
import DoctorImage2 from '../public/images/website-images/pexels-photo-4167541.webp'
import DoctorImage3 from '../public/images/website-images/pexels-photo-4225880.webp'

import { Star } from 'lucide-react'
import Link from 'next/link'

const HomePage = () => {
  return (
    <main className="w-full home-page">
        <Hero/>

        <div className="courses w-full ">
            <ContainerWrapper className='flex justify-between items-center py-20'>
                 {
                   [DoctorImage,DoctorImage2,DoctorImage3].map((image) => {
                      return (
                         <div className="w-full md:w-[300px] shadow-md rounded-md pb-4">
                                <Link className="image-container w-full relative h-[250px] pt-3 flex justify-center items-center" href={'/courses/239849038'}>
                                   <Image src={image} alt='not found ' width={97} height={97} className='absolute w-[95%] h-[95%]'/>
                                </Link>
                                 <div className="content px-2">
                                 <h3 className="text-2xl font-bold mt-8 ">
                                    React js course
                                </h3>

                                <div className="buttons flex justify-between items-center mt-3">
                                     <button className="py-2 px-4 rounded-sm bg-green-100 text-emerald-500">
                                         Buy It Now
                                     </button>
                                     <div className="flex justify-center item-center gap-2">
                                         <Star  fill='yellow'  color='yellow'/>
                                         <span className="font-semibold text-lg">
                                            4.5
                                         </span>
                                     </div>
                                </div>
                                 </div>
                         </div>
                      )
                   })
                 }
                 
            </ContainerWrapper>
        </div>
    </main>
  )
}

export default HomePage