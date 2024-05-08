import Image from "next/image";

export default function KV() {
  return (
    <div>
      <p className="text-secondary bg-primary">kv</p>
      <h1 className="text-9xl font-bold tracking-tighter leading-none">
        FLYING CAT LLC
      </h1>
      <Image
        src="/anim-monster/1.png"
        alt="monster"
        width={1080}
        height={1080}
        priority
      />
      <Image
        src="/anim-monster/2.png"
        alt="monster"
        width={1080}
        height={1080}
        priority
      />
      <Image
        src="/anim-monster/3.png"
        alt="monster"
        width={1080}
        height={1080}
        priority
      />
    </div>
  );
}
