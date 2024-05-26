import Image from 'next/image';

export default function company(prop) {
  let item = prop.item;
  return (
    <div className="flex-fix px-2">
      <div className="max-w- lg:max-w-xs w-60 bg-white p-6 rounded-tl-lg rounded-br-lg">
        <div
          className="h-full w-full flex justify-center items-center"
          style={{aspectRatio: '6 / 3'}}
        >
          <Image
            src={item.image}
            alt={item.label}
            className="h-full object-contain"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
