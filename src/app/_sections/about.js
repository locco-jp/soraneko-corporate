import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react';
import Image from 'next/image';
import {isMobile} from 'react-device-detect';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedComponent() {
  const componentRef = useRef(null);

  useEffect(() => {
    const element = componentRef.current;

    // 風景
    gsap.fromTo(
      '.parallax-landscape',
      {
        yPercent: isMobile ? 0 : -10,
      },
      {
        yPercent: isMobile ? 42 : 35,
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
        yPercent: isMobile ? 5 : -16,
      },
      {
        yPercent: isMobile ? 82 : 120,
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
      <div className="w-full max-w-3xl mx-auto px-8">
        <p className="text-xl font-bold mb-9 lg:mb-0">
          私たちは、
          <br className="lg:hidden" />
          デジタル・ローカル・コマースを
          <br />
          テーマに、地域の農作物の利活用・
          <br className="lg:hidden" />
          農業支援・
          <br className="hidden lg:block" />
          海洋環境保全に
          <br className="lg:hidden" />
          取り組みます。
        </p>
        <div className="flex flex-col justify-center lg:flex-row w-full mb-10 lg:mb-20">
          <div className="w-full text-xs font-bold leading-7 mb-10 lg:mb-0 lg:pt-8">
            <p className="mb-8">
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
              src="/about/standing_position_sp.png"
              alt="TODO"
              className="w-full lg:hidden"
              width="300"
              height="300"
            />
            <Image
              src="/about/standing_position_pc.png"
              alt="TODO"
              className="hidden w-full pl-8 lg:block"
              width="300"
              height="300"
            />
          </div>
        </div>
        <div className="w-full">
          <Image
            src="/about/support_area_pc.png"
            alt="TODO"
            className="hidden w-full pl-12 lg:block"
            width={300}
            height={300}
          />
        </div>
      </div>
      <Image
        src="/about/support_area_sp.png"
        alt="TODO"
        className="w-full lg:hidden"
        width={300}
        height={300}
      />
      {/* パララックス */}
      <div className="relative parallax-trigger">
        <Image
          src="/parallax/2.png"
          alt="風景"
          className="block parallax-landscape w-full"
          width={300}
          height={300}
        />
        <Image
          src="/parallax/1_pc.png"
          alt="雲"
          className="parallax-crowd absolute inset-0 hidden lg:block w-full"
          width={300}
          height={300}
        />
        <Image
          src="/parallax/1_sp.png"
          alt="雲"
          className="parallax-crowd absolute inset-0 lg:hidden w-full"
          width={300}
          height={300}
        />
      </div>
      {/* spacer */}
      <div className="relative -z-10 bg-green h-56 w-full lg:h-144">
        <div className="absolute -bottom-1 right-0 left-0 bg-green h-4 w-full"></div>
      </div>
    </div>
  );
}
