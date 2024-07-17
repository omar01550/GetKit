import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import TShirtCard from './T-ShirtCard'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
  
  

const PlayerSelector = async () => {
  const res = await fetch("http://localhost:3000/api/products")

const {products} = await res.json();


  return (
   <section className="w-full mt-5">
         <AlertDialog >
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="capitalize ">Click Select Player or add Your name and number on t-shirt</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className=' w-[1000px]'>
          <AlertDialogHeader>
            <AlertDialogTitle className='capitalize '>configure your T-Shirt</AlertDialogTitle>
            <AlertDialogDescription className='w-full'>
                <div className="players w-full mt-3 flex justify-center items-center">
                {
                    products.map((Tshirt) => {
                        return (
                            <TShirtCard TShirt={Tshirt}/>
                        )
                    })
                 }
                </div>

               
               
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    
   </section>

)
}

export default PlayerSelector;

