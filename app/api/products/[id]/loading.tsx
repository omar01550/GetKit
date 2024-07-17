import Image from 'next/image'
import React from 'react'
import LoadingImage from '../../../../public/images/loading/loading.png'

const Loading = () => {
  return (

    <main className="w-full flex justify-center items-center">
            <Image src={LoadingImage} alt='not found iamge' className='w-[100px] h-[100px] animate-ping'/>
    </main>

)
}

export default Loading