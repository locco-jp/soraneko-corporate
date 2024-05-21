'use client';
import {useEffect, useState} from 'react';
import Image from 'next/image';
import Button from './../_components/button';
import {notoSansJP} from '../_utils/font';

export default function Flow() {
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

  return (
    <div className="relative h-screen w-full bg-green overflow-hidden">
      <div className="absolute inset-0 z-0 flex justify-center items-center scale-125">
        <Image
          src={`/flow/bg/sp/${current + 1}.svg`}
          alt=""
          className="w-full max-w-md"
          width={1080}
          height={1080}
        />
      </div>

      <div className="relative h-full z-10 flex justify-center items-center">
        {/* <div className={`max-w-sm px-6`}> */}
        <div className={`max-w-sm px-6 ${notoSansJP.className}`}>
          <Image src="/cat/lead.png" alt="" width={800} height={567} />

          <h2 className="text-xl font-bold text-center mb-1">取り組み紹介</h2>

          <p className="text-xs font-mudial font-semibold tracking-wider text-center mb-5">
            INITIATIVE
          </p>

          <p className="text-xs font-bold text-center leading-relaxed">
            日々ご連絡いただく様々な悩みごとに対して、
            <br />
            オーダーメイドで施策を企画検討しています。
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
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
