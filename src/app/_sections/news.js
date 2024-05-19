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
    <div className="relative w-full py-40">
      {/* 背景 */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-white h-full w-11/12 rounded-br-3xl"></div>
      </div>
      <div className="flex items-center max-w-3xl mx-auto lg:max-w-7xl">
        {/* タイトル */}
        <div className="w-1/5 flex-grow flex-shrink">
          <h2 className="text-4xl font-bold mb-4">お知らせ</h2>
          <p className="text-xl font-bold">NEWS</p>
        </div>
        {/* アイテム */}
        <div className="mr-20">
          {newsItems.map((item, i) => {
            return (
              <div
                key={`news-${i}`}
                className="flex justify-center px-4 py-6 border-b border-primary first:border-t border-dotted"
              >
                <div className="mr-10">{item.date}</div>
                <div>{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
