'use client'

import React, { useState } from 'react';
import PlayerSelector from './playerSelector';
import AddNameAndNumber from './NameAndNumber';
type sizes =['s','m','l','xl'];
const sizes:sizes = ['s','m','l','xl']

const ProductConfiguare = ({className}:{className:string}) => {

   const [size,setSize] = useState(sizes[2]);


  return (
    <div className="mt-6">

      {/* size selector */}
         <div className="size-selector">
              <h2 className=" font-medium text-xl capitalize">
                 Select Size
              </h2>
                <div className="sizes flex items-center gap-3">
                    {
                       sizes.map((theSize) => {
                          return (
                             <div className={theSize == size ?"w-10 mt-3 h-10 border-solid border-2 border-black rounded-md capitalize text-xl flex justify-center items-center cursor-pointer bg-black text-white" :"w-10 mt-3 h-10 border-solid border-2 border-black rounded-md capitalize text-xl flex justify-center items-center cursor-pointer"} onClick={() => {
                                setSize(theSize)
                             }}>
                                 {theSize}
                             </div>
                          )
                       })
                    }
                </div>
         </div>

         {/* player selector */}
         <PlayerSelector/>

         {/* add name and number */}
         <AddNameAndNumber/>

         {/* add to cart */}

         <div className="btns w-full lg:w-[70%] flex flex-col gap-3 mt-10">
             <div className="add-to-card w-full py-3 flex  justify-center items-center text-xl  border-[1px] border-solid border-black cursor-pointer hover:bg-black hover:text-white">
                  Add To Cart
             </div>

             <div className="add-to-fav w-full py-3 flex  justify-center items-center text-xl  border-[1px] border-solid border-black cursor-pointer hover:bg-black hover:text-white">
                  Add To Favourite
             </div>
         </div>

    </div>

  )
}

export default ProductConfiguare