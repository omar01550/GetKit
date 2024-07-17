import ContainerWrapper from '@/app/components/containerWrapper'
import React from 'react'

const Orders = async () => {

  const res = await fetch("http://localhost:3000/api/orders",{
    cache:"no-cache"
});

const {orders} = await res.json();
console.log(orders)


  return (


   <main className="w-full">
        <ContainerWrapper className='py-3'>
                  <h1 className="text-center text-3xl font-semibold">
                      All Orders
                  </h1>

                  <div className="w-full flex justify-between items-center gap-3">
                        {
                           orders.map((order) => {
                             return (
                              <div className="w-[300px]">
                              <h3 className="order team">
                                 {order.team}
                              </h3>
                              <h3 className="text-3xl name">
                                  {order.name}
                              </h3>
                              <h3 className="text-3xl name">
                                  {order.number}
                              </h3>

                           </div>
                             )
                           })
                        }
                  </div>


        </ContainerWrapper>
   </main>
)
}

export default Orders