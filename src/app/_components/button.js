export default function Button({label = 'MORE', onClick}) {
  return (
    <button
      className="bg-white rounded-full w-32 h-32 hover:opacity-50 transition-opacity duration-500"
      onClick={onClick}
    >
      <p className="text-primary font-bold text-xl">{label}</p>
    </button>
  );
}
