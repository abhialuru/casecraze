'use client'
import { Progress } from '@/components/ui/progress';
import { useEdgeStore } from '@/lib/edgestore';
  import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react';
 import { useRouter } from 'next/navigation';
 import React, { useState, useTransition } from 'react'
import Dropzone, { FileRejection } from 'react-dropzone'
import {v4 as uuidv4 } from 'uuid'

   
function Home() {

    const[isDrag, setIsDrag] = useState(false)
    const [uploadProgress, setUploadProgress] = useState<number>(0)
    const router = useRouter()
    const [isUploading, setIsUploading] = useState(false)
    const [isPending, startTransition] = useTransition()

    const {edgestore} = useEdgeStore();
  
    const onDropRejected = (rejectedFiles: FileRejection[]) => {
      const [file] = rejectedFiles
  
      setIsDrag(false)
  
     alert('error')
    }
  
    const onDropAccepted = async (acceptedFiles: File[]) => {

      setIsUploading(true)
       const file = acceptedFiles[0]

       if (file) {
        const res = await edgestore.publicFiles.upload({file,
            onProgressChange: (progress)=>{
            setUploadProgress(progress)
          }
        })
          const sessionId = uuidv4()

          startTransition(()=>{
            router.push(`/configure/design?url=${res.url}&sessionId=${sessionId}`)
          })
        setIsUploading(false)
       }

      setIsDrag(false)
    }




  return (
    <>
    <div className='w-fit p-4 bg-zinc-100 text-sm rounded-md md:mx-20 mt-3 mx-5'>
      <h3 className='font-semibold'>Step 1 : Add Image</h3>
      <p>Choose an image for your case.</p>
    </div>
    <div className='md:w-[50vw] w-full h-[60vh] md:mx-auto flex-1 flex flex-col my-16 px-5'>
      
        <div className={`h-full w-full flex-1 border border-black border-dashed flex justify-center rounded-lg items-center ${isDrag ? 'bg-blue-900/10': 'bg-gray-900/5' }`}>
             <Dropzone
             onDropRejected={onDropRejected}
             onDropAccepted={onDropAccepted}
             accept={{
                'image/png':['.png'],
                'image/jpg':['.jpg'],
                'image/jpeg':['.jpeg'],
             }}
             onDragEnter={()=>setIsDrag(true)}
             onDragLeave={()=>setIsDrag(false)}
             >
                {({getRootProps,getInputProps})=>
                <div className='w-fit h-fit flex flex-col justify-center items-center' {...getRootProps()}>
                     <input {...getInputProps()} />
                    {isDrag ? <MousePointerSquareDashed className='size-6 text-zinc-500 mb-2' /> : isUploading || isPending ? 
                     <Loader2 className='animate-spin mb-2 size-6 text-zinc-500' />  : <Image className='size-6 text-zinc-500 mb-2 cursor-pointer' />
                    }
                    {isUploading ?
                     <div className='flex flex-col items-center justify-center'>
                      <p>Uploading...</p>
                      <Progress
                      value={uploadProgress}
                      className='mt-2 w-40 h-2 bg-gray-300'
                    />
                     </div>  : 
                     isPending ? 
                     <div className='flex justify-center'>
                      Redirecting, Please Wait...
                     </div> :
                     isDrag ?
                        <p><span className='font-semibold'>Drop file </span>to upload</p>
                     :
                      <p><span className='font-semibold'>Click to upload </span> or drag and drop</p>

                  }

                  {isPending ? null : <p className='text-xs text-zinc-500 mt-2'>PNG, JPG, JPEG</p> }
                </div>
              
                }
             </Dropzone>
        </div>
    </div>
    </>
  )
}

export default Home;
   