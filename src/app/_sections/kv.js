import gsap from 'gsap';
import Image from 'next/image';
import {monsters} from '../_constants/monster';

export default function KV() {
  return (
    <div
      className="relative flex flex-col justify-center items-center w-full"
      style={{height: '80vh'}}
    >
      {/* 背景 */}
      <div className="absolute inset-0 -z-30 w-full h-full">
        {/* sp */}
        <Image
          src="/bg-dot_up-sp.png"
          alt="ドット背景"
          className="w-full h-full lg:hidden"
          width="1024"
          height="700"
        />
        {/* pc */}
        <Image
          src="/bg-dot_up-pc.png"
          alt="ドット背景"
          className="w-full h-full hidden lg:block"
          width="1024"
          height="700"
        />
      </div>
      {/* text */}
      <div className="flex flex-col justify-center item-center w-full h-full">
        <div className="w-full h-full max-w-3xl lg:max-w-7xl mx-auto">
          <div className="pt-28 px-8">
            <h1 className="max-w-lg lg:max-w-none mb-8">
              <Image
                src="/company_name.png"
                alt="FLYING CAT LLC"
                className="w-full lg:w-1/2"
                width="1766"
                height="1760"
              />
            </h1>
            <p className="font-bold">
              空とぶネコは地域の生産者や製造者が挑む
              <br />
              事業開発や企業再生をハンズオンで支援する
              <br />
              宮古列島最大規模のブティックファームです。
            </p>
          </div>
          {/* ねこ画像 */}
          <div className="lg:absolute inset-0 z-10 flex justify-center items-center w-full lg:h-full pointer-events-none">
            <Image
              src="/cat/default.png"
              alt="monster"
              className="anim-fluffy-kv-neko max-w-xs lg:max-w-md w-full"
              style={{objectFit: 'contain'}}
              width="1766"
              height="1760"
            />
          </div>
        </div>
      </div>
      {/* 妖怪 スライド */}
      <div className="absolute inset-0 -z-10 flex items-end pb-20 lg:pb-0 lg:items-center h-full overflow-x-hidden">
        <div
          className="flex kv-transform"
          // style={{transform: 'scale(5, 5) translateX(20%)'}}
        >
          {[1, 2].map(i => {
            return (
              <div
                key={`slide-section-${i}`}
                className="kv-slideshow flex w-full"
              >
                {monsters.map((m, i) => {
                  return (
                    <div
                      key={`kv-monster-pc-${i}`}
                      className="anim-fluffy-kv-monster max-w-xs w-full lg:mr-5"
                    >
                      <Image
                        src={`/anim-monster/${m.sort_num}.png`}
                        alt="monster"
                        className="block w-full h-auto object-contain"
                        width="500"
                        height="500"
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {/* 雲 */}
      <div className="absolute inset-0 -z-20 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/cloud/5.png"
            alt="雲"
            className="cloud-animation-1 absolute top-1 -left-10 lg:left-1 w-52"
            width={100}
            height={100}
          />
          <Image
            src="/cloud/5.png"
            alt="雲"
            className="cloud-animation-5 absolute top-32 right-6 lg:right-80 w-60"
            width={100}
            height={100}
          />
          <Image
            src="/cloud/4.png"
            alt="雲"
            className="hidden cloud-animation-1 absolute top-28 right-56 w-40"
            width={100}
            height={100}
          />
          <Image
            src="/cloud/2.png"
            alt="雲"
            className="cloud-animation-4 absolute bottom-36 right-72 w-52"
            width={100}
            height={100}
          />
          <Image
            src="/cloud/1.png"
            alt="雲"
            className="cloud-animation-3 absolute bottom-8 lg:bottom-40 left-1/3 w-52"
            width={100}
            height={100}
          />
          <Image
            src="/cloud/3.png"
            alt="雲"
            className="cloud-animation-2 absolute bottom-56 right-4 lg:right-20 w-40"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
