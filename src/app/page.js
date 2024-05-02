"use client";

import KV from "./_sections/kv";
import About from "./_sections/about";
import Button from "./components/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Home() {
  const router = useRouter();
  const handleButtonClick = useCallback(() => {
    router.push("/sample");
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-primary bg-background-primary">
      <section>
        <KV />
      </section>

      <section>
        <About />
        <Button onClick={handleButtonClick} />
      </section>
    </main>
  );
}
