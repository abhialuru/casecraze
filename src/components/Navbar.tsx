 
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
 import Button from './Button'
import { currentUser } from '@clerk/nextjs/server';
import { SignOutButton } from '@clerk/nextjs';
 
async function Navbar() {

  // const { getUser } = getKindeServerSession()
  // const user = await getUser()

  const user = await currentUser()

   const isAdmin = user?.emailAddresses === process.env.ADMIN_EMAIL
 
  return (
    <div className='sticky z-50 w-full bg-white/75 h-12 border top-0 shadow-lg shadow-white border-b border-gray-200 border-blur-lg inset-x-0'>
        <MaxWidthWrapper>
          <div className='w-full h-12 text-sm flex justify-between px-5 items-center' >  
            <h1>Case<span className='text-green-600 font-bold'>Craze</span></h1>  
        
      

<div className='flex items-center gap-2'>
          {user ? (
            <>
            <SignOutButton>
            <button className='hover:bg-gray-200 px-2 p-1 rounded-lg'>
             signout
            </button>
            </SignOutButton>
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
                <Link href='/sign-up'>
                signup
                </Link>
            </button>

            <button className='hover:bg-gray-200 px-2 p-1 rounded-lg'>
                <Link href='/sign-in'>
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