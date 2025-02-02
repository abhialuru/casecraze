 "use client"
import Phone from '@/components/Phone'
import { BASE_PRICE, PRODUCT_PRICES } from '@/prices/product'
import { COLORS, MODELS } from '@/validators/options'
import { Configuration } from '@prisma/client'
import { ArrowRight, Check, Loader2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
 import Confetti from 'react-dom-confetti'
 import { useRouter } from 'next/navigation'
import Script from 'next/script'
 import LoginModel from '@/components/LoginModel'
 import {  useToast } from '@/hooks/use-toast'
    
    function DesignPreview({configuration, userCheck}:{configuration: Configuration, userCheck: string | null}) {

  const router = useRouter()

   
  const { sessionId } = configuration

  const {toast} = useToast()
 
    const [showConfetti, setShowConfetti] = useState(false)
    const [isLoginModel, setIsLoginModel] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const formRef = useRef<HTMLFormElement | null>(null);
     
    const {color,model, material, finish} = configuration
     const tw = COLORS.find((iscolor)=>iscolor.value === color)?.tw

     const {label} = MODELS.options.find(({value})=>value===model)!

     const [formValid, setFormValid] = useState(false);

    
  const handleFormValidation = () => {
    const inputs = document.querySelectorAll('input[required]');
    const isValid = Array.from(inputs).every((input) => {
       return (input as HTMLInputElement).value !== '';
    });
    setFormValid(isValid);
  };

    useEffect(()=>{
      const timeout = setTimeout(()=>{
        setShowConfetti(true)
      }, 1000)

      return ()=>clearTimeout(timeout)
    })
 

    const  handleOrder = async ({amount}:{amount: number}) => {
      const res = await fetch('/api/createOrder',{
         method: 'POST',
         body: JSON.stringify({amount: amount * 100})
      })

      const data = await res.json()

      const {id} = data

      const paymentData = {
         key: process.env.PUBLIC_NEXT_RAZORPAY_KEY_ID,
         order_id: data.id,
         name: 'Your custom case',
         callback_url: `/api/thank-you?orderId=${id}`,
             
      //   handler: async function (response: any) {
      //    // verify payment
      //   //  const res = await fetch("/api/verifyOrder", {
      //   //    method: "POST",
      //   //  });
      //    const data = await res.json();
      //     if (data.isOk) {
      //     router.push(`/api/thank-you?orderId=${id}`)            
      //    } else {
      //      alert("Payment failed");
      //    }
      //  },
       };
      const payment = new (window as any).Razorpay(paymentData);
      payment.open()

   }

         async function handleCheckout() {
          setIsLoading(false)
          if (!formValid) {
            setIsLoading(false)
              toast({
                title: 'Shipping Address Required',
                description: 'Please enter your shipping address to proceed with your order.'
              })
          }else
          if(userCheck){
              setIsLoading(false)
              await handleOrder({amount: totalPrice})
            }else{
              localStorage.setItem('configurationId', sessionId)
              setIsLoginModel(true)
               setIsLoading(false)
            }
          }
   

    let totalPrice = BASE_PRICE

    if (material==='polycorbonate') {
       totalPrice += PRODUCT_PRICES.material.polycarbonate
    }

    if (finish==='textured') {
      totalPrice += PRODUCT_PRICES.finish.textured
    }

  return (
    <>
    <Script type='text/javascript' src='https://checkout.razorpay.com/v1/checkout.js'/>
    <div
    aria-hidden="true"
    className="pointer-events-none select-none w-full h-full overflow-hidden absolute top-0 left-0 flex justify-center items-end"
    style={{ zIndex: 50 }}
  >
    <Confetti active={showConfetti} config={{ elementCount: 500, spread: 90 }} />
  </div>

  <div className='md:flex gap-10 mx-10 md:mx-auto '>
  
        <div className='mt-5 w-fit h-fit mx-auto md:mx-0'>
            <Phone tw={tw} imgSrc={configuration.croppedImageUrl!}/>
        </div>
        <div className='flex flex-col lg:max-w-3xl md:max-w-lg'>
        <div className='mt-5'>
            <h3 className='font-bold text-3xl'>Your {label} Case</h3>
            <p className='text-sm flex items-end gap-2 text-zinc-700 mt-2'><Check className='size-4 text-green-500 shrink-0' /><span>In Stock and ready to ship.</span></p>
        </div>

        <LoginModel isOpen={isLoginModel} setIsOpen={setIsLoginModel} />

        <div className='grid grid-cols-1 md:grid-cols-2 mt-5 '>
          <div className='text-sm mt-4 flex flex-col gap-2'>
              <h3 className='font-semibold text-zinc-700'>Highlights</h3>
              <ol className='text-zinc-700 space-y-0.5 list-disc'>
                <li>Wireless charging compatible</li>
                <li>TPU shock absorption</li>
                <li>Plastic free Packaging</li>
                <li>5 year print warranty</li>
              </ol>
          </div>
          <div className='text-sm mt-4 flex flex-col gap-2'>
              <h3 className='font-semibold text-zinc-700'>Materials</h3>
              <ol className='text-zinc-700 space-y-0.5 list-disc'>
                <li>High-quality, durable material</li>
                <li>Scratch and fingerprint resistant coating</li>
              </ol>
          </div>
        </div>
        <div className='h-px w-full bg-zinc-300 my-5' />
        <div className='w-full h-40 bg-gray-100 rounded-lg p-5 flex flex-col justify-between text-sm text-zinc-600'>
          <div className='flex flex-col gap-1'>
       <p className='flex justify-between items-center'><span>Base Price</span><span> ₹{BASE_PRICE}</span></p>
       { (material === 'polycorbonate') && 
       <p className='flex justify-between items-center'><span>Ploycarbonate Material</span><span>₹{PRODUCT_PRICES.material.polycarbonate}</span></p>
       }
       { (finish === 'textured') && 
       <p className='flex justify-between items-center'><span>Textured Finish</span><span>₹{PRODUCT_PRICES.finish.textured}</span></p>
       }
       </div>
       
       <div>
       <div className='h-px w-full bg-zinc-300 my-2' />
       <p className='flex justify-between items-center font-bold'><span>Order total</span><span>₹{totalPrice}</span></p>       </div>
        </div>

             <div className='mt-5'>
              <h1 className='text-base font-bold text-zinc-800 my-3'>Shipping Address</h1>
              <form className='flex flex-col gap-1' onChange={handleFormValidation}>
                   <div className='grid grid-cols-3 gap-1'>
                    <input className='outline-none border text-sm text-zinc-700 px-2 py-1 rounded-md' type="text" required placeholder='Street name'/>
                     <input className='outline-none border text-sm text-zinc-700 px-2 py-1 rounded-md' type="text" required placeholder='H NO/Floor'/>
                     <input className='outline-none border text-sm text-zinc-700 px-2 py-1 rounded-md' type="number" required placeholder='Postal Code'/>
                     </div>
                     <div className='grid grid-cols-3 gap-1'>
                     <input className='outline-none border text-sm text-zinc-700 px-2 py-1 rounded-md' type="text" required placeholder='city'/>
                    <input className='outline-none border text-sm text-zinc-700 px-2 py-1 rounded-md' type="text" required placeholder='Country'/>
                    <input className='outline-none border text-sm text-zinc-700 px-2 py-1 rounded-md' type="text" required placeholder='state'/>
                    </div>

                    
              </form>
             </div>

        <div className='my-5 text-sm flex justify-end'>
          <button onClick={()=>handleCheckout()} className='text-white w-28 flex items-center bg-green-700 px-4 py-1 rounded-sm'>
            { isLoading ? <Loader2 className='size-5 w-full animate-spin flex justify-center items-center' />:
                    <><span>Checkout</span> <ArrowRight className='size-4 ml-1.5 inline '/></>
            }
          </button>
        </div>
        </div>
        
      
  </div>
  </>
  )
}
  
export default DesignPreview