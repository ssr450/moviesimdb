import Link from 'next/link';
import React from 'react';

export default function MenuItem({ title, address, Icon }) {
  return (
    <Link
      href={address}
      className="
        flex items-center gap-1
        px-3 py-2
        text-shadow-violet-900 dark:text-shadow-violet-400
        hover:text-purple-600
        transition-colors duration-300
        rounded-md
        select-none
        cursor-pointer
      "
    >
      <Icon className="text-3xl sm:text-2xl" />
      <p className="uppercase hidden sm:inline tracking-widest font-semibold">
        {title}
      </p>
    </Link>
  );
}
