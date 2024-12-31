 import { EdgeStoreProvider } from '@/lib/edgestore'
import React, { ReactNode } from 'react'

function layout({children}:{children: ReactNode}) {
  return (
    
          <EdgeStoreProvider>
              {children}
          </EdgeStoreProvider>
 
  )
}

export default layout