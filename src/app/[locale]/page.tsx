"use client";

import { GridBackground } from "@/components/shared/GridBackground";
import Header from "@/components/shared/Header";
// import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight";
import HostVideocall from "@/features/videoCall/components/HostVideoCall";
import JoinVideocall from "@/features/videoCall/components/JoinVideoCall";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <div className="relative max-h-screen w-full overflow-hidden px-4 sm:px-8">
      <Spotlight className="-right-12" />
      <div className="z-50 flex w-full justify-center">
        <Header />
      </div>
      <GridBackground className="relative flex flex-col items-center justify-center pb-8">
        <div
          className={cn(
            "relative flex h-min w-fit flex-col flex-nowrap content-center items-center justify-center gap-10 overflow-visible rounded-full border bg-black/20 decoration-clone p-px transition duration-500 hover:bg-black/10 dark:bg-white/20 sm:-mt-24",
          )}
        >
          <div
            className={`z-10 w-auto rounded-[inherit] bg-black px-4 py-2 text-center text-xs font-semibold text-primary-foreground text-white dark:text-muted-foreground sm:text-sm ${
              locale === "ar" ? "font-noto" : "font-inter"
            }`}
          >
            {t("hero.subtitle")}
          </div>
        </div>
        <div className="relative flex flex-col items-center gap-16">
          <div className="flex flex-col items-center sm:gap-2">
            <h1
              className={`relative z-20 max-w-[1015px] bg-gradient-to-b from-neutral-700 to-neutral-900 bg-clip-text py-8 text-center text-4xl font-bold leading-[55px] text-transparent dark:from-neutral-200 dark:to-neutral-500 sm:text-7xl sm:leading-[100px] ${
                locale === "ar" ? "font-noto leading-loose" : "font-inter"
              }`}
            >
              {t("hero.title")}
            </h1>
            <p
              className={`text-md max-w-[1000px] bg-gradient-to-b from-neutral-800 to-neutral-900 bg-clip-text text-center text-sm font-semibold leading-5 text-secondary-foreground dark:from-neutral-200 dark:to-neutral-500 sm:text-lg sm:leading-8 ${
                locale === "ar" ? "font-noto" : "font-inter"
              }`}
            >
              {t("hero.description")}
            </p>
          </div>
          <div className="flex gap-6">
            <HostVideocall />
            <JoinVideocall />
          </div>
        </div>
        <span className="absolute bottom-0 py-4 text-xs text-muted">
          &copy; {t("hero.rights")}
        </span>
      </GridBackground>
    </div>
  );
}
