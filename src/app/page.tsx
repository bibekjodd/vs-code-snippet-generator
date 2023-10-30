import Editor from '@/components/editor';
import Result from '@/components/result';
import React from 'react';
import 'ace-builds/src-noconflict/ext-language_tools';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function page() {
  return (
    <main className="mx-auto flex flex-col overflow-y-auto px-3.5 sm:px-4 md:px-5 lg:h-screen xl:px-16">
      <Header />
      <div className="mb-5 grid flex-1 grid-cols-1 flex-col rounded-lg bg-black/20 p-3 pt-0 lg:mb-0 lg:grid-cols-2">
        <Editor />
        <Result />
      </div>
      <Footer />
    </main>
  );
}
