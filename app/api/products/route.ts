import { NextResponse } from 'next/server';
import {Connection} from '../../../db/connection'

export const GET = async () => {
      try {
         const connection = await Connection();
         return NextResponse.json({
             message:"done"
         })
      } catch (error) {
           return NextResponse.json({
             message:"error"
           },{status:500})
      }
}