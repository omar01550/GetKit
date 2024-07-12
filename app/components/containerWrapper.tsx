import React, { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const ContainerWrapper = ({children,className}:{children:ReactNode,className:string}) => {
  return (
     <section className= {cn("container-wrapper w-full px-10 md:px-14 lg:px-20",className)}  >
            {children}
     </section>

)
}

export default ContainerWrapper