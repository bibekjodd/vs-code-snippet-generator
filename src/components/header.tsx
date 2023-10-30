import React from 'react';
import { TbBrandVscode } from 'react-icons/tb';

export default function Header() {
  return (
    <header className="flex h-16 items-center lg:h-20">
      <h3 className="flex items-center space-x-2 bg-gradient-to-r from-pink-600 via-amber-600 to-sky-500 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
        <TbBrandVscode className="h-8 w-8 text-neutral-400" />
        <span>VsCode Snippet Generator</span>
      </h3>
    </header>
  );
}
