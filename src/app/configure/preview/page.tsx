import { db } from "@/db"
import { notFound } from "next/navigation"
import DesignPreview from "./DesignPreview"

 
interface PropsType{
   searchParams: Promise<{ [key: string]: string }> 
}

async function page({searchParams}: PropsType) {

    const {id} = await searchParams

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
 
        <DesignPreview configuration={configuration} />
 
  )
}

export default page