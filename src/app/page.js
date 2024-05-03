"use client";

import KV from "./_sections/kv";
import About from "./_sections/about";
import Button from "./_components/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const router = useRouter();
  const handleButtonClick = useCallback(() => {
    router.push("/sample");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 text-primary bg-background-primary">
      <section className="max-w-3xl lg:max-w-7xl">
        <KV />
      </section>

      <section>
        <About />
        <Button onClick={handleButtonClick} />
      </section>
    </main>
  );
}
