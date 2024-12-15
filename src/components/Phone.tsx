import { cn } from '@/lib/utils'
import React, { HTMLAttributes } from 'react'

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc: string,
    dark?: boolean
}

function Phone({className, imgSrc, dark=false, ...props}:PhoneProps) {
  return (
    <div className={cn('relative pointer-events-none overflow-hidden',className)}{...props}>
         <img src={dark? '/phone-template-dark-edges.png': '/phone-template-white-edges.png'} className='absolute pointer-events-none select-none' alt="" />
         <div>
            <img src={imgSrc} alt="" />
         </div>
    </div>
  )
}

export default Phone;