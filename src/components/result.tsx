'use client';
import { useSnippetGenerator } from '@/hooks/useSnippetGenerator';
import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import { Button } from './ui/button';

export default function Result() {
  const output = useSnippetGenerator((state) => state.output);
  return (
    <div className="flex flex-col lg:pl-5">
      <div className="flex h-16 items-center justify-between">
        <p className="text-xl font-bold text-white">Generated Snippet</p>
        <Button className="dark flex h-10 items-center space-x-2 font-semibold">
          <span>Copy</span>
          <MdContentCopy className="h-5 w-5" />
        </Button>
      </div>
      <textarea
        value={output}
        readOnly
        placeholder="Generated snippet will be shown here..."
        className="min-h-[200px] flex-1 resize-none rounded-sm p-4 font-mono outline-none"
      ></textarea>
    </div>
  );
}