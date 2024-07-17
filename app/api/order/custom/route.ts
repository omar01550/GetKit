import { Connection } from "@/db/connection";
import { orderModel } from "@/db/schemas/orders";
import { NextResponse } from "next/server";


export const POST = async (request:Request) => {
    const OrderData = await request.json();
    try {
        await Connection
        const newOrder = new orderModel(OrderData)
        const accualOrder = await newOrder.save();
        return NextResponse.json({
             message:"order saved done ",
        },{status:200})
        

    } catch (error) {
         return NextResponse.json({
             error:error
         },{status:500})
    }
}