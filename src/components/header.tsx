import React from 'react';
import { TbBrandVscode } from 'react-icons/tb';

export default function Header() {
  return (
    <header className="min-h-16 flex h-16 items-center">
      <h3 className="flex items-center space-x-2 text-2xl font-bold text-neutral-100">
        <TbBrandVscode className="text-3xl" />
        <span>VsCode Snippet Generator</span>
      </h3>
    </header>
  );
}
