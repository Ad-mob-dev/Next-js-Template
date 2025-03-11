
"use client"
import "./styles.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "../../node_modules/next/navigation";

type linksData  = {
  title  : string,
  href : string,
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const navLinks : linksData[] = [
  {
    title : "Home",
    href : "/"
  },
  {
    title : "About",
    href : "/about"
  },
  {
    title : "Docs",
    href : "/docs"
  },
  {
    title : "Profile",
    href : "/profile"
  },
  {
    title : "Products",
    href : "/products"
  },
  {
    title : "Posts",
    href : "/posts"
  },
  {
    title : "Dashboard",
    href : "/complex-dashboard"
  }

]



  return (
    <html lang="en">
    
      <body className="flex flex-col flex-1">
          <header className="bg-blue-500 text-white text-end text-lg flex flex-row justify-between items-center">
            <div className="w-[10%] inline-flex items-center">
            <Image width={60} height={60} src="/logo.webp" alt="image"/>
            <pre className="m-2 font-bold">Impact</pre>
            </div>

            <nav className="justify-end items-end">
            {navLinks.map((navItem,i)=>{ 
              const isActive = pathname === (navItem.href); 
              return <Link key={i} href={navItem.href} className={isActive ? "font-bold mr-3": "font-normal"}>
                <pre className="inline-flex p-1 m-1">{navItem.title.toUpperCase()}</pre>
                </Link>})}
            </nav>
          </header>
        {children}
        <footer className="bg-blue-500 text-white text-center text-lg">footer</footer>
        </body>
     
    </html>
  )
}
