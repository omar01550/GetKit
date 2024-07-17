import React from 'react'
import ContainerWrapper from '../../components/containerWrapper'
import { Connection } from '@/db/connection'
import { orderModel } from '@/db/schemas/orders'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';


const UserOrders = async () => {
    const {getUser} = getKindeServerSession();
    try {
          await Connection();
          const user= await getUser();
           const orders = await orderModel.find({uid:user.id})
           console.log(orders)
          return (
             <main className="w-full">
                  <ContainerWrapper>
                        <h1>hamada</h1>
                        <div className="flex justify-between items-center gap-3">
                       {
                         orders.map((order) => {
                                return (
                                      <div className="order">
                                          <h1 className="text-3xl order">
                                              {order.name}
                                          </h1>
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