import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimatedComponent() {
  const componentRef = useRef(null);

  useEffect(() => {
    const element = componentRef.current;

    // TODO: アニメーション実装
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: element,
    //     start: "top 80%",
    //     end: "bottom 20%",
    //     scrub: true,
    //     toggleActions: "play none none none",
    //   },
    // });

    // tl.from(element, {
    //   opacity: 0,
    //   duration: 1,
    // });
  }, []);

  return (
    <div ref={componentRef} className="w-full max-w-3xl mx-auto">
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
            <br/>
            様々な規模のプロジェクトで「CxO」として、
            <br/>
            プロトタイピングやリビルディングを主導し、
            <br/>
            社会にプラスの変化をもたらしたいと考える
            <br/>
            意思を具現化してきました。
          </p>
          <p>
            支援会社は事業構造上、キャッシュが潤沢かつ
            <br/>
            予算があるプロジェクト以外は支援できません。
            <br/>
            他方、私たちは「予算がない」プロジェクトを
            <br/>
            中心に、支援会社と事業会社の両方を経験した
            <br/>
            スタッフが丁寧に対応します。
          </p>
        </div>
        <div className="flex justify-center w-full">
          <Image
            src='/about/1.png'
            alt='TODO'
            className='w-full lg:pl-8'
            width='300'
            height='300'
          />
        </div>
      </div>
      <div className="w-full">
        <Image
          src='/about/2.png'
          alt='TODO'
          className="w-full pl-12"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
