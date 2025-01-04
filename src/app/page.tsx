 'use client'
 import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Motion from "@/components/Motion";
import Phone from "@/components/Phone";
import { ArrowRight, Check, Loader2, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
 
 
export default function Home() {

  const images1 = [
    '/testimonials/1.jpg',
    '/testimonials/2.jpg',
    '/testimonials/3.jpg',
]
 const images2 =[
  '/testimonials/4.jpg',
  '/testimonials/5.jpg',
  '/testimonials/6.jpg',
 ]

 const images3 = [
  '/prejudice.jpg',
  '/kateramma.jpg',
  '/Batman.jpg',
 ]

     const [loading, setLoading] = useState(false)

     function handleLoading() {
      setLoading(true)
     }

  return (
    <>
    <MaxWidthWrapper>
         <div className="bg-slate-50 px-2">
            <section>
              <div className="lg:flex">
                <div>
                <div className="max-w-lg mx-auto text-center lg:text-start pt-10">
                <h1 className="text-4xl font-bold tracking-tight text-balance leading-tight">Your Image on a <span className="bg-green-500 text-white">Custom</span> phone case</h1>
                </div>
                <p className="my-10 max-w-lg mx-auto text-wrap text-center lg:text-start">Capture your favourite memories with your own,<span className="font-bold">one-of-one</span> phone case. CaseCraze allows you to protect your memories, not just your phone case.</p>
                <ul className="max-w-fit mx-auto lg:mx-0 space-y-2">
                    <li className="flex gap-2 items-center">
                    <Check className="size-5 shrink-0 text-green-600" />
                      High-quality, durable material
                    </li>
                    <li className="flex gap-2  items-center">
                    <Check className="size-5 shrink-0 text-green-600" />
                    5 Years print Guarantee
                    </li>
                    <li className="flex gap-2 items-center">
                    <Check className="size-5 shrink-0 text-green-600" />
                      Modern Iphone Models supported
                    </li>
                </ul>

                <div className="flex justify-center lg:justify-start gap-10 mt-10">
                    <div className="flex -space-x-2">
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/indian-user.4.jpg" alt="" />
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/indian-user.2.jpg" alt="" />
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/indian-user.1.jpg" alt="" />
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/indian-user.3.jpg" alt="" />
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/indian-user.5.jpg" alt="" />
                      
                    </div>
                  
                    <div>
                          <div className="flex">
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                          </div>
                          <p className="text-sm">1,250 Happy Customers</p>
                    </div>
                </div>
              </div>

                 <div className="max-w-xl relative mx-auto h-xl flex justify-center items-center py-20 lg:py-0">
                  <img className="absolute top-0 left-28 hidden lg:block" src="/your-image.png" alt="" />
                   <Phone imgSrc="/salaar.jpg" />
                  </div>
               
              </div>
            </section>
         </div>
         </MaxWidthWrapper>

           <section>
           <MaxWidthWrapper>
           <div className="bg-slate-100 lg:pt-10 px-2">

                 <div>
                   <h1 className="w-full text-4xl text-balance tracking-tight leading-tight flex justify-center font-bold py-10 underline underline-offset-4 decoration-gray-800">What our customers say</h1>    
                 </div>
        <div className="block lg:flex">
              <div className="grid grid-cols gap-4 lg:px-10 pb-10">
                 <div className="flex">
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                  </div>
                 <p>"The case feels durable and I even got a comploment on the design. had the case for two and a half months now and <span className="bg-gray-800 text-white">the image is super clear.</span>  on the case i had before, the image started fading into yellow-ish color after a couple weeks. Love it."</p>

                 <div className="flex items-end gap-5">
                  <img className="size-10 rounded-full" src="/users/indian-user.3.jpg" alt="" />
                  <div>
                    <h4 className="font-semibold">Harshad Kumar</h4>
                    <div className="flex gap-2 items-end">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                 </div>
                 </div>
                 <div className="grid grid-cols gap-4 lg:px-10 pb-10">
                 <div className="flex">
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                              <Star className="size-4 text-green-500 fill-green-500" />
                  </div>
                  <p>"I ususally keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticeable scratch on the corner, <span className="bg-gray-800 text-white">looks brand new after about half a year.</span> I dit it."</p>
                 <div className="flex items-end gap-5">
                  <img className="size-10 rounded-full" src="/users/indian-user.4.jpg" alt="" />
                  <div>
                    <h4 className="font-semibold">Mrunal Thakur</h4>
                    <div className="flex gap-2 items-end">
                    <Check className="size-4 stroke-[3px] text-green-600" />
                    <p className="text-sm">Verified Purchase</p>
                    </div>
                  </div>
                 </div>
                 </div>
                 
    </div>

                 <div className="w-full h-screen flex justify-evenly pt-20"> 
                  <div className="w-full h-full flex justify-center items-center">
                    <img className="w-40" src="/what-people-are-buying.png" alt="" />
                  </div>
                       <div className="w-full h-full hidden lg:block select-none">
                         <Motion images={images1} initialPosition="0"  finalPosition="-100%" duration={20} />
                      </div>
                      <div className="w-full h-full select-none">
                         <Motion images={images2}  initialPosition="-100%"  finalPosition="0" duration={20} />
                      </div>
                      <div className="w-full h-full hidden select-none md:block">
                         <Motion images={images3}  initialPosition="0"  finalPosition="-100%" duration={40} />
                      </div>
                      </div>   
                      </div>              
                   </MaxWidthWrapper>
           </section>
       


         <section>
          <MaxWidthWrapper>
            <div className="bg-slate-50 py-20">
              <div className="max-w-lg mx-auto lg:text-start">
                <h1 className="text-4xl font-bold tracking-tight text-center text-balance leading-tight">Upload your photo <span className="bg-green-500 text-white">and get your own</span> case</h1>
              </div>

             <div className="p-10 flex flex-col lg:flex-row items-center gap-36 lg:gap-40 justify-center">
              <div className="w-64 relative h-72 lg:h-96">
              <img className="w-full h-full rounded-lg" src="/horse.jpg" alt="" />
              <img className="rotate-90 -bottom-[30%] left-[25%] absolute lg:top-[50%] lg:left-[110%] lg:rotate-0" src="/arrow.png" alt="" />
              </div>
              <div className="lg:h-96 flex items-center">
                    <Phone imgSrc="/horse.jpg" />
              </div>  
             </div>

             <div className="w-full min-h-fit">
             <ul className="max-w-fit min-h-fit mx-auto text-sm space-y-2">
                    <li className="flex gap-2 items-center">
                    <Check className="size-4 shrink-0 text-green-600" />
                      High-quality, silicone material
                    </li>
                    <li className="flex gap-2  items-center">
                    <Check className="size-4 shrink-0 text-green-600" />
                    Scratch- and fingerprint resistant coating
                    </li>
                    <li className="flex gap-2 items-center">
                    <Check className="size-4 shrink-0 text-green-600" />
                      Wireless charging compatible
                    </li>
                    <li className="flex gap-2 items-center">
                    <Check className="size-4 shrink-0 text-green-600" />
                      5 year print warranty
                    </li>
                </ul>
                <Link href='/configure/upload' >
                <button onClick={handleLoading} className="flex w-48 mx-auto mt-10 justify-center items-end bg-green-500 text-sm text-white p-2 px-3 gap-3 rounded-md">
                { loading ? <> <Loader2 className="size-4 animate-spin"/><span>processing</span></> : <><span> Create your case now</span>
                      <ArrowRight className="size-4"/></>
                } </button>
                </Link>
               
             </div>
             </div>
          </MaxWidthWrapper>
         </section>
         </>
  );
}
