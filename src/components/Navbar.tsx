 
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Button from './Button'

async function Navbar() {

  const { getUser } = getKindeServerSession()
  const user = await getUser()
   const isAdmin = user?.email === process.env.ADMIN_EMAIL

   console.log(user);
   

  return (
    <div className='sticky z-50 w-full bg-white/75 h-12 border top-0 shadow-lg shadow-white border-b border-gray-200 border-blur-lg inset-x-0'>
        <MaxWidthWrapper>
          <div className='w-full h-12 text-sm flex justify-between px-5 items-center' >  
            <h1>Case<span className='text-green-600 font-bold'>Craze</span></h1>  
        
      

<div className='flex items-center gap-2'>
          {user ? (
            <>
            <button className='hover:bg-gray-200 px-2 p-1 rounded-lg'>
                <Link href='/api/auth/logout'>
                signout
                </Link>
            </button>
            {isAdmin &&
            <>
                <button className='hover:bg-gray-200 px-2 p-1 rounded-lg'>                
                <Link href='/dashboard'>
                Dashboard
                </Link>
            </button> 
                           <div className='w-px h-8 bg-zinc-200' /></>
            }
            

               <Link href='/configure/upload'>
            <Button/>
            </Link>
            </>
          ) : (
            <>
            <button className='hover:bg-gray-200 px-2 p-1 rounded-lg'>
                <Link href='/api/auth/register'>
                signup
                </Link>
            </button>

            <button className='hover:bg-gray-200 px-2 p-1 rounded-lg'>
                <Link href='/api/auth/login'>
                   Login
                </Link>
            </button>
            
            <div className='w-px h-8 bg-zinc-200 hidden md:block' />
            <Link href='/configure/upload'>
            <Button/>
            </Link>
 
            </>
          )}
            </div>
            </div>
        </MaxWidthWrapper>
    </div>
  
  )
}

export default Navbar