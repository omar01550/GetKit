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
  
  

const AddNameAndNumber = () => {
  return (
   <section className="w-full mt-5">
         <AlertDialog >

        <AlertDialogTrigger asChild>
          <Button variant="outline" className="capitalize font-semibold ">add the name and number that will be print on the T shirt</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className=' w-[1000px]'>
                
          <AlertDialogHeader>
            <AlertDialogTitle className='capitalize '>configure your T-Shirt</AlertDialogTitle>
            <AlertDialogDescription className='w-full'>
            <form className={"grid items-start gap-4 w-full"}>
                <div className="grid gap-2">
                    <Label htmlFor="name">T Shirt Name</Label>
                    <Input type="name" id="email" defaultValue="shadcn@example.com" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="number">T Shirt Number</Label>
                    <Input id="number" defaultValue="10" type='number'/>
                </div>
                <Button type="submit">Submit</Button>
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

