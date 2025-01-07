import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <div className='w-full flex flex-col md:grid grid-cols-2 my-auto'>
        <div className='w-full h-full flex flex-col gap-10 items-center justify-center'>
            <Image className='size-44'  src='/thanks-meme.jpg' alt='thank-you image' height={100} width={100} />
            <div className='text-center px-5 py-1 bg-zinc-100 mb-10'>
        <Link href='/'>
        Home Page</Link>
    </div>
        </div>
        <div className='flex h-full flex-col justify-between px-5'>
            <h1 className='max-w-xl text-5xl lg:text-7xl font-bold text-zinc-800'>
                THANK YOU FOR REACHING OUT TO US!
            </h1>
            <div className='flex flex-col mt-10 text-sm font-semibold' >
            <p>Your order has been successfully placed!</p>
            <p>We're currently processing it and will deliver it to you ASAP.</p>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default page