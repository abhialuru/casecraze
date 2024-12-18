import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

async function Navbar() {

  const { getUser } = getKindeServerSession()
  const user = await getUser()
   const isAdmin = user?.email === process.env.ADMIN_EMAIL

  return (
    <div className='sticky z-50 w-full bg-white/75 h-14 border top-0 shadow-lg shadow-white border-b border-gray-200 border-blur-lg inset-x-0'>
        <MaxWidthWrapper>
          <div className='w-full h-14 flex justify-between items-center' >  
            <h1>CaseCobra</h1>  
        
      

<div className='flex items-center gap-2'>
          {user ? (
            <>
            <button className='hover:bg-gray-200 px-2 p-1 rounded-lg'>
                <Link href='/api/auth/logout'>
                signout
                </Link>
            </button>
            {isAdmin &&
                <button className='hover:bg-gray-200 px-2 p-1 rounded-lg'>                
                <Link href='/dashboard'>
                Dashboard
                </Link>
            </button> 
            }
                        <div className='w-px h-8 bg-zinc-200' />
              <button className='flex items-center bg-green-500 text-white p-1 px-2 rounded-lg'>
                <Link href='/api/auth/upload'>
                CreateCase
                </Link>
                <ArrowRight className='hidden sm:flex ml-2 size-6 pt-0.5' />
            </button>
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
            <div className='w-px h-8 bg-zinc-200' />
            <button className='flex items-center bg-green-500 text-white p-1 px-2 rounded-lg'>
                <Link href='/api/auth/upload'>
                CreateCase
                </Link>
                <ArrowRight className='hidden sm:flex ml-2 size-6 pt-0.5' />
            </button>
            </>
          )}
            </div>
            </div>
        </MaxWidthWrapper>
    </div>
  
  )
}

export default Navbar