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
    // 雲
    gsap.fromTo(
      '.parallax-footer-crowd',
      {
        yPercent: isDesktop ? -50 : -30,
      },
      {
        yPercent: isDesktop ? 62 : 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-footer-trigger',
          start: 'top bottom',
          end: 'bottom bottom',
          scrub: true,
        },
      }
    );
  });

  return (
    <div className="w-full pt-10 lg:pt-40  parallax-footer-trigger">
      {/* 雲 */}
      <div className="relative parallax-footer-crowd">
        <Image
          src="/footer_crowd.png"
          alt="FOOTER CLOUD"
          className="w-full"
          width="300"
          height="300"
        />
        {/* spacer */}
        <div className="absolute -bottom-6 lg:-bottom-8 right-0 left-0 -z-10 w-full h-full flex items-end">
          <div className="bg-pink h-10 lg:h-24 w-full"></div>
        </div>
      </div>
      {/* フッターコンテンツ */}
      <div className="parallax-footer-base w-full bg-pink pt-10 lg:pt-52">
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
