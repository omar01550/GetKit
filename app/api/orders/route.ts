import { Connection } from "@/db/connection"
import { orderModel } from "@/db/schemas/orders"
import { NextResponse } from "next/server";



export const GET = async () => {
     try {
        await Connection()  ;
        const allOrders = await orderModel.find({})
        return NextResponse.json({
             orders:allOrders
        })
     } catch (error) {
         return NextResponse.json({
             error
         },{status:500})
     }  
}