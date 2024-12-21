import React from 'react'
import sharp from 'sharp'
import { db } from '@/db';
import { notFound } from 'next/navigation';
 

interface PropsPage{
    searchParams:{
        [key: string] : string 
    }
}

async function page({searchParams}: PropsPage) {

     const { url, sessionId } = searchParams;

    const existingRecord = await db.configuration.findUnique({
      where: {
        sessionId: sessionId
      }
    })
  
    if (!existingRecord) {
         await newDataDB()
    }   
   async function newDataDB() {
      const response = await fetch(url)
      const buffer = await response.arrayBuffer()
  
       const imgMetadata = await sharp(buffer).metadata()
      const { height, width } = imgMetadata
  
       await db.configuration.create({
        data: {
          sessionId: sessionId,
          imageUrl: url,
          height: height || 500,
          width: width || 500,
        }
      }
    )
    }
   
      const configuration = await db.configuration.findUnique({
        where:{
          sessionId
        }
      })
  
      if (!configuration) {
        return notFound()
      }
   
    const {imageUrl, height, width} = configuration

   

  return (
    <div>{height}</div>
  )
}

export default page