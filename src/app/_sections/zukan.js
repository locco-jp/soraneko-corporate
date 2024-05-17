import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {useRef, useEffect} from 'react';
import Image from 'next/image';
import {mochiy} from '../_utils/font';

export default function Zukan() {
  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef(null);
  const bookRef = useRef(null);
  const starRef = useRef(null);
  const nextRef = useRef(null);
  const titleRef = useRef(null);

  const didEffect = useRef(false);

  useEffect(() => {
    if (didEffect.current) return;
    didEffect.current = true;

    const containerElement = containerRef.current;
    const bookElement = bookRef.current;
    const starElement = starRef.current;
    const nextElement = nextRef.current;
    const titleElement = titleRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: containerElement,
          start: 'center center',
          end: `${containerElement.getBoundingClientRect().height * 3} top`,
          scrub: true,
          pin: true,
          // markers: true,
        },
      })
      .from(bookElement, {
        scale: 0,
      })
      .to(starElement, {
        transformOrigin: '44% 40%',
        scale: 100,
        rotate: 360,
      })
      .to(nextElement, {
        scale: 3,
      })
      .from(titleElement, {
        opacity: 0,
        y: 48,
      });
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-full w-full flex items-center overflow-hidden relative"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/zukan/ending/bg-dot.png"
          alt="背景ドット"
          fill
          style={{objectFit: 'cover'}}
        />
      </div>

      <div className="relative max-w-3xl mx-auto z-10">
        <Image
          src="/zukan/opening/1.png"
          alt="zukan-opening-text"
          sizes="100vw"
          className="animation-rotate px-3"
          style={{width: '100%', height: 'auto'}}
          width="1766"
          height="1760"
        />

        <Image
          src="/zukan/opening/2.png"
          alt="zukan-opening-cloud1"
          style={{position: 'absolute', top: 0, right: -88}}
          width="1037"
          height="869"
        />

        <Image
          src="/zukan/opening/3.png"
          alt="zukan-opening-cloud2"
          style={{position: 'absolute', bottom: 0, left: -88}}
          width="1009"
          height="518"
        />

        <div ref={bookRef} className="absolute inset-0">
          <Image
            src="/zukan/opening/4.png"
            alt="zukan-opening-book"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            width="1590"
            height="1665"
          />

          <Image
            ref={starRef}
            src="/zukan/opening/5.png"
            alt="zukan-opening-star"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            width="1127"
            height="1225"
          />
        </div>

        <div
          ref={nextRef}
          className="absolute inset-0 bg-navy rounded-full scale-0"
        ></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <div ref={titleRef} className="text-center text-white mb-20">
            <p className="mb-9 font-mundial tracking-widest text-xs">CASE</p>
            <h2 className="mb-4 px-16">
              <Image
                src="/zukan/zukan.svg"
                alt="妖怪図鑑"
                width="477"
                height="106"
              />
            </h2>
            <p className={`${mochiy.className} text-sm tracking-widest`}>
              そのお悩み、妖怪の仕業かも!?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
