'use client';
import { useSnippetGenerator } from '@/hooks/useSnippetGenerator';
import React from 'react';
import { MdContentCopy } from 'react-icons/md';
import { Button } from './ui/button';
import { toast } from 'sonner';

export default function Result() {
  const result = useSnippetGenerator((state) => state.result);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      toast.success('Copied to clipboard');
    } catch (error) {
      toast.error('Clipboard permission denied');
    }
  };

  return (
    <div className="flex flex-col lg:pl-5">
      <div className="flex h-16 items-center justify-between">
        <p className="text-xl font-bold text-sky-600">Generated Snippet</p>
        <Button
          onClick={copyToClipboard}
          className="dark flex h-10 items-center space-x-2 bg-neutral-300 font-semibold"
        >
          <span>Copy</span>
          <MdContentCopy className="h-5 w-5" />
        </Button>
      </div>
      <textarea
        value={result}
        readOnly
        placeholder="Generated snippet will be shown here..."
        className="min-h-[200px] flex-1 resize-none rounded-sm bg-neutral-600 p-4 font-mono text-white outline-none placeholder:text-neutral-300"
      >
        {result}
      </textarea>
    </div>
  );
}
