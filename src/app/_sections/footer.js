import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import {isDesktop} from 'react-device-detect';
import {useEffect} from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const items = [
    {label: 'トップ', url: '#'},
    {label: '取り組み紹介', url: '#'},
    {label: '妖怪図鑑', url: '#'},
    {label: '会社概要', url: '#'},
    {label: 'お知らせ', url: '#'},
  ];

  useEffect(() => {
    let {startY, endY} = 0;
    if (window.innerWidth < 430) {
      // sp
      startY = -100;
      endY = 20;
    } else if (window.innerWidth > 1024) {
      // pc
      startY = -200;
      endY = -60;
    } else {
      // tl
      startY = -180;
      endY = -100;
    }
    // 雲
    gsap
      .timeline({
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-footer-trigger',
          start: 'top bottom',
          end: 'bottom center',
          scrub: true,
        },
      })
      .fromTo(
        '.parallax-footer-crowd',
        {
          y: startY,
        },
        {
          y: endY,
        }
      );
  });

  return (
    <div className="relative w-full pt-32 lg:pt-0  parallax-footer-trigger">
      {/* 雲 */}
      <div className="absolute top-4 lg:-top-72 right-0 left-0 parallax-footer-crowd">
        <Image
          src="/footer_crowd.png"
          alt="FOOTER CLOUD"
          className="w-full"
          width="300"
          height="300"
        />
        {/* spacer */}
        <div className="absolute -bottom-10 lg:-bottom-24 right-0 left-0 -z-10 w-full h-full flex items-end lg:hidden">
          <div className="bg-pink h-20 lg:h-44 w-full"></div>
        </div>
      </div>
      {/* フッターコンテンツ */}
      <div className="parallax-footer-base w-full bg-pink pt-10 lg:pt-40">
        <div className="flex flex-col items-center justify-between w-full max-w-3xl px-6 pt-4 pb-10 lg:pb-16 mx-auto lg:flex-row lg:max-w-7xl lg:px-16 lg:pt-0">
          {/* ロゴ */}
          <Image
            src="/logo.png"
            alt="LOGO"
            className="block w-52 mb-8 lg:mb-0"
            width="211"
            height="133"
          />
          {/* navメニュー */}
          <ul className="w-full lg:w-auto flex flex-wrap lg:flex-nowrap lg:flex-row lg:align-center lg:content-between font-bold whitespace-nowrap">
            {items.map((item, i) => {
              return (
                <li
                  key={`footer-item-${i}`}
                  className="mb-8 lg:mb-0 w-1/2 lg:w-auto lg:mr-6 last:mr-0"
                >
                  <a href={item.url}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          {/* お問い合わせ */}
          <a href="#" className="btn-primary">
            <div>お問い合わせ</div>
            <Image src="red_arrow.svg" alt="red_arrow" width="16" height="15" />
          </a>
        </div>
        {/* コピーライト */}
        <div className="bg-pink pl-6 pb-5 lg:pl-4 lg:pb-12">
          <p className="text-xs font-bold">
            Copyright © Flyingcat LLC All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
