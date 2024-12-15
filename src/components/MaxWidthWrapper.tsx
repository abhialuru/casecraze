import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

function MaxWidthWrapper({className, children}: {
    className?: string,
    children: ReactNode
}) {
  return (
    <div className={cn('w-full h-full max-w-screen-xl mx-auto px-2.5 md:px-40',className)} >
        {children}
    </div>
  )
}

export default MaxWidthWrapper