import React from 'react'

function Phone({imgSrc}:{imgSrc:string}) {
  return (
    <>
                 
                  <img className="w-40 absolute h-80" src="/phone-template-white-edges.png" alt="" />
                   <img className="w-40 h-80 object-cover " src={imgSrc} />
  </>
  )
}

export default Phone