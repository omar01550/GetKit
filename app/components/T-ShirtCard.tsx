import Image from 'next/image'
import React from 'react';
import PsgImage from '../../public/images/shirts/psg/psg-away-2.jpg'
import Link from 'next/link';
import { Heart, ShoppingBag } from 'lucide-react';

interface ITShirt { 
      title:string,
      price:number,
      image:string,
      description:string,
      club:string,
      _id:string
}

const TShirtCard = ({TShirt}:{TShirt:ITShirt}) => {
     console.log('the t-shirt is ',TShirt);
     
  return (
     <div className="w-full md:w-[290px] h-fit p-3 shadow-md rounded-lg mt-20 relative cursor-pointer">
           {/* <Heart className="absolute right-2 top-2 z-50" size={26}/> */}
            <Link href={`/products/${TShirt._id}`} className='w-full'>
                 <Image src={TShirt.image} alt='not found ' className='w-full h-[200px] hover:scale-110' height={200} width={270}/>

             </Link>

            <div className="content mt-2 px-2">
                  <Link href="/club/fcb" className="underline text-gray-500">
                       {TShirt.club}
                  </Link>
                  <h3 className="text-xl font-semibold capitalize">
                       {TShirt.title}
                  </h3>
                  <span className="block text-lg font-semibold">
                        {TShirt.price}$
                  </span>
               
            </div>

{/* 
<button className="mt-4 w-full bg-black text-white text-xl capitalize py-2 text-center flex justify-center items-center gap-3">
       <span>
          Add to Card
       </span>
       <ShoppingBag/>
</button>
*/}
     </div>

)
}

export default TShirtCard