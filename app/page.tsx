import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex sm:min-h-[88vh] min-h-[88vh] flex-col items-center justify-center text-center px-2 py-8">
        <Link
          href="https://github.com/avalynndev/memer.ts"
          target="_blank"
          className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4"
        >
          Follow along on GitHub{" "}
          <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
        </Link>
        <h1 className="text-3xl font-bold mb-4 sm:text-7xl">Memer.ts</h1>
        <p className="mb-8 sm:text-xl max-w-[800px] text-muted-foreground">
          Memer.ts is a powerful and flexible npm package designed for easy
          image manipulation in TypeScript and JavaScript.
        </p>
        <div className="flex flex-row items-center gap-5">
          <Link
            href={`/docs/${page_routes[0].href}`}
            className={buttonVariants({ className: "px-6", size: "lg" })}
          >
            Get Stared
          </Link>
          <Link
            href="https://discord.gg/QhthacNnN6"
            className={buttonVariants({
              variant: "outline",
              className: "px-6",
              size: "lg",
            })}
          >
            Discord
          </Link>
        </div>
        <span className="flex flex-row items-center gap-2 text-zinc-400 text-md mt-7 -mb-12 max-[800px]:mb-12">
          <TerminalIcon className="w-4 h-4 mr-1" /> ~ npm install memer.ts
        </span>
      </div>
      <Features />
      <FAQ />
    </>
  );
}
