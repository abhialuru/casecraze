// bg-zinc-900   border-zinc-900
// bg-blue-900   border-blue-900
// bg-red-700    border-red-700

import { PRODUCT_PRICES } from "@/prices/product"

 
export const COLORS = [
    {
        label: 'Black', value: 'black', tw: 'zinc-900'
    },
    {
        label: 'Blue', value: 'blue', tw: 'blue-900'
    },
    {
        label: 'Red', value: 'red', tw: 'red-700'
    }
] as const

export const MODELS = {
    name: 'models',
    options: [
      {
        label: 'iPhone X',
        value: 'iphonex',
      },
      {
        label: 'iPhone 11',
        value: 'iphone11',
      },
      {
        label: 'iPhone 12',
        value: 'iphone12',
      },
      {
        label: 'iPhone 13',
        value: 'iphone13',
      },
      {
        label: 'iPhone 14',
        value: 'iphone14',
      },
      {
        label: 'iPhone 15',
        value: 'iphone15',
      },
    ],
  } as const

  export const MATERIALS = {
    name: 'material',
    options: 
       [
          {
          label: 'Silicone',
          value: 'silicone',
          description: undefined,
          price : PRODUCT_PRICES.material.silicone
          },
          {
            label: 'Polycorbonate',
            value: 'polycorbonate',
            description:  'Scratch-resistant coating',
            price : PRODUCT_PRICES.material.polycarbonate
          }
       ]
    } as const


  export const FINISHES = {
    name: 'finish',
    options: 
       [
          {
          label: 'Smooth',
          value: 'smooth',
          description: undefined,
          price : PRODUCT_PRICES.finish.smooth
          },
          {
            label: 'Textured',
            value: 'textured',
            description:  'Soft grippy texture',
            price : PRODUCT_PRICES.finish.textured
          }
       ]
    } as const 
 