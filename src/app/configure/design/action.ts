 'use server'

import { db } from "@/db"
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from "@prisma/client"

export type SaveConfigArgs = {
        color : CaseColor,
        finish : CaseFinish,
        material : CaseMaterial,
        model : PhoneModel,
        sessionId : string,
        croppedImageUrl : string
}

 export async function  saveConfig( {
    color,
    finish,
    material,
    model,
    sessionId,
    croppedImageUrl
 }: SaveConfigArgs )
   {
    await db.configuration.update({
        where:{
            sessionId: sessionId
        },
        data:{
            color, finish, material, model,
            croppedImageUrl
        }
    })
 }