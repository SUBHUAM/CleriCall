import { SignedIn, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react'
import MobileNav from './MobileNav';
import Link from 'next/link';
import { cn } from '@/lib/utils';

function Navbar(props) {
   

    return (
        <nav className="flex-between fixed z-50 w-full  px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/icons/clericall-1.png"
              width={76}
              height={76}
              alt="CleriCall logo"
              className="max-sm:size-10"
            />
            <p className="text-[26px] font-extrabold text-white max-sm:hidden pl-2">
              CleriCall
            </p>
          </Link>
          <div className="flex-between gap-5">
            <SignedIn>
              <UserButton afterSignOutUrl="/sign-in"  width={32} height={32}/>
            </SignedIn>
            <MobileNav />
          </div>
        </nav>
      );
}

export default Navbar