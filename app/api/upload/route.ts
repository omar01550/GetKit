import { NextRequest, NextResponse } from "next/server";
import { writeFile } from 'fs/promises';



export const POST = async (request:NextRequest) => {
        try {
                const body = await request.json();

                const file = await writeFile("./omar.txt",body.file)
          
          
                  return NextResponse.json({
                           message:"done"
                  })
        } catch (error) {
                  return NextResponse.json({
                         message:"failed"
                  })
        }
}