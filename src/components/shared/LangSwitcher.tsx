"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useLocale, useTranslations } from "next-intl";
import { Link, routing } from "@/i18n/routing";
import Image from "next/image";

export function LangSwitcher() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const locale = useLocale() || [];
  const locales = routing.locales;
  const t = useTranslations("HomePage");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="flex cursor-pointer items-center hover:underline">
          <span className="font-noto text-sm">
            {t(`header.langswitch.${locale}`)}
          </span>
          <Image
            src={`/flags/${locale}.png`}
            alt={`${locale} flag`}
            width={24}
            height={24}
            className="ml-2"
          />
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="mt-2 w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {locales.map((locale) => (
                <Link href={`/`} locale={locale} key={locale}>
                  <CommandItem
                    value={locale}
                    onSelect={(currentValue: React.SetStateAction<string>) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                    className=""
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === locale ? "opacity-100" : "opacity-0",
                      )}
                    />
                    <Image
                      src={`/flags/${locale}.png`}
                      alt={`flag`}
                      width={24}
                      height={24}
                    />
                    <span className="ml-4 font-noto">
                      {t(`header.langswitch.${locale}`)}
                    </span>
                  </CommandItem>
                </Link>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
