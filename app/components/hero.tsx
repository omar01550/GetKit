import React from 'react'

const Hero = () => {
  return (
   <section className="hero w-full flex justify-center items0-center bg-yellow-100 min-h-[350px]">
            <div className="content flex flex-col gap-8 justify-center items-center">
                    <h1 className="text-4xl font-bold capitalize">
                          Find Your Course With Sakr Acadmy
                    </h1>

                    <div className="input-container flex justify-center items-center">
                          <input type="text"
                           className="
                           text-2xl border-none outline-none bg-gray-200 h-full px-1
                        border-green-100
                           " 
                           placeholder='search for your course'

                          />

                          <button className="px-4 py-2 bg-blue-600 text-white">
                                search now
                          </button>
                    </div>
            </div>
   </section>


)
}

export default Hero