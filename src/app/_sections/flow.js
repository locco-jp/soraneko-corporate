'use client';
import {useRef, useEffect, useState, useCallback} from 'react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Button from './../_components/button';
import {notoSansJP} from '../_utils/font';
import {useRouter} from 'next/navigation';

export default function Flow() {
  gsap.registerPlugin(ScrollTrigger);

  const router = useRouter();

  const containerRef = useRef(null);
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const didEffect = useRef(false);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (current == 8) {
        setCurrent(0);
        return;
      }
      setCurrent(prev => prev + 1);
    }, 512);
    return () => clearTimeout(id);
  }, [current]);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const containerElement = containerRef.current;
    const page1Element = page1Ref.current;
    const page2Element = page2Ref.current;
    const page3Element = page3Ref.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerElement,
          start: 'center center',
          pin: true,
          scrub: true,
        },
      })
      .to(page1Element, {
        opacity: 0,
        y: 48,
        zIndex: -1,
      })
      .from(page2Element, {
        opacity: 0,
        y: 48,
        zIndex: -1,
      })
      .to(page2Element, {
        opacity: 0,
        y: 48,
        zIndex: -1,
      })
      .from(page3Element, {
        opacity: 0,
        y: 48,
        zIndex: -1,
      });
  }, []);

  const handleInitiativeClick = useCallback(
    () => router.push('#initiative'),
    []
  );

  const handleCaseClick = useCallback(() => router.push('#case'), []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-green overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex justify-center items-center scale-125">
        <Image
          src={`/flow/bg/sp/${current + 1}.svg`}
          alt=""
          className="w-full max-w-md"
          width={350}
          height={642}
        />
      </div>

      <div
        ref={page1Ref}
        className="absolute inset-0 z-10 flex justify-center items-center"
      >
        <div className={`max-w-sm px-12 ${notoSansJP.className}`}>
          <Image src="/cat/lead.png" alt="" width={800} height={567} />

          <h2 className="text-xl font-bold text-center mb-1">取り組み紹介</h2>

          <p className="text-xs font-mudial font-semibold tracking-wider text-center mb-5">
            INITIATIVE
          </p>

          <p className="text-xs font-bold leading-relaxed text-justify">
            日本全国から相談いただく様々なお悩みに対し、オーダーメイドで施策を企画検討しています。
          </p>

          <div className="mt-7">
            <p className="bg-primary text-pink rounded-full inline-block px-4 py-1 text-xs">
              <span className="font-bold">ご相談例</span>
            </p>

            <p className="text-xs mt-2 leading-6 font-medium text-justify">
              go-to-market 戦略、プレゼンス確立、収益拡大、
              未開拓領域進出に向けた事業戦略策定、デジタル
              ビジョン定義、デジタル変革、シナリオプランニ
              ング、事業再生、組織改革、新製品上市など
            </p>
          </div>

          <div className="text-right mt-5">
            <Button onClick={handleInitiativeClick} />
          </div>
        </div>
      </div>

      <div
        ref={page2Ref}
        className="absolute inset-0 z-10 flex justify-center items-center"
      >
        <div className={`max-w-sm px-12 ${notoSansJP.className}`}>
          <Image src="/cat/walk.png" alt="" width={800} height={567} />

          <h2 className="text-xl font-bold text-center mb-1">妖怪図鑑</h2>

          <p className="text-xs font-mudial font-semibold tracking-wider text-center mb-5">
            CASE
          </p>

          <p className="text-xs font-bold leading-relaxed text-justify">
            私たちは一次情報を重んじ、日本中の空をとび、生産者・製造者の方と直接対話を重ねています。
            <br />
            <br />
            そこでよく話題に出る事業展開上の困りごとを「妖怪」に見立てご紹介します。ここで登場する妖怪たちに心当たりがある方はお気軽にご相談ください。
          </p>

          <div className="flex justify-between mt-9">
            <Image
              src="/flow/materials/book.png"
              alt=""
              className="ml-2"
              width={145}
              height={103}
            />

            <Button onClick={handleCaseClick} />
          </div>
        </div>
      </div>

      <div
        ref={page3Ref}
        className="absolute inset-0 z-10 flex justify-center items-center"
      >
        <div className={`max-w-sm px-12 ${notoSansJP.className}`}>
          <h2 className="text-xl font-bold text-center mb-1">
            私たちのポリシー
          </h2>

          <p className="text-xs font-mudial font-semibold tracking-wider text-center mb-5">
            OUR POLICY
          </p>

          <p className="text-xs font-bold leading-relaxed text-justify">
            日本には、たくさんの「地域」が存在します。
            どの地域もそれぞれ特長や魅力がありますが
            事業視点では、地理的なハンディキャップを
            抱える地域が多いのではないでしょうか。
            また、生産者の高齢化・生活者の少子高齢化・
            若者の人口流出などで、ハンディキャップの
            固定化が進行しているのではないでしょうか。
            <br />
            <br />
            私たちは、ハンディキャップの固定化により、
            地域においてその克服に向けた新しい挑戦が
            起きづらくなっていることを懸念しています。
            <br />
            <br />
            もっと言えば、ハンディキャップの固定化は
            日本全体の活力低下に直結すると考えており、
            私たちは状況打破に向け、地域に眠る素材・
            生産者・メーカーを発掘して支援します。
            そこで生まれた、地域の「スター事業者」が
            起点となり、「地域ブランド」づくりなどの
            地理的なハンディキャップを克服するための
            機運を作ることが、私たちの使命です。
          </p>
        </div>
      </div>
    </div>
  );
}

