import ContainerWrapper from '@/app/components/containerWrapper'
import Image from 'next/image'
import React from 'react';
import PsgImage from '../../../public/images/shirts/psg/psg-main-2.jpg'
import { Star } from 'lucide-react';
import ProductConfiguare from '@/app/components/productConfiguare';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import Link from 'next/link';
  

const ProductId = () => {
  return (

   <main className="w-full">
        <ContainerWrapper className='py-20'>
             <section className="product w-full gap-20 flex-wrap lg:fl-nowrap flex justify-start items-start">
                  <div className="imageContainer w-full lg:w-5/12 h-[400px] rounded-md shadow-lg relative">
                         <Image src={PsgImage} alt='not found ' className='w-full h-full'/>
                  </div>

                  <div className="product-details w-full lg:w-5/12">
                      
                      
                      <h1 className="text-3xl capitalize font-semibold">
                          Psg Away kit
                      </h1>


                      <div className="rate flex justify-start gap-2 items-center mt-4">
                            <div className="start flex justify-center items-center gap-2 ">
                                   {
                                     [1,2,3,4,5].map((star) => {
                                        return(
                                              <Star color='#f7df25' size={25} fill='#f7df25'/>
                                        )
                                     })
                                   }
                            </div>

                            <span className="text-lg text-gray-800">
                                 44 preview
                            </span>
                      </div>
                      <Link href={'/products'} className='text-gray-800 underline pt-4'>
                          PSG
                      </Link>


                      <ProductConfiguare className=""/>

                      
                  </div>
             </section>
        </ContainerWrapper>
   </main>

)
}

export default ProductId