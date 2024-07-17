import React from 'react'
import ContainerWrapper from '../components/containerWrapper';
import TShirtCard from '../components/T-ShirtCard';

const Products = async () => {
  const res = await fetch("http://localhost:3000/api/products",{
    cache:"no-cache"
});

const {products} = await res.json();

  return (
      <main className="w-full">
            <ContainerWrapper className='flex justify-between items-center flex-wrap'>
                  {
                     products.map((TShirt) => {
                        return (
                           <TShirtCard TShirt={TShirt}/>
                        )
                     })                        
                  }
            </ContainerWrapper>
      </main>

  )
}

export default Products