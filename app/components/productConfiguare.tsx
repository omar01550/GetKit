'use client'
 
import { Button } from "@/components/ui/button"



import React, { createContext, useState,useEffect } from 'react';
import PlayerSelector from './playerSelector';
import AddNameAndNumber from './NameAndNumber';
import { Loader } from "lucide-react";
import Wait from "@/lib/wait";
import Alert from "./alert";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs";

import { useRouter } from "next/navigation";

type sizes =['s','m','l','xl'];
const sizes:sizes = ['s','m','l','xl'];

export const ProductConfiguareContext = createContext(null);

const ProductConfiguare = ({className,product}:{className:string,id:number}) => {

   const {isLoading,user,isAuthenticated} = useKindeBrowserClient()
    

   const [size,setSize] = useState(sizes[2]);
   const [player,setPlayer] = useState({
       team:"rma",
       name:"mpape",
       id:""
   });
   const route = useRouter();
   const [error,setError] = useState("");

   

     

   const [customTShirt,setCustomTShirt] = useState({
       name:"",
       number:"",
       type:"Custom",
       uid:"",
       

   })
  const [loading,setLoading] = useState(false);
  const [status,setStatus] = useState(false);
 //get user
  useEffect(() => {
   fetch("/api/user").then((res) => {
     return res.json()
   })
   .then(({user}) => {
      console.log('the user is ',user.id)
       setCustomTShirt({
          ...customTShirt,
          uid:user.id
       })
  })
   .catch((err) => {
      console.log(err);
      
   });
},[])

  return (
    <div className="mt-6">
      <ProductConfiguareContext.Provider value={{
           player,
           setPlayer,
           customTShirt,
           setCustomTShirt
      }}>


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
{/*         <PlayerSelector/>
*/}
         {/* add name and number */}
         <AddNameAndNumber/>

         {/* add to cart */}
         {
            error&&<div className="error text-xl mt-2 text-red-500">
            {error}
       </div>
         }

         <div className="btns w-full lg:w-[70%] flex flex-col gap-3 mt-10">
{/* 
             <div className="add-to-fav w-full py-3 flex  justify-center items-center text-xl  border-[1px] border-solid border-black cursor-pointer hover:bg-black hover:text-white">
                  Add To Favourite
             </div> */}

             {
                isAuthenticated

                ?<>
                    
             
               <div className={
                  loading?" pointer-events-none add-to-fav w-full py-3 flex  justify-center items-center text-xl  border-[1px] bg-black text-white border-solid border-black cursor-pointer hover:bg-black hover:text-white"
                  :"add-to-fav w-full py-3 flex  justify-center items-center text-xl  border-[1px] border-solid border-black cursor-pointer hover:bg-black hover:text-white"
               } onClick={async () => {
                     setLoading(true)
  
                     try {
                         await Wait(4000)
                         const order = {...customTShirt,size:size,image:product.image,price:product.price,title:product.title,team:product.club,productid:product._id}
                         const res = await fetch("http://localhost:3000/api/order/custom",{
                           method:"POST",
                           body:JSON.stringify(order)
                         });
  
                         if (res.status != 200) {
                             console.log('dode added');
                              setError("failed to send order")
                         };

                         route.push("/user/orders")
  
                         
                     } catch (error) {
                        console.log(error);
                        
  
                    }
                    finally{
                       setLoading(false)
  
                    }
               }}>
                    {
                        loading
                        ?
                        <div className="flex justify-center items-center gap-3">
                                Wait 
                               <Loader className="animate-spin"/>
                        </div>
                        :
                        "Order Now"
                  
                    }
                </div>
 
                </>
                :
                <>
                     
               <LoginLink postLoginRedirectURL={"/products/"+product.id} className={
                  "add-to-fav w-full py-3 flex  justify-center items-center text-xl  border-[1px] border-solid border-black cursor-pointer hover:bg-black hover:text-white"
               } >
                   Order Now
                </LoginLink>
                </>

             }
            
       </div>

         </ProductConfiguareContext.Provider>


    </div>

  )
}

export default ProductConfiguare