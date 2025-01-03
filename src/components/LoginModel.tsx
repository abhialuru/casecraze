import type { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import Image from 'next/image'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'

function LoginModel(
    {isOpen, setIsOpen}:{
        isOpen: boolean,
        setIsOpen: Dispatch<SetStateAction<boolean>>
    }
) {
  return (
      <Dialog onOpenChange={setIsOpen} open={isOpen} >
          <DialogContent className='absolute z-50'>
            <DialogHeader>
                <div className='relative size-36 mx-auto'>
                <Image className='object-contain'  src='/monkey.gif' alt='monkey-image' fill />
                </div>
                <DialogTitle className='text-2xl font-mono text-center tracking-tighter'>
                You Forgot to Login.
                </DialogTitle>
                <DialogDescription className='text-center'>
                    <span className='font-medium text-zinc-900'>Don't worry, your configuration was saved!</span> Please login or signup to purchase your product.
                </DialogDescription>
            </DialogHeader>
            
               <div className='grid grid-cols-2 divide-x gap-5 font-mono'>
                <LoginLink className='py-1 bg-zinc-100 border text-center rounded-md'>
                    Login
                </LoginLink>
                <RegisterLink className='py-1 bg-green-500 text-white border text-center rounded-md'>
                    signup
                </RegisterLink>
               </div>
          </DialogContent>
      </Dialog> 
)
}

export default LoginModel