import Image from 'next/image';

export default function Member() {
  let sections = [
    [
      {label: 'KANEKO', image_type: 'wink'},
      {label: 'KANNO', image_type: 'default'},
    ],
    [
      {label: 'KONNO', image_type: 'default'},
      {label: 'SUPPROT', image_type: 'close'},
    ],
  ];

  return (
    <div className="relative w-full">
      <div className="absolute inset-0 h-full w-full -z-10 ">
        <Image
          src="/bg-member-sp.png"
          alt="メンバー背景"
          className="block w-full h-full lg:hidden"
          // style={{objectFit: 'contain'}}
          width="100"
          height="100"
        />
        <Image
          src="/bg-member-pc.png"
          alt="メンバー背景"
          className="w-full h-full hidden lg:block"
          // style={{objectFit: 'cover'}}
          width="1000"
          height="1000"
        />
      </div>
      <div className="w-full max-w-3xl mx-auto py-32 px-8 lg:max-w-7xl lg:py-48">
        <div className="">
          {sections.map((section, i) => {
            let jc = i % 2 === 0 ? 'justify-end' : 'justify-start';
            let nmt = i % 2 === 0 ? '' : '-mt-6';
            return (
              <div
                key={`member-section-${i}`}
                className={`w-full flex ml-5 ${jc} ${nmt}`}
              >
                <div className={`flex justify-between w-full lg:w-9/12 ${jc}`}>
                  {/* 各アイテム */}
                  {section.map((item, i) => {
                    let mx = i % 2 === 0 ? 'mr-52' : 'ml-52';
                    let my = i % 2 === 0 ? 'mb-32' : 'mt-32';
                    return (
                      <div
                        key={`member-${i}`}
                        className={`relative flex w-6/12 px-4 lg:px-0 lg:w-4/12 ${my} lg:my-0 lg:${mx}`}
                      >
                        <div className="absolute bottom-0 right-6 flex justify-center items-end w-full h-full rotate-90 pointer-events-none">
                          <span className="inline-block font-bold text-4xl text-white mr-1">
                            {item.label}
                          </span>
                          <div className="w-10 h-10 -rotate-90">
                            <Image
                              src="button_arrow.svg"
                              alt="arrow"
                              width={100}
                              height={100}
                            />
                          </div>
                        </div>

                        <Image
                          src={`/cat/${item.image_type}.png`}
                          alt="ねこ"
                          className="block w-full"
                          width={300}
                          height={300}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
