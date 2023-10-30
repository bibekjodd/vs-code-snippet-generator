'use client';
import { useSnippetGenerator } from '@/hooks/useSnippetGenerator';
import { MdContentCopy } from 'react-icons/md';
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
      <div className="flex h-20 items-center justify-between">
        <p className="text-xl font-bold text-sky-600">Generated Snippet</p>
        <button
          onClick={copyToClipboard}
          className="inline-flex h-10 flex-shrink-0 items-center justify-center space-x-2  rounded-sm bg-neutral-600/50 px-3 py-2 font-semibold text-neutral-300 transition-all active:scale-95"
        >
          <span>Copy</span>
          <MdContentCopy className="h-5 w-5" />
        </button>
      </div>
      <textarea
        value={result}
        readOnly
        placeholder="Generated snippet will be shown here..."
        className="min-h-[200px] flex-1 resize-none rounded-sm bg-neutral-800 p-4 font-mono text-neutral-200 outline-none ring-2 ring-transparent placeholder:text-neutral-300 focus:ring-sky-800"
      ></textarea>
    </div>
  );
}
