import Link from 'next/link';
import React from 'react';

import { Jersey_10 } from 'next/font/google';
import ScrollProgressBar from '@/components/ScrollProgressBar';
import Github from '@/components/icon/Github';

const jersey10 = Jersey_10({
  subsets: ['latin'], // 사용할 폰트 집합
  weight: ['400'], // 사용할 폰트 두께
  display: 'swap', // 폰트 다운로드 전까지 기본 폰트 표시(성능 최적화)
  adjustFontFallback: false,
});

const Header = () => {
  return (
    <header className={'fixed w-full px-4 flex justify-center'}>
      <div
          className={
            'flex w-full justify-between max-w-[1200px] h-[64px] items-center'
          }
      >
        <Link href={'/'}>
          <h1 className={`text-2xl ${jersey10.className}`}>SHINMH.DEV</h1>
        </Link>
        <button>
          <Link href="https://github.com/d5br5" target="_blank">
            <Github className="size-[1.2rem]"/>
          </Link>
        </button>
      </div>
      <ScrollProgressBar/>
    </header>
  );
};

export default Header;
