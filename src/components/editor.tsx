'use client';
import React from 'react';

export default function Editor() {
  return (
    <div className="flex flex-col border border-blue-500">
      <div></div>
      <textarea
        placeholder="Paste snippet here..."
        className="bg-transprent flex-1 resize-none p-4 font-mono outline-none"
      ></textarea>
    </div>
  );
}
