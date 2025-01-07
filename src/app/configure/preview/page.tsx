'use server'
import { db } from "@/db"
import { notFound } from "next/navigation"
import DesignPreview from "./DesignPreview"
import { currentUser } from "@clerk/nextjs/server"

 
interface PropsType{
   searchParams: Promise<{ [key: string]: string }> 
}

async function page({searchParams}: PropsType) {

    const {id} = await searchParams

    const user = await currentUser()
    const userCheck = user ? user.id : "";
    


    if (!id) {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where:{
            sessionId: id
        }
    })

    if (!configuration) {
        return notFound()
    }




  return (
 
        <DesignPreview  userCheck={userCheck} configuration={configuration} />
 
  )
}

export default page