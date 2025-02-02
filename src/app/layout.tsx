
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { constructMetadata } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'


export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    >
    <html lang="en">
      <body>
        <Navbar/>
        <main className="flex flex-col w-full min-h-[calc(100vh-3.5rem)]">
          <div className="flex flex-col flex-1 w-full h-full"> 
            <Providers>{children}</Providers>
            </div>
        <Footer/>
        </main>
        <Toaster/>
      </body>
    </html>
    </ClerkProvider>
  );
}
