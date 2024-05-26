import SectionTitle from '../_components/sectionTitle';
import {notoSansJP} from '../_utils/font';

export default function News() {
  const newsItems = [
    {
      date: '2024.00.00',
      text: 'お知らせが入ります文字が入りますお知らせが入ります文字が入りますお知らせが入ります',
    },
    {
      date: '2024.00.00',
      text: 'お知らせが入ります文字が入りますお知らせが入ります文字が入りますお知らせが入ります',
    },
    {
      date: '2024.00.00',
      text: 'お知らせが入ります文字が入りますお知らせが入ります文字が入りますお知らせが入ります',
    },
    {
      date: '2024.00.00',
      text: 'お知らせが入ります文字が入りますお知らせが入ります文字が入りますお知らせが入ります',
    },
    {
      date: '2024.00.00',
      text: 'お知らせが入ります文字が入りますお知らせが入ります文字が入りますお知らせが入ります',
    },
    {
      date: '2024.00.00',
      text: 'お知らせが入ります文字が入りますお知らせが入ります文字が入りますお知らせが入ります',
    },
  ];

  return (
    <div className="relative w-full py-20 lg:mb-60 lg:py-40">
      {/* 背景 */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-white h-full w-11/12 rounded-br-3xl"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center max-w-md mx-auto px-6 lg:max-w-7xl">
        {/* タイトル */}
        <div className="w-full lg:w-1/5 flex-grow flex-shrink mb-8">
          <SectionTitle ja="お知らせ" en="NEWS" />
        </div>
        {/* アイテム */}
        <div className="mr-10 lg:mr-32">
          {newsItems.map((item, i) => {
            return (
              <div
                key={`news-${i}`}
                className="flex flex-col lg:flex-row justify-center px-4 py-6 border-b border-primary lg:first:border-t border-dotted"
              >
                <div className="font-mundial mr-10 mb-4 lg:mb-0">
                  {item.date}
                </div>
                <div className={`${notoSansJP.className}`}>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
