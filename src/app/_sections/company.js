import Image from 'next/image';

export default function Company() {
  let items = [
    {label: '会社名', text: '空とぶネコ合同会社'},
    {label: '設立', text: '2018年1月23日'},
    {label: '資本金', text: '1,500,000円'},
    {
      label: '事業内容',
      text: '（主に地域の）企業再生・事業開発のハンズオン支援、農業支援',
    },
    {label: '代表者', text: '金子 史人'},
    {
      label: 'スローガン',
      text: 'ひとつでも多くの地域の悩みを緩和・解決する / 生活者原理主義',
    },
    {label: '顧問弁護士', text: 'TMI総合法律法律事務所'},
    {label: '顧問税理士', text: '緒方健税理士事務所'},
    {label: '適格請求書事業者登録番号', text: 'T5290003007777'},
  ];

  return (
    <div className="relative flex flex-col lg:flex-row w-full max-w-3xl mx-auto lg:max-w-7xl py-40 px-8">
      <div className="w-full lg:w-1/5 flex-grow flex-shrink mb-8 lg:mb-0">
        <h2 className="text-4xl font-bold mb-2 lg:mb-4">会社概要</h2>
        <p className="text-xl font-bold">COMPANY</p>
      </div>
      <div className="w-full lg:w-3/5">
        <div>
          {items.map((item, i) => {
            return (
              <div
                key={`company-${i}`}
                className="flex flex-col lg:flex-row border-b border-primary pb-4 mb-4"
              >
                <div className="font-bold mb-1 lg:mb-0 lg:font-normal lg:w-60">
                  {item.label}
                </div>
                <div className="whitespace-pre-wrap">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-1/5"></div>
      {/* 雲 */}
      <div className="absolute inset-0 -z-20 w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src="/cloud/1.png"
            alt="雲"
            className="cloud-animation-5 absolute bottom-12 right-12 w-60"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
