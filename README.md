## How to install
- git clone git url
- yarn install
- yarn run dev

## Environment variables
- in the root of the folder, create a file env.local
- DEEZER_API = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com'

## How to contribute, checkout and rebase
- git checkout main branch (git checkout main)
- git checkout -b NewBrachName
- after working on the new branch, do git checkout main, git pull (for up to date code)
- git checkout to new branch again(without the -b)
- git rebase -XOurs main
- git push -f
- 
## Features implement
- search artist
- play music
- display top tracks
- display album
- add favpurites album to local storage
- and many more

## libraries
- Axios
- nextjs
- redux tool kit
- tailwind
- typescript

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
