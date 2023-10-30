import Editor from '@/components/editor';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Result from '@/components/result';

export default function page() {
  return (
    <main className="mx-auto flex min-h-screen flex-col overflow-y-auto px-3.5 sm:px-4 md:px-5 lg:h-screen xl:px-16">
      <Header />
      <div className="mb-5 grid flex-1 grid-cols-1 flex-col rounded-lg bg-white/5 p-3 pt-0 lg:mb-0 lg:grid-cols-2">
        <Editor />
        <Result />
      </div>
      <Footer />
    </main>
  );
}
