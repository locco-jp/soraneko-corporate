import Image from 'next/image';
import SectionTitle from '../_components/sectionTitle';

export default function InNumbers() {
  return (
    <div className="relative w-full pt-40">
      <div className="flex flex-col lg:flex-row max-w-md mx-auto lg:max-w-7xl px-6 mb-8">
        <div className="flex-fix lg:mr-20 mb-4">
          <SectionTitle
            ja='数字で見る<br class="hidden lg:block"/>空とぶネコ'
            en="DATA"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center">
          {new Array(7).fill(0).map((_, i) => {
            return (
              <div key={`inNumbers-${i}`} className="w-6/12 lg:w-3/12">
                <Image
                  src={`/inNumbers/${i + 1}.png`}
                  alt={`数字で見る-${1 + 1}`}
                  className="w-full"
                  width={100}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </div>
      {/* 雲 */}
      <div className="absolute inset-0 -z-20 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/cloud/1.png"
            alt="雲"
            className="cloud-animation-5 absolute top-4 right-2 lg:left-52 w-60"
            width={100}
            height={100}
          />
          <Image
            src="/cloud/4.png"
            alt="雲"
            className="cloud-animation-1 absolute -bottom-12 right-0 lg:right-12 w-40"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
