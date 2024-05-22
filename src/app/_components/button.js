import Image from 'next/image';

export default function Button({label = 'MORE', onClick}) {
  return (
    <button
      className="bg-white rounded-full w-20 lg:w-32 h-20 lg:h-32 hover:opacity-50 transition-opacity duration-500 text-center button-shadow"
      onClick={onClick}
    >
      <p className="font-mundial font-bold text-xs lg:text-xl">{label}</p>

      <Image
        src="/arrow_down.svg"
        className="mt-2 lg:mt-3 mx-auto lg:w-4"
        alt=""
        width={8}
        height={9}
      />
    </button>
  );
}
