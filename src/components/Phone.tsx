import React from 'react'

function Phone({imgSrc, tw}:{imgSrc:string, tw?:string}) {
  return (
    <>
                 
                  <img className="w-40 absolute h-80" src="/phone-template-white-edges.png" alt="" />
                   <img className={`w-40 h-80 object-cover bg-${tw}`} src={imgSrc} />
  </>
  )
}

export default Phone