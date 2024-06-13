This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- local `$ yarn dev` http://localhost:3000
- build `$ yarn build`
- start `$ yarn start` http://localhost:3001

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Responsive

- mobile first で実装する
- taiwind の default に従う
  https://tailwindcss.com/docs/screens

- sp, tb ... 1024px 未満
- pc ... 1024px 以上 (lg: を使用)

## Container

- taiwind の .container は使用しない。
  https://tailwindcss.com/docs/container

- sp, tb ... max-width: 768px (max-w-3xl)
- pc ... max-width: 1280px (max-w-7xl)
  （作成しながら様子を見て変更）

## Animation

- Javascript ライブラリの gsap を使用
- Docs ... https://gsap.com/docs/v3/

## Font

- 一部 Adobe Font を使用
- ローカルに `.env.local` を用意し、`NEXT_PUBLIC_ADOBE_FONTS_KIT_ID` に `jqx6his` の値を代入する

## Modal

- `react-modal` を使用
- Docs ... https://github.com/reactjs/react-modal
