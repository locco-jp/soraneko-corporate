'use client';

import KV from './_sections/kv';
import About from './_sections/about';
import Zukan from './_sections/zukan';
import Case, {PcCase} from './_sections/case';
import Initiative from './_sections/initiative'
import Button from './_components/button';
import {useRouter} from 'next/navigation';
import {useCallback} from 'react';

export default function Home() {
  const router = useRouter();
  const handleButtonClick = useCallback(() => {
    router.push('/sample');
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-primary">
      <section className="w-full max-w-3xl lg:max-w-7xl">
        <KV />
      </section>

      <section className="w-full">
        <About />
        <Button onClick={handleButtonClick} />
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
      <section className="w-full hidden lg:block">
        <PcCase />
      </section>

      {/* dummy for scroll  */}
      <section className="w-full h-screen bg-black"></section>
      <section className="w-full h-screen bg-white"></section>
      <section className="w-full h-screen bg-black"></section>
      <section className="w-full h-screen bg-white"></section>

      <section className='w-full'>
        <Initiative />
      </section>
    </main>
  );
}
