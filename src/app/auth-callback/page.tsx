'use client'
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { getAuthStatus } from "./action"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

 
function page() {

    const[configId, setConfigId] = useState<string | null>(null)

    const router = useRouter()

    useEffect(()=>{
     const configurationId =  localStorage.getItem('configurationId')
     setConfigId(configurationId)
    },[])

    const { data } = useQuery({
        queryKey: ['get-auth-status'],
        queryFn: async ()=>await getAuthStatus(),
        retry: true,
        retryDelay: 500,
    })

    useEffect(() => {
        if (data?.success) {
            if (configId) {
                localStorage.removeItem('configurationId')
                router.push(`/configure/preview?id=${configId}`)
            } else {
                router.push('/')
            }
        }
    }, [data?.success, configId, router])


  return (
    <div className="max-w-xl mx-auto h-96 flex justify-center items-center">
        <div className="flex flex-col  gap-2 text-center">
            <Loader2 className="size-10 animate-spin" />
            <h3 className="text-2xl font-semibold text-zinc-800">Logging...</h3>
            <p>Redirecting, please wait.</p>
        </div>
     </div>
  )
}

export default page