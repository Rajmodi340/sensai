
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import checkUser  from "@/lib/checkuser"
import { ChevronDown, FileText, GraduationCap, LayoutDashboard, StarsIcon,PenBox } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuSeparator } from './ui/dropdown-menu'
 async function Header() {
  await checkUser ()
  return (
    <header >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png" 
            width={200} 
            height={100} 
            alt="Logo" 
            priority 
            className='h-12 py-1 w-auto object-contain'
          />
        </Link>
        
        <div className="flex items-center gap-4">
          <SignedIn>
          <Link href={'/dashboard'}>
            <Button className="flex items-center gap-2" variant="outline">
              <LayoutDashboard className='h-4 w-4'/>
              <span className='hidden md:block'>Industry Insights</span>
            </Button>
          </Link>
          
          <DropdownMenu>
  <DropdownMenuTrigger>
     <Button className="flex items-center gap-2">
              <StarsIcon className='h-4 w-4'/>
              <span className='hidden md:block'>Growth Tools</span>
              <ChevronDown className='h-4 w-4'/>
            </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    
  
    <DropdownMenuItem>
      <Link href={'/resume'} className='flex items-center gap-2'>
      <FileText className='h-4 w-4'/>
              <span>Build Resume</span></Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href={'/ai-cover-letter'} className='flex items-center gap-2'>
      <PenBox className='h-4 w-4'/>
              <span>Cover Letter</span></Link>
    </DropdownMenuItem>
    <DropdownMenuItem>
      <Link href={'/interview'} className='flex items-center gap-2'>
      <GraduationCap className='h-4 w-4'/>
              <span>Interview preparation</span></Link>
    </DropdownMenuItem>
   
  </DropdownMenuContent>
</DropdownMenu>
</SignedIn>
 <SignedIn>
            <UserButton
            appearance={{
              elements:{
                avatarBox:"w-10 h-10",
                userButtonPopoverCard:"shadow-xl",
                userPreviewMainIdentifier:"font-semibold"
              },
            }}
            afterSignOutUrl='/'
             />
          </SignedIn>
          
          <SignedOut>
            <SignInButton>
            <Button variant="outline">Sign in</Button>
            </SignInButton>
          </SignedOut>
          </div>
          </nav>
         
        
      
    </header>
  )
}


export default Header
