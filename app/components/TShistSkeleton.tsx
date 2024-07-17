import { Skeleton } from "@/components/ui/skeleton"

export default function TShirtSkeleton() {
  return (
    <div className="w-full md:w-[270px] h-fit p-3 shadow-md rounded-lg mt-20 relative cursor-pointer">
           {/* <Heart className="absolute right-2 top-2 z-50" size={26}/> */}
            <div className='w-full'>
                 <Skeleton className='w-full h-[200px] hover:scale-110' height={200} width={270}/>

             </div>

            <div className="content mt-2 px-2">
                  <Skeleton  className="underline text-gray-500 h-3 w-14 mt-2">
                  </Skeleton>
                  <Skeleton className="text-xl font-semibold capitalize h-3 mt-2">
                  </Skeleton>
                  <Skeleton className="block text-lg font-semibold h-4 mt-2">
                        
                  </Skeleton>
               
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
