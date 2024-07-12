import React from 'react'
import ContainerWrapper from './containerWrapper'
import { Heart, ShoppingBag, ShoppingCart, User, UserPlus } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  return (
   <header className="w-full">
         <ContainerWrapper className="py-6 flex justify-between items-center">
               
               <Link className="logo text-3xl capitalize font-semibold" href={'/'}>
                  Omar
               </Link>


               <div className="icons flex justify-center items-center gap-5">
                        <UserPlus/>
                        <Heart/>
                        <div className="relative p-2 rounded-full">
                            <ShoppingCart/>
                            <small className="bg-blue-600 w-[20px] h-[20px] flex justify-center items-center text-white rounded-full absolute top-0 -right-2 text-sm">
                                2
                            </small>
                        </div>
               </div>
         </ContainerWrapper>
   </header>


)
}

export default Header