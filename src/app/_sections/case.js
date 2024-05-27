import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect, createRef} from 'react';
import {monsters} from '../_constants/monster';
import {mochiy, notoSansJP} from '../_utils/font';

export default function Case() {
  gsap.registerPlugin(ScrollTrigger);

  const monsterItemRefs = useRef([]);
  const monsterNumberRefs = useRef([]);
  const monsterMonsterRefs = useRef([]);

  monsters.forEach((_, index) => {
    monsterItemRefs.current[index] = createRef();
    monsterNumberRefs.current[index] = createRef();
    monsterMonsterRefs.current[index] = createRef();
  });

  const itemLastRef = useRef(null);
  const itemLastMonsterRef = useRef(null);
  const cloudRef = useRef(null);

  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const itemLastElement = itemLastRef.current;
    const itemLastMonsterElement = itemLastMonsterRef.current;
    const cloudElement = cloudRef.current;

    monsters.forEach((_, index) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: monsterItemRefs.current[index].current,
            start: 'center center',
            pin: true,
            scrub: true,
          },
        })
        .to(monsterNumberRefs.current[index].current, {
          rotate: 360,
        })
        .from(monsterMonsterRefs.current[index].current, {
          opacity: 0,
        });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: itemLastElement,
          start: 'center center',
          end: 'center top',
          pin: true,
          scrub: true,
        },
      })
      .from(itemLastMonsterElement, {
        opacity: 0,
        y: 48,
      });

    gsap.fromTo(
      cloudElement,
      {
        yPercent: 60,
      },
      {
        yPercent: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: cloudElement,
          start: 'top bottom',
          end: 'center top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-navy relative">
      {monsters.map((m, i) => (
        <div
          ref={monsterItemRefs.current[i]}
          key={m.name.en}
          className="h-screen w-full p-6 flex flex-col justify-center items-center"
        >
          <div className="h-full max-h-700 max-w-sm flex flex-col bg-white p-6">
            <div className="w-full aspect-square relative mb-4">
              <Image
                src={`/zukan/bg/${i + 1}.png`}
                alt=""
                className="absolute inset-0 z-0"
                width={1080}
                height={1080}
              />

              <p
                ref={monsterNumberRefs.current[i]}
                className={`absolute top-6 ${
                  i % 2 === 0 ? 'right-6' : 'left-6'
                } z-10 ${mochiy.className} text-4xl`}
              >{`0${i + 1}`}</p>

              <Image
                ref={monsterMonsterRefs.current[i]}
                src={`/anim-monster/${i + 1}.png`}
                alt="monster image"
                className="relative z-20"
                width={1080}
                height={1080}
              />
            </div>

            <div
              className={`h-full flex flex-col justify-between ${notoSansJP.className}`}
            >
              <div>
                <p className="text-xs font-bold tracking-widest mb-1">妖怪</p>
                <p className="text-2xl tracking-wider font-bold">{m.name.ja}</p>
                <p className="font-mundial text-sm">{m.name.en}</p>
              </div>

              <div>
                <p className="bg-primary text-white rounded-full inline-block px-4 py-1 text-xs">
                  <span className="mr-3">生</span>
                  <span>態</span>
                </p>
                <p
                  className="text-xs mt-2 leading-6 font-medium"
                  dangerouslySetInnerHTML={{__html: m.ecology}}
                />
              </div>

              <div>
                <p className="bg-primary text-white rounded-full inline-block px-4 py-1 text-xs">
                  <span className="mr-3">事</span>
                  <span>象</span>
                </p>
                <p
                  className="text-xs mt-2 leading-6 font-medium"
                  dangerouslySetInnerHTML={{__html: m.phenomenon}}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div
        ref={itemLastRef}
        className="h-screen w-full relative flex flex-col justify-center"
      >
        <div className="relative z-10">
          <Image
            ref={itemLastMonsterRef}
            src="/zukan/ending/1-sp.png"
            alt=""
            className="mx-auto mb-4"
            width={726}
            height={622}
          />

          <div
            className={`text-center text-white ${notoSansJP.className} text-sm font-bold leading-8`}
          >
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

      <div ref={cloudRef} className="absolute left-0 right-0 -bottom-4">
        <Image
          src="/zukan/ending/sp-cloud.png"
          alt=""
          className="w-full"
          width={750}
          height={420}
        />
      </div>
    </div>
  );
}

export function PcCase() {
  gsap.registerPlugin(ScrollTrigger);

  const didEffect = useRef(false);

  const pcContainerRef = useRef(null);
  const pcMonsterImageRefs = useRef([]);
  const pcMonsterNumberRefs = useRef([]);
  const pcItemLastMonsterRef = useRef(null);
  // const cloudRef = useRef(null);

  monsters.forEach((_, index) => {
    pcMonsterImageRefs.current[index] = createRef();
    pcMonsterNumberRefs.current[index] = createRef();
  });

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const pcContainerElement = pcContainerRef.current;
    const containerWidth = pcContainerElement.offsetWidth;
    const pcItemLastMonsterElement = pcItemLastMonsterRef.current;
    // const cloudElement = cloudRef.current;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: pcContainerElement,
        start: 'top top',
        end: `+=${containerWidth}`,
        pin: true,
        scrub: true,
        // markers: true,
      },
    });

    monsters.forEach((_, index) => {
      tl.to(pcMonsterNumberRefs.current[index].current, {
        rotate: 360,
      })
        .from(pcMonsterImageRefs.current[index].current, {
          opacity: 0,
        })
        .to(pcContainerElement, {
          xPercent: -((index + 1) * (100 / (monsters.length + 1))),
          ease: 'none',
        });
    });

    tl.from(pcItemLastMonsterElement, {
      opacity: 0,
    });

    // gsap.fromTo(
    //   cloudElement,
    //   {
    //     yPercent: 10,
    //   },
    //   {
    //     yPercent: 0,
    //     ease: 'none',
    //     scrollTrigger: {
    //       trigger: cloudElement,
    //       start: 'top bottom',
    //       end: 'center top',
    //       scrub: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <div
      ref={pcContainerRef}
      className="h-screen flex flex-nowrap bg-navy relative"
      style={{width: `${(monsters.length + 1) * 100}%`}}
    >
      {monsters.map((m, i) => (
        <div
          key={m.name.en}
          className="h-full w-screen p-6 flex flex-col justify-center items-center box-border"
        >
          <div className="h-full w-full max-h-700 max-w-7xl flex bg-white pl-20 py-20 pr-2">
            <div className="h-full aspect-square relative mr-16">
              <Image
                src={`/zukan/bg/${i + 1}.png`}
                alt=""
                className="absolute inset-0 z-0"
                width={1080}
                height={1080}
              />

              <p
                ref={pcMonsterNumberRefs.current[i]}
                className={`absolute top-6 ${
                  i % 2 === 0 ? 'right-6' : 'left-6'
                } z-10 ${mochiy.className} text-8xl`}
              >{`0${i + 1}`}</p>

              <Image
                ref={pcMonsterImageRefs.current[i]}
                src={`/anim-monster/${i + 1}.png`}
                alt="monster image"
                className="relative z-20"
                width={1080}
                height={1080}
              />
            </div>

            <div
              className={`w-full flex flex-col justify-center gap-16 ${notoSansJP.className}`}
            >
              <div>
                <p className="text-lg font-bold tracking-widest mb-2">妖怪</p>
                <p className="text-4xl tracking-wider font-bold mb-2">
                  {m.name.ja}
                </p>
                <p className="font-mundial tracking-widest text-sm">
                  {m.name.en}
                </p>
              </div>

              <div>
                <p className="bg-primary text-white rounded-full inline-block px-5 py-1 text-lg">
                  <span>生　態</span>
                </p>
                <p
                  className="text-lg mt-4 leading-10 font-medium"
                  dangerouslySetInnerHTML={{__html: m.ecology}}
                />
              </div>

              <div>
                <p className="bg-primary text-white rounded-full inline-block px-5 py-1 text-lg">
                  <span>事　象</span>
                </p>
                <p
                  className="text-lg mt-4 leading-10 font-medium"
                  dangerouslySetInnerHTML={{__html: m.phenomenon}}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="h-full w-screen mx-auto relative flex flex-col justify-center">
        <div className="relative z-10">
          <Image
            ref={pcItemLastMonsterRef}
            src="/zukan/ending/1.png"
            alt=""
            className="mx-auto mb-6"
            width={1072}
            height={500}
          />

          <p
            className={`text-center text-2xl text-white ${notoSansJP.className} font-bold leading-10 tracking-wider`}
          >
            全案件に、カスタマードリブンなスタッフと
            <br />
            データの取り扱いに長けたスタッフが加わり、
            <br />
            高品質な施策をご提案します。
          </p>
        </div>

        <div className="absolute inset-0 opacity-50">
          <Image
            src="/zukan/ending/bg-dot-pc.png"
            alt="背景ドット"
            fill
            style={{objectFit: 'cover'}}
          />
        </div>
      </div>

      {/* <div ref={cloudRef} className="absolute right-0 -bottom-64"> */}
      <div className="absolute right-0 -bottom-64">
        <Image
          src="/zukan/ending/pc-cloud.png"
          alt=""
          className="w-screen"
          width={1920}
          height={1026}
        />
      </div>
    </div>
  );
}
