import React from 'react'
import ContainerWrapper from './containerWrapper'
import Link from 'next/link'
import TShirtCard from './T-ShirtCard'

const OurProducts = () => {
  return (
 <section className="our-products w-full">
       <ContainerWrapper className='py-14'>
               <div className="title flex justify-between items-center w-full">
                       <h2 className="title text-3xl capitalize font-bold">
                               Our Products
                       </h2>
                       <Link href={'/products'} className='px-6 py-2 bg-black rounded-full text-white text-xl'>
                            More Shirts
                       </Link>
               </div>

               <div className="card flex justify-between items-center flex-wrap">
                   <TShirtCard/>
                   <TShirtCard/>
                   <TShirtCard/>
                   <TShirtCard/>
                   <TShirtCard/>
                   <TShirtCard/>
                   <TShirtCard/>
                   <TShirtCard/>
                   <TShirtCard/>

                   <TShirtCard/>

               </div>
       </ContainerWrapper>
 </section>

)
}

export default OurProducts  