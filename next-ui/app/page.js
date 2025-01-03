import Image from "next/image";
import Link from 'next/link';
import HelloMsg from "./ui/HelloMsg";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <HelloMsg/>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="page-logo"
          src="/infocryp.svg"
          alt="Page logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <ol className="mb-2">
            A simple, basic but{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              informative page
            </code>
            .
          </ol>
          <ol>Start exploring by finding:</ol>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="/topcap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert animate-pulse"
              src="/bitcoin.svg"
              alt="Bitcoin logomark"
              width={20}
              height={20}
            />
            Top trending Crypto
          </Link>
          <Link
            className="rounded-full border border-solid border-neon-carrot-900 dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 gap-2"
            href="/news"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert animate-ping"
              src="/news.svg"
              alt="News logomark"
              width={10}
              height={10}
            />
            What is hot on the news
          </Link>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Link
          className="flex items-center gap-2 hover:underline  hover:underline-offset-4 decoration-orange-400"
          href="https://www.simplilearn.com/tutorials/blockchain-tutorial/what-is-cryptocurrency"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/market.svg"
            alt="Market icon"
            width={16}
            height={16}
          />
          Learn more about Cryptocurrency
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4 decoration-orange-400"
          href="https://online.stanford.edu/how-does-blockchain-work"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/blockchain.svg"
            alt="Blockchain icon"
            width={16}
            height={16}
          />
          Technology behind blockchain
        </Link>
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a> */}
      </footer>
    </div>
  );
}
