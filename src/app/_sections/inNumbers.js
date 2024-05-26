import Image from 'next/image';

export default function InNumbers() {
  const items = [{image: ''}];
  return (
    <div className="w-full pt-40">
      <div className="flex flex-col lg:flex-row max-w-3xl mx-auto lg:max-w-7xl px-6 mb-8">
        <div className="flex-fix lg:mr-20 mb-4">
          <h2 className="text-4xl font-bold mb-4">
            数字で見る
            <br />
            空とぶネコ
          </h2>
          <p className="text-xl font-bold">DATA</p>
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
    </div>
  );
}
