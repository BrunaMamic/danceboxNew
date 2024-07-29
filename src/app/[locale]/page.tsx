import { getTranslations } from "next-intl/server";
import { Locale } from "@formatjs/ecma402-abstract/types/core";
import Hero from "@/components/hero";
import { About } from "@/components/about";
import { Events } from "@/components/events";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Events />
    </>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}
