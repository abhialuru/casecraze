 import { EdgeStoreProvider } from '@/lib/edgestore'
import React, { ReactNode } from 'react'

function layout({children}:{children: ReactNode}) {
  return (
    <div> 
          <EdgeStoreProvider>
              {children}
          </EdgeStoreProvider>
     </div>
  )
}

export default layout