import ContainerWrapper from '@/app/components/containerWrapper'
import React from 'react'

const CoursePage = () => {
  return (
    <main className="w-full">
          <ContainerWrapper className='py-14 flex flex-col-reverse lg:flex-row justify-center items-center  gap-3  lg:justify-between lg:items-start'>
                 <aside className="chapters w-full lg:w-5/12  flex flex-col items-start gap-2">
                   
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 1 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 2 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 3 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 4 : How Distributed Systems Works
                      </div>

                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 1 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 2 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 3 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 4 : How Distributed Systems Works
                      </div>

                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 1 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 2 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 3 : How Distributed Systems Works
                      </div>
                      <div className="shapter-link w-full p-3 rounded-md border-[2px] border-black boder-solid text-2xl font-medium">
                           Shapter 4 : How Distributed Systems Works
                      </div>
                  </aside>

                  <div className="video flex flex-col gap-3 w-full lg:w-5/12">
                       <video controls src="https://firebasestorage.googleapis.com/v0/b/graduation-medcine-app.appspot.com/o/%D9%85%D9%82%D8%AF%D9%85%D8%A9%20%D9%84%D9%84%D9%86%D8%B8%D9%85%20%D8%A7%D9%84%D9%85%D9%88%D8%B2%D8%B9%D8%A9%20(2021)(360P).mp4?alt=media&token=61be1bee-9cbb-4c10-80ba-b8aad9d33a93" />
                       <div className="content w-full py-3">
                           <h1 className="text-3xl font-semibold">
                               How to Doing a Distibuted Systems
                           </h1>
                       </div>

                  </div>
          </ContainerWrapper>
    </main>
  )
}

export default CoursePage