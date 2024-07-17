import { NextResponse } from "next/server";
import { Connection } from "../../../../db/connection"
import { ProductModel } from "../../../../db/schemas/product"


export const GET = async (request:Request) => {

    
  
    try {
        await Connection();
        return NextResponse.json({
            id:id
        })
        const product = ProductModel.findOne({id:id})
        
      } catch (error) {
        
      }
}