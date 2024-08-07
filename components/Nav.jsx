'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

export const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setproviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setproviders();
  },[])
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href="/" className='flex gap-2 flex-center'>
        <Image src="/assets/images/logo.svg"
          alt='promptopia logo'
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>
      {/* screen navigation  */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href={"/create-prompt"} className='black_btn'>Create Post</Link>
            <button onClick={signOut} className='outline_btn'>Sign out</button>
            <Link href={`/profile`}>
              <Image src={session?.user.image} alt={session?.user.name} className='rounded-full cursor-pointer' width={37} height={37}/>
            </Link>
          </div>
        ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'
                  >
                    Sign In
                </button>
              ))
              }
            </>            
        )}
      </div>
      {/* mobile navigation  */}
      <div className='sm:hidden flex relative'>
        { session?.user ? (
            <div className='flex'>
              <Image src={session?.user.image} alt={session?.user.name} width={37} height={37}
                className='cursor-pointer rounded-full'
              onClick={()=>setToggleDropDown(!toggleDropDown)}
              />
              {toggleDropDown && (
                <div className='dropdown'>
                  <Link href={`/profile`} className='dropdown_link w-full text-center' onClick={()=>setToggleDropDown(false)}>My Profile</Link>
                  <Link href="/create-prompt" className='dropdown_link w-full text-center mt-5' onClick={() => setToggleDropDown(false)}>Create Post</Link>
                  <button onClick={() => {
                    setToggleDropDown(false)
                    signOut()
                  }} className='mt-5 black_btn w-full'>Sign Out</button>
                </div>
              )}
          </div>
          ):(<> {providers &&
                Object.values(providers).map((provider) => (
                  <button key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className='black_btn'
                  >
                    Sign In
                </button>
              ))
              }</>)
        }
      </div>
   </nav>
  )
}
