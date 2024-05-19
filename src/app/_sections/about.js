import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedComponent() {
  const componentRef = useRef(null);

  useEffect(() => {
    const element = componentRef.current;

    // 風景
    gsap.fromTo(
      '.parallax-landscape',
      {
        yPercent: -10,
      },
      {
        yPercent: 35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-trigger',
          start: 'center bottom',
          end: 'center top',
          scrub: true,
        },
      }
    );
    // 雲
    gsap.fromTo(
      '.parallax-crowd',
      {
        yPercent: -16,
      },
      {
        yPercent: 120,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-trigger',
          start: 'top bottom',
          end: 'center top',
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div ref={componentRef}>
      <div className="w-full max-w-3xl mx-auto">
        <p className="text-xl font-bold">
          私たちは、デジタル・ローカル・コマースを
          <br />
          テーマに、地域の農作物の利活用・農業支援・
          <br />
          海洋環境保全に取り組みます。
        </p>
        <div className="flex justify-center w-full mb-20">
          <div className="w-full text-xs font-bold leading-7 lg:pt-8">
            <p className="mb-10">
              個人経営店からグローバル展開する企業まで、
              <br />
              様々な規模のプロジェクトで「CxO」として、
              <br />
              プロトタイピングやリビルディングを主導し、
              <br />
              社会にプラスの変化をもたらしたいと考える
              <br />
              意思を具現化してきました。
            </p>
            <p>
              支援会社は事業構造上、キャッシュが潤沢かつ
              <br />
              予算があるプロジェクト以外は支援できません。
              <br />
              他方、私たちは「予算がない」プロジェクトを
              <br />
              中心に、支援会社と事業会社の両方を経験した
              <br />
              スタッフが丁寧に対応します。
            </p>
          </div>
          <div className="flex justify-center w-full">
            <Image
              src="/about/1.png"
              alt="TODO"
              className="w-full lg:pl-8"
              width="300"
              height="300"
            />
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/about/2.png"
            alt="TODO"
            className="w-full pl-12"
            width={300}
            height={300}
          />
        </div>
      </div>
      {/* パララックス */}
      <div className="relative parallax-trigger">
        <Image
          src="/parallax/2.png"
          alt="風景"
          className="parallax-landscape w-full"
          width={300}
          height={300}
        />
        <Image
          src="/parallax/1.png"
          alt="雲"
          className="parallax-crowd absolute inset-0 w-full"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
