import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'

function Footer() {
  return (
    <footer className='bg-white h-11 border-t border-gray-200'>
        <MaxWidthWrapper>
          <div className='w-full h-full text-muted-foreground text-sm text-center lg:flex justify-around items-center'>
            <div>
              &copy;2024 All right reserved
              </div>
              <ul className='flex gap-5 justify-center'>
                <li>Terms</li>
                <li>Private policy</li>
                <li>Cookie policy</li>
              </ul>
        
            </div>
        </MaxWidthWrapper>
    </footer>
  )
}

export default Footer