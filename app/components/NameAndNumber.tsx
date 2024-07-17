"use client"
import React, { FormEvent, useContext, useEffect, useState } from 'react'
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
import { ProductConfiguareContext } from './productConfiguare'
import { ArrowLeftCircle, ArrowRight, ArrowRightFromLine } from 'lucide-react'
import {useKindeAuth} from '@kinde-oss/kinde-auth-react';

  

const AddNameAndNumber = () => {
  const {customTShirt,setCustomTShirt} = useContext(ProductConfiguareContext);


  const handleSubmit = async (e:FormEvent) => {
      e.preventDefault();
      console.log(customTShirt)

  }


  const handleChange = (e:InputEvent) => {
      setCustomTShirt({
         ...customTShirt,
         [e.target.name]:e.target.value
      })
  }

  
  return (
   <section className="w-full mt-5">
               <div className="text-3xl">

               </div>
         <AlertDialog  >

        <AlertDialogTrigger asChild>
          <Button variant="outline" className="capitalize font-semibold ">Click to add the name and number that will be print on the T-shirt</Button>
        </AlertDialogTrigger>
        {
           (
            <>
                 <h1 className="flex items-center gap-2 text-lg font-normal mt-3">
            <span className="capitalize">the name will print on T-shirt is </span>
            <span><ArrowRight/></span>
            <span className='text-lg'>{customTShirt.name || "No Name"}</span>
          </h1>
          <h1 className="flex items-center gap-2 text-lg font-normal  mt-2">
            <span className="">The Number Will Print Is </span>
            <span><ArrowRight/></span>
            <span className='text-lg'>{customTShirt.number || "No Number"}</span>
          </h1>  
            </>
           )
        }
        <AlertDialogContent className=' w-[1000px]' >
          <section className='flex justify-end items-center'>
          <AlertDialogCancel className='h-fit w-fit '>
              X
          </AlertDialogCancel>
          </section>
                
          <AlertDialogHeader>
            <AlertDialogTitle className='capitalize '>configure your T-Shirt</AlertDialogTitle>
            <AlertDialogDescription className='w-full'>
            <form className={"grid items-start gap-4 w-full"} onSubmit={handleSubmit}>
                <div className="grid gap-2">
                    <Label htmlFor="name">T-Shirt Name</Label>
                    <Input type="name" id="name" name='name' onChange={handleChange} />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="number">T-Shirt Number</Label>
                    <Input id="number"  type='number' name='number' onChange={handleChange}/>
                </div>
                <AlertDialogCancel className='w-full px-0'>
                    <Button type="submit" className='bg-black w-full' >Done</Button>
                </AlertDialogCancel>

            </form>


               
               
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className='hidden'>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    
   </section>

)
}

export default AddNameAndNumber;

