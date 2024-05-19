'use client';

import KV from './_sections/kv';
import About from './_sections/about';
import Zukan from './_sections/zukan';
import Case, {PcCase} from './_sections/case';
import Initiative from './_sections/initiative';
import Button from './_components/button';
import {useRouter} from 'next/navigation';
import {useCallback} from 'react';
import Member from './_sections/member';
import InNumbers from './_sections/inNumbers';
import Company from './_sections/company';
import Footer from './_sections/footer';
import News from './_sections/news';
import Flow from './_sections/flow';

export default function Home() {
  const router = useRouter();
  const handleButtonClick = useCallback(() => {
    router.push('/sample');
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-primary">
      <section className="w-full">
        <KV />
      </section>

      <section className="w-full">
        <About />
        {/* <Button onClick={handleButtonClick} /> */}
      </section>

      {/* flow */}
      <section className="w-full">
        <Flow />
      </section>

      <section className="w-full h-screen bg-green">
        <Zukan />
      </section>

      {/* space for scroll  */}
      {[1, 2, 3].map(i => {
        return (
          <section
            key={`space${i}`}
            className="w-full h-screen bg-green"
          ></section>
        );
      })}

      <section className="w-full lg:hidden">
        <Case />
      </section>
      <section className="w-full hidden lg:block overflow-x-hidden">
        <PcCase />
      </section>

      {/* dummy for scroll  */}
      <section className="w-full h-screen bg-black"></section>
      <section className="w-full h-screen bg-white"></section>
      <section className="w-full h-screen bg-black"></section>
      <section className="w-full h-screen bg-white"></section>

      <section className="w-full">
        <Initiative />
      </section>

      {/* member */}
      <section className="w-full">
        <Member />
      </section>

      {/* in numbers */}
      <section className="w-full">
        <InNumbers />
      </section>

      {/* company */}
      <section className="w-full">
        <Company />
      </section>

      {/* news */}
      <section className="w-full">
        <News />
      </section>

      {/* footer */}
      <section className="w-full">
        <Footer />
      </section>
    </main>
  );
}
