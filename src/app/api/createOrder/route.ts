import { NextResponse } from "next/server";
import Razorpay from "razorpay";
// import { db } from "@/db"
//  import { BASE_PRICE, PRODUCT_PRICES } from "@/prices/product"
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
// import { Order } from "@prisma/client"
// const configuration = await db.configuration.findUnique({
//     where:{
//         sessionId:sessionId
//      }
// })

// if (!configuration) {
//     throw new Error('There is no such configuration!')
// }

// const { getUser } = getKindeServerSession()
// const user = await getUser()


// console.log(user.id);
// console.log(configuration.sessionId);
// console.log(sessionId);

// if (!user) {
//     throw new Error('You need to be logged in')
// }

// const {finish,material} = configuration

// let price = BASE_PRICE

// if (finish === 'textured') {
//     price += PRODUCT_PRICES.finish.textured
// }

// if (material === 'polycorbonate') {
//     price += PRODUCT_PRICES.material.polycarbonate
// }

// let orderData : Order | undefined = undefined

// const existingOrder = await db.order.findFirst({
//     where: {
//           userId : user.id,
//          configurationId: configuration.sessionId
//         }
// })


// if (existingOrder) {
//     orderData = existingOrder
// }else{
//     orderData = await db.order.create({
//         data:{
//             amount: price,
//             configurationId: configuration.sessionId,
//             userId: user.id,
//         }
//     })
// }


const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
    key_secret: process.env.RAZORPAY_SECRET_ID,
  });
  
  export async function POST(req: Request) {

    
    const { amount } = await req.json();
     
    let order = await razorpay.orders.create({
      amount,
      currency: "INR",
    });

    
    return NextResponse.json(order);
  }