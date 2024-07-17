import React from 'react'
import ContainerWrapper from '../../components/containerWrapper'
import { Connection } from '@/db/connection'
import { orderModel } from '@/db/schemas/orders'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import Image from 'next/image';


const UserOrders = async () => {
    const {getUser} = getKindeServerSession();
    try {
          await Connection();
          const user= await getUser();
           const orders = await orderModel.find({uid:user.id})
           console.log(orders)
          return (
             <main className="w-full">
                  <ContainerWrapper  className="min-h-[700px]">
                        {
                              <h1 className='text-center text-3xl font-semibold capitalize mt-2 md:mt-4 flex gap-2 justify-center items-center'>
                              <span className='capitalize'>
                                 {user?.given_name}
                                 <span className="lowercase">
                                 {user?.family_name}
                                 </span>
                              </span>
                              <span>orders</span>
  
                          </h1>
                        }
                        <div className="flex justify-between items-center gap-3 mt-4 flex-wrap">
                       {
                         orders.map((order) => {
                                return (
                                    <div className="w-full md:w-[280px] h-fit p-3 shadow-md rounded-lg mt-20 relative cursor-pointer">
                                         <Link href={'/products/'+order.productid} className='w-full'>
                                              <Image src={order.image} alt='not found ' className='w-full h-[200px] hover:scale-110' height={200} width={270}/>

                                         </Link>

                                         <div className="content mt-2 px-2">
                                                <h3 className="text-xl font-semibold capitalize">
                                                   {order.title}
                                                </h3>
                                                <span className="block text-lg font-semibold">
                                                      {order.price}$
                                                </span>
                                                <div className="flex justify-between items-center py-2">
                                                       <span className="text-sm font-medium space-x-2">
                                                            {order.completed ?<span className='text-green-500'> completed</span>:<span className='text-red-500'>not completed</span>}
                                                       </span>
                                                       <p className='text-sm'>
                                                          and will arrive after two days

                                                       </p>
                                                       
                                                </div>
               
                                              </div>

                                     

                                    </div>
                                )
                         })
                       }
                  </div>
                  </ContainerWrapper>
             </main>
          )
        } catch (error) {
          return (
            <main className="w-full">
            <ContainerWrapper>
                  <h1>no products you have</h1>
                  
            </ContainerWrapper>
       </main>
          )
    }
}

export default UserOrders