"use client";

import { useLocale } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";

export default function useUpdateParams() {
  const locale = useLocale();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const updateParams = (updates: Record<string, string>) => {
    Object.entries(updates).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`${locale && locale}?${params.toString()}`); // Push new params to URL
  };

  return updateParams;
}
