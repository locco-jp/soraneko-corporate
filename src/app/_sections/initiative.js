import CompanyItem from '../_components/company';

export default function Initiative() {
  let items = [
    {id: 'item-1', image: ''},
    {id: 'item-2', image: ''},
    {id: 'item-3', image: ''},
    {id: 'item-4', image: ''},
    {id: 'item-5', image: ''},
    {id: 'item-6', image: ''},
  ];

  return (
    <div className="w-full py-40">
      <div className="max-w-3xl mx-auto lg:max-w-7xl mb-8">
        <h2 className="text-4xl font-bold mb-4">取り組み紹介</h2>
        <p className="text-xl font-bold">INITIATIVE</p>
      </div>
      <div className="flex w-full overflow-x-scroll mb-6">
        {items.map((item, i) => (
          <CompanyItem key={i} item={item} />
        ))}
      </div>
      <div className="flex w-full overflow-x-scroll">
        {items.map((item, i) => (
          <CompanyItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}
