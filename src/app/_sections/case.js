import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";

export default function Case() {
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);
  const item1Ref = useRef(null);
  const item1NumberRef = useRef(null);
  const item1MonsterRef = useRef(null);
  const item2Ref = useRef(null);
  const item2NumberRef = useRef(null);
  const item2MonsterRef = useRef(null);
  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const titleElement = titleRef.current;
    const item1Element = item1Ref.current;
    const item1NumberElement = item1NumberRef.current;
    const item1MonsterElement = item1MonsterRef.current;
    const item2Element = item2Ref.current;
    const item2NumberElement = item2NumberRef.current;
    const item2MonsterElement = item2MonsterRef.current;

    gsap.from(titleElement, {
      opacity: 0,
      y: 48,
      scrollTrigger: {
        trigger: titleElement,
        start: "center bottom",
        scrub: true,
      },
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: item1Element,
          start: "center center",
          pin: true,
          scrub: true,
          // markers: true,
        },
      })
      .to(item1NumberElement, {
        rotate: 360,
      })
      .from(item1MonsterElement, {
        opacity: 0,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: item2Element,
          start: "center center",
          pin: true,
          scrub: true,
          // markers: true,
        },
      })
      .to(item2NumberElement, {
        rotate: 360,
      })
      .from(item2MonsterElement, {
        opacity: 0,
      });
  }, []);

  return (
    <div className="bg-blue-900 px-6">
      <div ref={titleRef} className="text-center text-white mb-20">
        <p className="mb-4">case</p>
        <h2 className="text-4xl mb-2">妖怪図鑑</h2>
        <p>そのお悩み、妖怪の仕業かも！？</p>
      </div>

      {/* {[1, 2, 3].map(() => ( */}
      <div ref={item1Ref} className="h-screen w-full py-6">
        <div className="h-full flex flex-col bg-white p-6">
          <div className="w-full bg-yellow-100 aspect-square relative mb-4">
            <Image
              ref={item1NumberRef}
              src="/zukan/number/1.png"
              alt="01"
              className="absolute top-6 right-6"
              width={36}
              height={40}
              priority
            />

            <Image
              ref={item1MonsterRef}
              src="/anim-monster/1.png"
              alt="monster"
              width={1080}
              height={1080}
              priority
            />
          </div>

          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-xs mb-2">妖怪</p>
              <p className="text-3xl font-bold">紙かくし</p>
              <p className="text-sm">KAMIKAKUSHI</p>
            </div>
            <div>
              <p>生態</p>
              <p>人間の焦る顔が大好き。</p>
              <p>人間が大事にしている紙を根こそぎ盗んでしまう。</p>
              <p>紙の中でも特に紙幣を好み、</p>
              <p>盗んだ紙は寝床として敷き詰めている。</p>
            </div>
            <div>
              <p>事象</p>
              <p>売上が少ない、利益率が低い、</p>
              <p>キャッシュフローが悪い。</p>
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}

      <div ref={item2Ref} className="h-screen w-full py-6">
        <div className="h-full flex flex-col bg-white p-6">
          <div className="w-full bg-pink-100 aspect-square relative mb-4">
            <Image
              ref={item2NumberRef}
              src="/zukan/number/2.png"
              alt="01"
              className="absolute top-6 right-6"
              width={36}
              height={40}
              priority
            />

            <Image
              ref={item2MonsterRef}
              src="/anim-monster/2.png"
              alt="monster"
              width={1080}
              height={1080}
              priority
            />
          </div>

          <div className="h-full flex flex-col justify-between">
            <div>
              <p className="text-xs mb-2">妖怪</p>
              <p className="text-3xl font-bold">紙かくし</p>
              <p className="text-sm">KAMIKAKUSHI</p>
            </div>
            <div>
              <p>生態</p>
              <p>人間の焦る顔が大好き。</p>
              <p>人間が大事にしている紙を根こそぎ盗んでしまう。</p>
              <p>紙の中でも特に紙幣を好み、</p>
              <p>盗んだ紙は寝床として敷き詰めている。</p>
            </div>
            <div>
              <p>事象</p>
              <p>売上が少ない、利益率が低い、</p>
              <p>キャッシュフローが悪い。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
