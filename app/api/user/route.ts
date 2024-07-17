import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { NextResponse } from 'next/server';


export const GET = async (request:Request) => {
          try {
            const {getUser} = getKindeServerSession();
            const user = await getUser();
            return NextResponse.json({
                 user:user
            })


          } catch (error) {
              return NextResponse.json(
                {
                     error:error
                },
                {
                     status:500
                }
              )
          }
}