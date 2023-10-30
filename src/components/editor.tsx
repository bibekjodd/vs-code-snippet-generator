'use client';
import { useSnippetGenerator } from '@/hooks/useSnippetGenerator';
import { useEffect } from 'react';
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
    <div className="mb-5 flex flex-col lg:mb-0 lg:pr-5">
      <div className="mb-5 flex w-full flex-col flex-wrap space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0 lg:mb-0 lg:h-20 lg:items-center">
        <input
          type="text"
          placeholder="Trigger Name..."
          className="h-10 flex-shrink flex-grow rounded-sm bg-white/10 px-2 font-mono text-neutral-300 outline-none ring-2 ring-transparent placeholder:text-neutral-400 focus:ring-sky-800 lg:px-3"
          value={tabTriggerName}
          onChange={(e) => inputsChanged({ tabTriggerName: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description..."
          value={description}
          onChange={(e) => inputsChanged({ description: e.target.value })}
          className="h-10 flex-shrink flex-grow rounded-sm bg-white/10 px-2 font-mono text-neutral-300 outline-none ring-2 ring-transparent placeholder:text-neutral-400 focus:ring-sky-800 lg:px-3"
        />
        <button
          onClick={pasteFromClipboard}
          className="inline-flex h-10 flex-shrink-0 items-center justify-center space-x-2  rounded-sm bg-neutral-600/50 px-3 py-2 font-semibold text-neutral-300 transition-all active:scale-95"
        >
          <span className="font-semibold">Paste</span>
          <TbClipboardText className="h-5 w-5" />
        </button>
      </div>

      <textarea
        value={input}
        autoCorrect="off"
        autoCapitalize="off"
        autoComplete="off"
        aria-autocomplete="none"
        autoFocus
        onChange={(e) => inputsChanged({ input: e.target.value })}
        placeholder="Paste snippet here..."
        className="min-h-[200px] flex-1 resize-none rounded-sm bg-neutral-800 p-4 font-mono text-neutral-200 outline-none ring-2 ring-transparent placeholder:text-neutral-300 focus:ring-sky-800"
      ></textarea>
    </div>
  );
}
