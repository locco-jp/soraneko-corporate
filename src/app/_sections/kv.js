import Image from 'next/image';
import Link from 'next/link';

export default function KV() {
  return (
    <div className="w-full" style={{height: '80vh'}}>
      <div className="w-full h-full flex flex-col justify-center">
        <h1>
          <div className="mb-8">
            <Link href={`/members/kaneko`}>
              <Image
                src="/company_name.png"
                alt="FLYING CAT LLC"
                style={{width: '45%'}}
                width="1766"
                height="1760"
              />
            </Link>
          </div>
        </h1>
        <p className="font-bold">
          空とぶネコは地域の生産者や製造者が挑む
          <br />
          事業開発や企業再生をハンズオンで支援する
          <br />
          宮古列島最大規模のブティックファームです。
        </p>
        <div className="flex -mt-12">
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
  );
}
