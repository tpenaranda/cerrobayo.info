import React, { useState, useEffect } from 'react';
import useScrollPosition from '@react-hook/window-scroll'
import clsx from 'clsx';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { TelegramLogo } from "phosphor-react";

function Header() {
  const router = useRouter()
  const scrollY = useScrollPosition()
  const top = scrollY < 24

  return (
    <header className={clsx('font-inter fixed w-full z-30 transition duration-300 ease-in-out border-b border-black md:border-b', top ? 'md:border-white' : 'opacity-95 bg-white border-black')}>
      <div className="max-w-6xl mx-auto px-2 sm:px-6">
        <div className={clsx('flex items-center justify-between', top ? 'h-16 md:h-20 text-gray-600' : 'h-12 text-gray-900')}>
          <a href="/" className="flex mx-2">
            <Image src={`/logo-cb${top ? '01' : '00'}.png`} alt="Info Bayo Logo" width={top ? 200 : 150} height={top ? 44 : 33} />
          </a>
          { top && <p className="px-2 text-gray-100 text-base sm:text-2xl text-center font-semibold sm:font-normal">
            <span className="hidden md:inline">Cerro Bayo | Información</span>
          </p> }
          <nav className={clsx('flex text-sm sm:text-base', top ? 'text-gray-100' : 'text-gray-900')}>
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
              <a href="https://t.me/cerrobayo" target="_blank" className={clsx('px-5 py-3 flex items-center transition duration-150 ease-in-out', top ? 'hover:text-gray-300' : 'hover:text-gray-600')}>
                <TelegramLogo color="#95C0E4" weight="fill" size={32} />
                <span className="mx-2 text-xs hidden sm:block">t.me/cerrobayo</span>
              </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
