import Image from 'next/image';

export default function Member() {
  let sections = [
    [
      {id: 'kaneko', label: 'KANEKO', image_type: 'wink'},
      {id: 'kanno', label: 'KANNO', image_type: 'default'},
    ],
    [
      {id: 'konno', label: 'KONNO', image_type: 'default'},
      {id: 'support', label: 'SUPPORT', image_type: 'close'},
    ],
  ];

  return (
    // PC
    <div
      className="w-full"
      style={{
        backgroundImage: 'url("/member_bg.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%',
      }}
    >
      <div className="w-full max-w-3xl mx-auto lg:max-w-7xl py-48">
        <div className="">
          {sections.map((section, i) => {
            return (
              <div
                key={`member-section-${i}`}
                className={`w-full flex justify-${
                  i % 2 === 0 ? 'end' : 'start'
                }`}
              >
                <div
                  className={`flex justify-between w-9/12 justify-${
                    i % 2 === 0 ? 'end' : 'start'
                  }`}
                >
                  {/* 各アイテム */}
                  {section.map((item, i) => {
                    return (
                      <div
                        key={`member-${i}`}
                        className={`relative flex w-4/12 m${
                          i % 2 === 0 ? 'r' : 'l'
                        }-50`}
                      >
                        <div className="absolute bottom-0 right-6 z flex justify-center items-end w-full h-full rotate-90 pointer-events-none">
                          <span className="inline-block font-bold text-4xl text-white mr-1">
                            {item.label}
                          </span>
                          <div className="w-10 h-10 -rotate-90">
                            <Image
                              src="button_arrow.svg"
                              art="arrow"
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
