import Image from 'next/image';
import {useRef, useEffect} from 'react';

export default function ButtonPageTop() {
  const buttonPageTopRef = useRef(null);

  useEffect(() => {
    const buttonPageTopElement = buttonPageTopRef.current;
    window.onscroll = e => {
      if (window.pageYOffset > 100) {
        buttonPageTopElement.style.opacity = '1';
        buttonPageTopElement.style.transition = '256ms';
      } else if (window.pageYOffset < 100) {
        buttonPageTopElement.style.opacity = '0';
        buttonPageTopElement.style.pointerEvent = 'none';
      }
    };
  });
  const toTop = () => {
    window.scroll({top: 0, behavior: 'smooth'});
  };

  return (
    <button ref={buttonPageTopRef} onClick={toTop}>
      <Image
        src="/button_page_top.png"
        className="w-52"
        alt=""
        width={100}
        height={100}
      />
    </button>
  );
}
