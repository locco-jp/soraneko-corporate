import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react';

export default function Case() {
  gsap.registerPlugin(ScrollTrigger);

  const item1Ref = useRef(null);
  const item1NumberRef = useRef(null);
  const item1MonsterRef = useRef(null);
  const item2Ref = useRef(null);
  const item2NumberRef = useRef(null);
  const item2MonsterRef = useRef(null);
  const itemLastRef = useRef(null);
  const itemLastMonsterRef = useRef(null);

  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const item1Element = item1Ref.current;
    const item1NumberElement = item1NumberRef.current;
    const item1MonsterElement = item1MonsterRef.current;
    const item2Element = item2Ref.current;
    const item2NumberElement = item2NumberRef.current;
    const item2MonsterElement = item2MonsterRef.current;
    const itemLastElement = itemLastRef.current;
    const itemLastMonsterElement = itemLastMonsterRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: item1Element,
          start: 'center center',
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
          start: 'center center',
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: itemLastElement,
          start: 'center center',
          pin: true,
          scrub: true,
          // markers: true,
        },
      })
      .from(itemLastMonsterElement, {
        opacity: 0,
        y: 48,
      });
  }, []);

  return (
    <div className="bg-blue-900">
      <div
        ref={item1Ref}
        className="h-screen w-full p-6 flex flex-col justify-center items-center"
      >
        <div className="h-full max-h-700 max-w-sm flex flex-col bg-white p-6">
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

      <div
        ref={item2Ref}
        className="h-screen w-full p-6 flex flex-col justify-center items-center"
      >
        <div className="h-full max-h-700  max-w-sm flex flex-col bg-white p-6">
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
              <p className="text-3xl font-bold">つまらん象</p>
              <p className="text-sm">TSUMARAN ZOU</p>
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

      <div
        ref={itemLastRef}
        className="h-screen w-full relative flex flex-col justify-center"
      >
        <div className="relative z-10">
          <Image
            ref={itemLastMonsterRef}
            src="/zukan/ending/1.png"
            alt="01"
            className="mx-auto mb-6"
            width={1072}
            height={500}
          />

          <div className="text-center text-white">
            <p>
              全案件に、カスタマードリブンなスタッフと
              <br />
              データの取り扱いに長けたスタッフが加わり、
              <br />
              高品質な施策をご提案します。
            </p>
          </div>
        </div>

        <div className="absolute inset-0">
          <Image
            src="/zukan/ending/bg-dot.png"
            alt="背景ドット"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
      </div>
    </div>
  );
}

export function PcCase() {
  return (
    <div className="h-screen w-full p-6 flex flex-col justify-center items-center">
      pc case
    </div>
  );
}
