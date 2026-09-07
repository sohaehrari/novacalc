import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Nova Calc",
  description: "A simple and powerful calculator application.",
};

export default function Layout({children}){
 
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
  }