export function PcFlow() {
  gsap.registerPlugin(ScrollTrigger);

  const router = useRouter();

  const containerRef = useRef(null);
  const page1Ref = useRef(null);
  const page2Ref = useRef(null);
  const page3Ref = useRef(null);
  const didEffect = useRef(false);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (current == 8) {
        setCurrent(0);
        return;
      }
      setCurrent(prev => prev + 1);
    }, 512);
    return () => clearTimeout(id);
  }, [current]);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const containerElement = containerRef.current;
    const page1Element = page1Ref.current;
    const page2Element = page2Ref.current;
    const page3Element = page3Ref.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerElement,
          start: 'center center',
          pin: true,
          scrub: true,
        },
      })
      .to(page1Element, {
        opacity: 0,
        y: 48,
        zIndex: -1,
      })
      .from(page2Element, {
        opacity: 0,
        y: 48,
        zIndex: -1,
      })
      .to(page2Element, {
        opacity: 0,
        y: 48,
        zIndex: -1,
      })
      .from(page3Element, {
        opacity: 0,
        y: 48,
        zIndex: -1,
      });
  }, []);

  const handleInitiativeClick = useCallback(
    () => router.push('#initiative'),
    []
  );

  const handleCaseClick = useCallback(() => router.push('#case'), []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full bg-green overflow-hidden"
    >
      <div className="absolute inset-0 z-0 flex justify-center items-center scale-125">
        <Image
          src={`/flow/bg/pc/${current + 1}.svg`}
          alt=""
          className="w-full max-w-7xl"
          width={1593}
          height={920}
        />
      </div>

      <div
        ref={page1Ref}
        className="absolute inset-0 z-10 flex justify-center items-center"
      >
        <div className={`max-w-6xl px-6 pt-10 ${notoSansJP.className} flex`}>
          <Image
            src="/cat/lead.png"
            alt=""
            width={800}
            height={567}
            className="max-w-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-3">取り組み紹介</h2>

            <p className="text-lg font-mudial font-semibold tracking-wider mb-7">
              INITIATIVE
            </p>

            <p className="text-lg font-bold leading-relaxed text-justify">
              日本全国から相談いただく様々なお悩みに対し、オーダーメイドで施策を企画検討しています。
            </p>

            <div className=" mt-16">
              <p className="bg-primary text-pink rounded-full inline-block px-5 py-1">
                <span className="font-bold">ご相談例</span>
              </p>

              <p className="mt-4 leading-6 font-medium text-justify">
                go-to-market 戦略、プレゼンス確立、収益拡大、
                未開拓領域進出に向けた事業戦略策定、デジタル
                ビジョン定義、デジタル変革、シナリオプランニ
                ング、事業再生、組織改革、新製品上市など
              </p>
            </div>

            <div className="text-right mt-5">
              <Button onClick={handleInitiativeClick} />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={page2Ref}
        className="absolute inset-0 z-10 flex justify-center items-center"
      >
        <div
          className={`max-w-6xl px-6 pt-10 ${notoSansJP.className} flex relative`}
        >
          <Image
            src="/cat/walk.png"
            alt=""
            width={843}
            height={551}
            className="max-w-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-3">妖怪図鑑</h2>

            <p className="text-lg font-mudial font-semibold tracking-wider mb-7">
              CASE
            </p>

            <p className="text-lg font-bold leading-relaxed text-justify">
              私たちは一次情報を重んじ、日本中の空をとび、生産者・製造者の方と直接対話を重ねています。
              <br />
              <br />
              そこでよく話題に出る事業展開上の困りごとを「妖怪」に見立てご紹介します。ここで登場する妖怪たちに心当たりがある方はお気軽にご相談ください。
            </p>

            <div className="text-right mt-9">
              <Button onClick={handleCaseClick} />
            </div>
          </div>

          <Image
            src="/flow/materials/book.png"
            alt=""
            className="absolute -top-24 -right-24 rotate-20"
            width={290}
            height={211}
          />
        </div>
      </div>

      <div
        ref={page3Ref}
        className="absolute inset-0 z-10 flex justify-center items-center"
      >
        <div
          className={`max-w-6xl px-6 pt-10 ${notoSansJP.className} flex justify-between gap-10`}
        >
          <div className="flex-fix flex flex-col justify-center">
            <h2 className="text-4xl font-bold mb-3">私たちのポリシー</h2>

            <p className="text-lg font-mudial font-semibold tracking-wider">
              OUR POLICY
            </p>
          </div>

          <p className="text-lg font-bold leading-loose text-justify">
            日本には、たくさんの「地域」が存在します。
            どの地域もそれぞれ特長や魅力がありますが
            事業視点では、地理的なハンディキャップを
            抱える地域が多いのではないでしょうか。
            また、生産者の高齢化・生活者の少子高齢化・
            若者の人口流出などで、ハンディキャップの
            固定化が進行しているのではないでしょうか。
            <br />
            <br />
            私たちは、ハンディキャップの固定化により、
            地域においてその克服に向けた新しい挑戦が
            起きづらくなっていることを懸念しています。
          </p>

          <p className="text-lg font-bold leading-loose text-justify">
            もっと言えば、ハンディキャップの固定化は
            日本全体の活力低下に直結すると考えており、
            私たちは状況打破に向け、地域に眠る素材・
            生産者・メーカーを発掘して支援します。
            そこで生まれた、地域の「スター事業者」が
            起点となり、「地域ブランド」づくりなどの
            地理的なハンディキャップを克服するための
            機運を作ることが、私たちの使命です。
          </p>
        </div>
      </div>
    </div>
  );
}
