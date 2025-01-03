'use server'
import { db } from "@/db"
import { BASE_PRICE, PRODUCT_PRICES } from "@/prices/product"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Order } from "@prisma/client" 

export const database = async({sessionId}:{sessionId: string}) => {


    const configuration = await db.configuration.findUnique({
        where: { sessionId },
      })
    
      if (!configuration) {
        throw new Error('No such configuration found')
      }
    
      const { getUser } = getKindeServerSession()
      const user = await getUser()
    
      if (!user) {
        throw new Error('You need to be logged in')
      }
    
      const { finish, material } = configuration
    
      let price = BASE_PRICE
      if (finish === 'textured') price += PRODUCT_PRICES.finish.textured
      if (material === 'polycorbonate')
        price += PRODUCT_PRICES.material.polycarbonate
    
      let order: Order | undefined = undefined
    
      const existingOrder = await db.order.findFirst({
        where: {
          userId: user.id,
          configurationId: configuration.sessionId,
        },
      })
    
      console.log('sessio :', configuration.sessionId)
    
      if (existingOrder) {
        order = existingOrder
      } else {
        order = await db.order.create({
          data: {
            amount: price / 100,
            userId: user.id,
            configurationId: configuration.sessionId,
          },
        })
      }
    
    
}

 