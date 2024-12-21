"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

export default function StartVideoCallDialog() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <HoverBorderGradient
          className={`font-sans text-sm font-semibold sm:text-lg ${
            locale === "ar" ? "font-noto" : "font-inter"
          }`}
        >
          {t("hero.ctabtn")}
        </HoverBorderGradient>
      </DialogTrigger>
    </Dialog>
  );
}
