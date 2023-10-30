import Editor from '@/components/editor';
import Result from '@/components/result';
import React from 'react';
import 'ace-builds/src-noconflict/ext-language_tools';
import Footer from '@/components/footer';
import Header from '@/components/header';

export default function page() {
  return (
    <main className="mx-auto flex h-screen flex-col px-3.5 sm:px-4 md:px-5 lg:px-16">
      <Header />
      <div className="grid flex-1 grid-cols-2 bg-black/20">
        <Editor />
        <Result />
      </div>
      <Footer />
    </main>
  );
}
