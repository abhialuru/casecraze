'use client'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import React, { useRef, useState } from 'react'
import NextImage from 'next/image'
import {Rnd} from 'react-rnd'
 import { COLORS, FINISHES, MATERIALS, MODELS } from '@/validators/options'
import { RadioGroup,Radio,Label, Description} from '@headlessui/react'
 import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ArrowRight, Check, ChevronsUpDown, Loader2 } from 'lucide-react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { BASE_PRICE } from '@/prices/product'
import { useEdgeStore } from '@/lib/edgestore'
import { useMutation } from '@tanstack/react-query'
import {  saveConfig as _saveConfig ,SaveConfigArgs } from './action'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'


   
 // bg-zinc-900   border-zinc-900
 // bg-blue-900   border-blue-900
 // bg-red-700    border-red-700

interface ConfigDesignProps{
    sessionId: string ,
    imageUrl: string,
    imageDimensions: {
        height: number,
        width: number,
    }
}


function ConfigDesign({sessionId, imageUrl, imageDimensions}: ConfigDesignProps) {

  const router = useRouter()

  const {toast} = useToast()

  const {mutate: saveConfig} = useMutation({
    mutationKey: ["save-config"],
    mutationFn: async (args: SaveConfigArgs)=>{
             await _saveConfig(args)
    },
    onError: ()=>{
       toast({
        title: 'something went wrong!',
        description: 'There was an error again. Please try again.',
        variant: 'destructive'
       })
    },
    onSuccess: ()=>{
        router.push(`/configure/preview?id=${sessionId}`)
    }
  })

  const {edgestore} = useEdgeStore()

  const [loading, setLoading] = useState(false)

  


  const [options, setOptions] = useState<{color:(typeof COLORS)[number]; model:(typeof MODELS.options)[number]; material:(typeof MATERIALS.options)[number]; finish:(typeof FINISHES.options)[number]}>({
    color : COLORS[0],
    model : MODELS.options[0],
    material : MATERIALS.options[0],
    finish: FINISHES.options[0]
  })

  const [renderedDimensions, setRenderedDimensions] = useState({
    height: imageDimensions.height / 4,
    width: imageDimensions.width / 4
  })

  const [renderedPositions, setRenderedPositions] = useState({
    x:150,
    y:200
  })

  const phonecaseRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  async function saveConfiguration() {
    try {
      const {
        left: caseLeft,
        top: caseTop,
        width,
        height,
      } = phonecaseRef.current!.getBoundingClientRect();

      setLoading(true)

      const { left: containerLeft, top: containerTop } = containerRef.current!.getBoundingClientRect();

      const leftOffset = caseLeft - containerLeft;
      const topOffset = caseTop - containerTop;

      const actualX = renderedPositions.x - leftOffset;
      const actualY = renderedPositions.y - topOffset;

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');

      const userImage = new Image();
      userImage.crossOrigin = 'anonymous';
      userImage.src = imageUrl;

      await new Promise((resolve) => (userImage.onload = resolve));

      ctx?.drawImage(userImage, actualX, actualY, renderedDimensions.width, renderedDimensions.height);

      const base64 = canvas.toDataURL();
      const base64Data = base64.split(',')[1];

      const blob = base64ToBlob(base64Data, 'image/png');
      const file = new File([blob], 'filename.png', { type: 'image/png' });
 
     const res =  await edgestore.publicFiles.upload({ file });
    await  saveConfig({ 
      sessionId,
        color: options.color.value,
        finish: options.finish.value,
         material: options.material.value,
        model: options.model.value,
        croppedImageUrl: res.url,
      })

    } catch (error) {
      toast({
        title: 'something went wrong!',
        description: 'There was an error again. Please try again.',
        variant: 'destructive'
       })
    }
  }

  function base64ToBlob(base64: string, mimeType: string) {
    const byteCharacters = atob(base64)
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    return new Blob([byteArray], { type: mimeType })
  }

  return (
    <div className='relative my-10 mx-10 lg:ml-36 md:flex'>
          <div ref={containerRef} className='relative w-full max-w-2xl h-[25rem] overflow-hidden flex justify-center items-center border border-dashed border-black bg-gray-100 rounded-sm p-10'>
               <div className='relative w-44 bg-opacity-50 pointer-events-none aspect-[896/1831]'>
                   <AspectRatio ref={phonecaseRef} className='relative pointer-events-none z-50 aspect-[896/1831] '>
                         <NextImage fill alt='iphone' src='/phone-template.png' className='z-50 pointer-events-none select-none' />
                   </AspectRatio>
                   <div className='absolute inset-0 z-40 rounded-[32px] shadow-[0_0_0_99999px_rgba(229,231,235,0.6)]' />
                   <div className={`absolute inset-0 rounded-[32px] bg-${options.color.tw}`} />
               </div>
               <Rnd
                  default={{
                    x:50,
                    y:100,
                    height: imageDimensions.height / 4,
                    width: imageDimensions.width / 4,
                  }}
                  onResizeStop={(_,__,ref,___,{x,y})=>{
                          setRenderedDimensions({
                             height: parseInt(ref.style.height.slice(0,-2)),
                             width: parseInt(ref.style.width.slice(0,-2)),
                          })
                          setRenderedPositions({x,y})
                  }}
                  onDragStop={(_,data)=>{
                      const {x,y} = data
                      setRenderedPositions({x,y})
                  }}
                 resizeHandleComponent={
                  {
                    topLeft: <div className='size-3 rounded-full border-2 border-black bg-gray-100 ml-1 mt-1' />,
                    topRight: <div className='size-3 rounded-full border-2 border-black bg-gray-100 ml-1 mt-1' />,
                    bottomLeft: <div className='size-3 rounded-full border-2 border-black bg-gray-100 ml-1 mt-1' />,
                    bottomRight: <div className='size-3 rounded-full border-2 border-black bg-gray-100 ml-1 mt-1' />
                  }
                 }
                  lockAspectRatio
                >
                   <div className='relative w-full h-full border-2 border-green-500'>
                        <NextImage fill src={imageUrl} alt='user-image' />
                    </div>
                </Rnd>    
          </div> 
             
          <div className='max-w-2xl h-[25rem]'>
              <ScrollArea className='px-10 w-full h-[85%]'>
             
               <h1 className='text-2xl tracking-tight font-bold my-5'>Customize your Case!</h1>
               <div className='w-full max-w-4xl h-px bg-zinc-300 mb-5' />
<div className='flex flex-col gap-4 text-sm'>
               <div className='text-sm'>
                  <RadioGroup value={options.color}
                  onChange={(val)=>setOptions((prev)=>({...prev, color : val}))}
                  >
                        <Label className='font-medium' >Color : <span className='font-normal'>{options.color.label}</span></Label>
                        <div className='flex gap-2 mt-3'>
                          {COLORS.map((color)=>
                          <Radio className={({checked }) =>
                            `h-9 w-9 rounded-full border-2 flex justify-center items-center cursor-pointer
                            ${checked && `border-${color.tw}`}`}
                             key={color.label} value={color} >
                            <div className={`h-7 w-7 rounded-full  bg-${color.tw}`} />
                          </Radio>
                          )}
                        </div>
                  </RadioGroup>
               </div>   

              
                  <div className='flex flex-col gap-2 text-sm'>
                       <label className='font-medium'>Model</label>
                  <DropdownMenu>
                    <DropdownMenuTrigger className='w-28 focus:outline-none border border-gray-500 flex justify-between items-center rounded-sm'>
                        <DropdownMenuLabel>{options.model.label}</DropdownMenuLabel>
                      <ChevronsUpDown className='w-4 shrink-0' />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                       {MODELS.options.map((model)=>
                      <DropdownMenuItem key={model.label} onClick={()=>setOptions((prev)=>({...prev, model}))}>
                      <Check className={`size-2 mr-3 ${model.label === options.model.label ? 'opacity-100' : 'opacity-0'} `} />
                           {model.value}
                      </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  </div>

                  <div> 
                          {[MATERIALS, FINISHES].map(({name, options: selectableOpts})=>
                              <RadioGroup
                              className='mb-5'
                               key={name}
                               value={options[name]}
                               onChange={(val)=>{setOptions((prev)=>({...prev,[name]:val}))}}
                              >
                                 <Label className='font-medium'>{name.slice(0,1).toUpperCase()+name.slice(1)}</Label>
                                 <div className='flex flex-col'>
                                  {selectableOpts.map((option)=>
                                  <Radio className={({checked})=>`flex flex-col border-2 max-w-60 lg:max-w-2xl mt-2 px-3 py-2 rounded-md cursor-pointer ${checked && 'border-2 border-green-600'}`} key={option.value} value={option}>
                                  <span className='flex justify-between'>
                                    <span>
                                   <Label><span>{option.label}</span></Label> 
                                   { option.description && <Description><span className='text-xs text-zinc-600' >{option.description}</span></Description>  }
                                   </span>
                                   <span className='text-zinc-600'>₹{option.price}</span>
                                   </span>   
                                  </Radio>
                                  )}
                                 </div>
                              </RadioGroup>
                          )}
                  </div>
                  </div>
                </ScrollArea>
               <div className='w-full px-10'>
                <span className='text-xs text-gray-800'>Total</span>
                <div className='w-full h-px bg-zinc-300 mt-1 mb-2' />
                 <div className='flex gap-4'>
                  <span className='text-sm text-gray-500'>₹{BASE_PRICE + options.material.price + options.finish.price}</span>
                  <button onClick={()=>saveConfiguration()} className='w-full bg-green-500 text-sm button-1 rounded-sm text-white flex py-1 items-end justify-center'>
               {  loading?  <><Loader2 className='size-4 animate-spin mr-1.5 flex items-center' /><span>processing</span></> : <><span>continue</span>
                    <ArrowRight className='h-4 flex items-center' /></>}
                  </button>
                 </div>
               </div>
                </div>  
           
     </div>
  )
}


export default ConfigDesign