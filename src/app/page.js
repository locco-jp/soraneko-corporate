import KV from "./_sections/kv";
import About from "./_sections/about";
import Button from "./components/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-primary bg-background-primary">
      <section>
        <KV />
      </section>

      <section>
        <About />
        <Button />
      </section>
    </main>
  );
}
