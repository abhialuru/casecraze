'use client'
import { ArrowRight, Loader2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
  import { useEffect, useState } from 'react'

function Button() {

    const pathname = usePathname()

  const [loading, setLoading] = useState(false)
 
   function handleLoading() {
    setLoading(true)
    }
    
    useEffect(()=>{
        if (pathname.endsWith('/upload')) {
            setLoading(false)      
        }
        console.log('hello');
        
    })

  return (
    <button onClick={handleLoading} className='md:flex bg-green-500 text-white p-1 px-2 rounded-lg w-28 h-7 hidden'>
    { loading ? <Loader2 className='size-4 animate-spin mr-1.5 w-full h-full items-center flex justify-center' /> :  <><span>CreateCase</span>
        <ArrowRight className='hidden sm:flex ml-2 size-5 pt-0.5' /></>
    }
    </button>
  )
}

export default Button