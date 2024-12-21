// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  //   DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLocale, useTranslations } from "next-intl";

export default function HostVideocall() {
  const locale = useLocale();
  const t = useTranslations("HomePage");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className={`bg-transpared rounded-full border border-primary px-10 py-2 font-semibold transition hover:bg-primary/90 hover:text-secondary ${locale === "ar" ? "font-noto" : "font-inter"}`}
        >
          {t("hero.ctajoin_btn")}
        </button>
      </DialogTrigger>
      <DialogContent className="rounded-md p-6 shadow-lg sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Videocall</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="my-2">
          <Input placeholder="Enter room key.." />
        </div>
        <DialogFooter>
          <Button type="submit">Join</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
