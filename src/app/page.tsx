import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";

 
export default function Home() {
  return (
    <MaxWidthWrapper>
         <div className="bg-slate-50">
            <section>
              <div className="md:flex">
                <div>
                <div className="max-w-lg text-center md:text-start pt-10">
                <h1 className="text-4xl font-bold text-balance leading-tight">Your Image on a <span className="bg-green-500 text-white">Custom</span> phone case</h1>
                </div>
                <p className="my-10 max-w-md text-wrap text-center md:text-start">Capture your favourite memories with your own,<span className="font-bold">one-of-one</span> phone case. CaseCobra allows you to protect your memories, not just your phone case.</p>
                <ul className="max-w-fit mx-auto md:mx-0 space-y-2">
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

                <div className="flex justify-center gap-10 mt-10">
                    <div className="flex -space-x-2">
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/user-1.png" alt="" />
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/user-2.png" alt="" />
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/user-3.png" alt="" />
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/user-4.jpg" alt="" />
                        <img className="size-7 rounded-full object-cover ring-2 ring-slate-50" src="/users/user-5.jpg" alt="" />
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

              <div className="w-full h-fit pt-10">
                <div className="relative md:block flex justify-center max-w-xl">
                   <img className="w-40 hidden md:block absolute z-10 right-5 top-2" src="/your-image.png" alt="" />
                   <img className="w-20 hidden md:block absolute top-64 right-56" src="/line.png" alt="" />
                   <Phone className="w-40 absolute md:left-72 top-14" imgSrc='/testimonials/1.jpg' />
                </div>
              </div>
              </div>
            </section>
         </div>
    </MaxWidthWrapper>
  );
}
