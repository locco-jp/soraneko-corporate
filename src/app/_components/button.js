import Image from 'next/image';

export default function Button({label = 'MORE', onClick}) {
  return (
    <button
      className="bg-white rounded-full w-20 h-20 hover:opacity-50 transition-opacity duration-500 text-center button-shadow"
      onClick={onClick}
    >
      <p className="font-mundial font-bold text-xs">{label}</p>

      <Image
        src="/arrow_down.svg"
        className="mt-2 mx-auto"
        alt=""
        width={8}
        height={9}
      />
    </button>
  );
}
