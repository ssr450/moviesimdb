import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import { FaFilm } from 'react-icons/fa';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
    <div className='flex gap-4'>
        <MenuItem title="home" address='/' Icon={AiFillHome}/>
        <MenuItem title="about" address='/about' Icon={BsFillInfoCircleFill}/>
    </div>
    <div className="fixed top-4 right-40 z-50">
    <DarkModeSwitch />
    </div>

    

<Link href="/" className="flex gap-2 items-center group">
  <FaFilm className="text-indigo-600 text-3xl transition-transform group-hover:scale-110" />
  <span
    className="
      text-3xl
      font-extrabold
      bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
      bg-clip-text
      text-transparent
      drop-shadow-lg
      tracking-wide
      select-none
      transition-transform
      group-hover:scale-105
      group-hover:brightness-110
      cursor-pointer
    "
  >
    Movie-Hub
  </span>
</Link>

    </div>
  );
}
