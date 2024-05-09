"use client";

import KV from "./_sections/kv";
import About from "./_sections/about";
import Zukan from "./_sections/zukan";
import Case from "./_sections/case";
import Button from "./_components/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const router = useRouter();
  const handleButtonClick = useCallback(() => {
    router.push("/sample");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-primary bg-background-primary">
      <section className="w-full max-w-3xl lg:max-w-7xl">
        <KV />
      </section>

      <section>
        <About />
        <Button onClick={handleButtonClick} />
      </section>

      <section className="w-full h-screen">
        <Zukan />
      </section>

      {/* dummy for scroll  */}
      <section className="w-full h-screen"></section>
      <section className="w-full h-screen"></section>
      <section className="w-full h-screen"></section>

      <section className="w-full">
        <Case />
      </section>

      {/* dummy for scroll  */}
      <section className="w-full h-screen bg-black"></section>
      <section className="w-full h-screen bg-white"></section>
      <section className="w-full h-screen bg-black"></section>
      <section className="w-full h-screen bg-white"></section>
    </main>
  );
}
