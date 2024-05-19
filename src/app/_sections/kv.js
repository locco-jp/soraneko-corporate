import Image from 'next/image';

export default function KV() {
  return (
    <div className="relative w-full" style={{height: '80vh'}}>
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* sp */}
        <Image
          src="/bg-dot_up-sp.png"
          alt="ドット背景"
          className="w-full h-full lg:hidden"
          width="1024"
          height="700"
        />
        <Image
          src="/bg-dot_up-pc.png"
          alt="ドット背景"
          className="w-full h-full hidden lg:block"
          width="1024"
          height="700"
        />
      </div>
      <div className="w-full max-w-3xl lg:max-w-7xl mx-auto h-full flex flex-col justify-center">
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
        <div className="hidden lg:block">
          <div className="flex lg:-mt-12">
            <Image
              src="/anim-monster/6.png"
              alt="monster"
              style={{width: '18%', height: 'auto', objectFit: 'contain'}}
              width="1766"
              height="1760"
            />
            <Image
              src="/anim-monster/7.png"
              alt="monster"
              style={{width: '18%', height: 'auto', objectFit: 'contain'}}
              width="1766"
              height="1760"
            />
            <Image
              src="/cat/default.png"
              alt="monster"
              style={{width: '28%', height: 'auto', objectFit: 'contain'}}
              width="1766"
              height="1760"
            />
            <Image
              src="/anim-monster/3.png"
              alt="monster"
              style={{width: '18%', height: 'auto', objectFit: 'contain'}}
              width="1766"
              height="1760"
            />
            <Image
              src="/anim-monster/2.png"
              alt="monster"
              style={{width: '18%', height: 'auto', objectFit: 'contain'}}
              width="1766"
              height="1760"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
