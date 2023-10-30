'use client';
import { useSnippetGenerator } from '@/hooks/useSnippetGenerator';
import React, { useEffect } from 'react';
import { Button } from './ui/button';
import { TbClipboardText } from 'react-icons/tb';
import { toast } from 'sonner';

export default function Editor() {
  const input = useSnippetGenerator((state) => state.input);
  const tabTriggerName = useSnippetGenerator((state) => state.tabTriggerName);
  const description = useSnippetGenerator((state) => state.description);
  const inputsChanged = useSnippetGenerator((state) => state.inputsChanged);

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      inputsChanged({ input: text });
    } catch (error) {
      toast.error('Clipboard permission denied');
    }
  };

  useEffect(() => {
    const previousInput = localStorage.getItem('previous-input');
    if (previousInput) {
      inputsChanged({ input: previousInput });
    }
  }, []);

  return (
    <div className="flex flex-col lg:pr-5">
      <section className="flex w-full items-center sm:h-16">
        <div className="flex w-full flex-col space-y-3 py-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <input
            type="text"
            placeholder="Trigger Name..."
            className="h-10 flex-shrink flex-grow rounded-sm bg-neutral-300 px-2 font-mono outline-none placeholder:text-neutral-600 lg:px-3"
            value={tabTriggerName}
            onChange={(e) => inputsChanged({ tabTriggerName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description..."
            value={description}
            onChange={(e) => inputsChanged({ description: e.target.value })}
            className="h-10 flex-shrink flex-grow rounded-sm bg-neutral-300 px-2 font-mono outline-none placeholder:text-neutral-600 lg:px-3 "
          />
          <Button
            onClick={pasteFromClipboard}
            className="dark inline-flex h-10 flex-shrink-0 space-x-2 bg-neutral-300"
          >
            <span className="font-semibold">Paste</span>
            <TbClipboardText className="h-5 w-5" />
          </Button>
        </div>
      </section>

      <textarea
        value={input}
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
        aria-autocomplete="none"
        autoFocus
        onChange={(e) => inputsChanged({ input: e.target.value })}
        placeholder="Paste snippet here..."
        className="min-h-[200px] flex-1 resize-none rounded-sm bg-neutral-600 p-4 font-mono text-white outline-none placeholder:text-neutral-300"
      ></textarea>
    </div>
  );
}
