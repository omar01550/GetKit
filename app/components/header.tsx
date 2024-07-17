import React from 'react'
import ContainerWrapper from './containerWrapper'
import { Heart, ShoppingBag, ShoppingCart, User, UserPlus } from 'lucide-react'
import Link from 'next/link';
import Image from 'next/image';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

{/* <RegisterLink>Sign up</RegisterLink> */}

const Header = async () => {
    const {getUser} = getKindeServerSession();


    const user = await getUser();
    
  return (
   <header className="w-full">
         <ContainerWrapper className="py-6 flex justify-between items-center px-3">
               
               <Link className="logo cursor-pointer text-2xl md:text-3xl capitalize font-semibold" href={'/'}>
                  GetKit
               </Link>
                   {user != null &&
                        <nav className=" justify-centyer items-center gap-3 hidden md:flex">
                             <Link href={'/user/orders'} className='text-lg font-medium hover:opacity-80  hover:text-gray-700'>
                                 My orders
                             </Link>
                             <Link href={'/products'} className='text-lg font-medium hover:opacity-80  hover:text-gray-700'>
                                 All products
                             </Link>

                             

                             
                        </nav>


                   }


               <div className="icons flex justify-center items-center gap-3 md:gap-5">
               {
                 user !== null
                 ?(
                     
                     <div className="flex justufy-center items-center gap-3">
                             <span className="text-xl flex justify-center items-center gap-2 first-letter:capitalize">
                               {user.given_name }{ user.family_name}
                             </span>

                           <Image src={user.picture} alt='not found' width={100} height={100} className='w-[30px] h-[30px] rounded-full'/>

                     </div>
                 )
                 : <LoginLink  className='border-solid border-black border-2 px-4 rounded-sm py-[4px] hover:bg-black hover:text-white'>Sign in</LoginLink>

               }

                        {/* <Heart/>
                        <div className="relative p-2 rounded-full">
                            <ShoppingCart/>
                            <small className="bg-black w-[20px] h-[20px] flex justify-center items-center text-white rounded-full absolute top-0 -right-2 text-sm">
                                2
                            </small>
                        </div> */}
                        {
                            user&& <LogoutLink className='border-solid border-black border-2 px-4 rounded-sm py-[4px] hover:bg-black hover:text-white'> Log out</LogoutLink>
                        }
               </div>
         </ContainerWrapper>
   </header>


)
}

export default Header





 