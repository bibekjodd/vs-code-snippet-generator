'use client';
import { useSnippetGenerator } from '@/hooks/useSnippetGenerator';
import React from 'react';
import { Button } from './ui/button';
import { TbClipboardText } from 'react-icons/tb';

export default function Editor() {
  const input = useSnippetGenerator((state) => state.input);
  const tabTriggerName = useSnippetGenerator((state) => state.tabTriggerName);
  const description = useSnippetGenerator((state) => state.description);
  const inputsChanged = useSnippetGenerator((state) => state.inputsChanged);
  return (
    <div className="flex flex-col lg:pr-5">
      <section className="flex w-full items-center sm:h-16">
        <div className="flex w-full flex-col space-y-3 py-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <input
            type="text"
            placeholder="Tag Trigger..."
            className="h-10 flex-shrink flex-grow rounded-sm bg-white px-2 font-mono outline-none lg:px-3"
            value={tabTriggerName}
            onChange={(e) => inputsChanged({ tabTriggerName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description..."
            value={description}
            onChange={(e) => inputsChanged({ description: e.target.value })}
            className="h-10 flex-shrink flex-grow rounded-sm bg-white px-2 font-mono outline-none lg:px-3 "
          />
          <Button className="dark inline-flex h-10 flex-shrink-0 space-x-2">
            <span className="font-semibold">Paste</span>
            <TbClipboardText className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <textarea
        value={input}
        onChange={(e) => inputsChanged({ input: e.target.value })}
        placeholder="Paste snippet here..."
        className="min-h-[200px] flex-1 resize-none rounded-sm p-4 font-mono outline-none "
      ></textarea>
    </div>
  );
}
