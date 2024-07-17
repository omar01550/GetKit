import { NextResponse } from 'next/server';
import {Connection} from '../../../db/connection'
import {ProductModel} from '../../../db/schemas/product'
import Wait from '@/lib/wait';



export const GET = async () => {
      try {
         const connection = await Connection();
         const products = await ProductModel.find({});
         return NextResponse.json({
             products:products
         })
      } catch (error) {
           return NextResponse.json({
             message:error
           },{status:500})
      }
}