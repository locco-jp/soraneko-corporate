import Image from 'next/image';
import {monsters} from '../_constants/monster';

export default function KV() {
  return (
    <div
      className="relative flex flex-col justify-center items-center w-full"
      style={{height: '80vh'}}
    >
      {/* 背景 */}
      <div className="absolute inset-0 -z-10 w-full h-full">
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
      <div className="flex flex-col justify-center item-center w-full">
        <div className="w-full h-full max-w-3xl lg:max-w-7xl mx-auto">
          <div className="px-8">
            <h1 className="mb-8">
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
        </div>
        <div className="w-full">
          {/* sp */}
          <div className="lg:hidden">
            <div className="flex justify-center px-8">
              <Image
                src="/cat/default.png"
                alt="monster"
                className="h-auto w-4/5"
                style={{objectFit: 'contain'}}
                width="1766"
                height="1760"
              />
            </div>
            <div className="flex">
              <Image
                src="/anim-monster/6.png"
                alt="monster"
                className="w-4/12 h-auto"
                style={{objectFit: 'contain'}}
                width="1766"
                height="1760"
              />
              <Image
                src="/anim-monster/7.png"
                alt="monster"
                className="w-4/12 h-auto"
                style={{objectFit: 'contain'}}
                width="1766"
                height="1760"
              />
              <Image
                src="/anim-monster/3.png"
                alt="monster"
                className="w-4/12 h-auto"
                style={{objectFit: 'contain'}}
                width="1766"
                height="1760"
              />
            </div>
          </div>
          {/* pc */}
          <div className="hidden w-full lg:block">
            <div className="relative flex justify-center w-full lg:-mt-12">
              <Image
                src="/cat/default.png"
                alt="monster"
                style={{width: '28%', height: 'auto', objectFit: 'contain'}}
                width="1766"
                height="1760"
              />
              <div className="absolute inset-0 -z-10 w-full">
                <div className="flex items-center w-full h-full overflow-x-scroll">
                  {[1, 2, 3].map(i => {
                    return (
                      <div key={`section-${i}`} className="flex w-full">
                        {monsters.map((_, i) => {
                          return (
                            <div
                              key={`kv-monster-pc-${i}`}
                              className="anim-fluffy-kv-monster w-1/4 flex-shrink flex-grow"
                            >
                              <Image
                                src={`/anim-monster/${i + 1}.png`}
                                alt="monster"
                                className="w-full h-auto object-contain"
                                width="1766"
                                height="1760"
                              />
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
