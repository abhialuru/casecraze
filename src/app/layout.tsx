
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar/>

        <main className="flex flex-col w-full min-h-[calc(100vh-3.5rem)]">
          <div className="flex flex-col flex-1 w-full h-full"> {children}</div>
        <Footer/>
        </main>
        <Toaster/>
      </body>
    </html>
  );
}
