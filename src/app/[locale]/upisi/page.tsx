import { getTranslations } from "next-intl/server";
import Hero from "@/components/hero";
import { About } from "@/components/about";
import { Events } from "@/components/events";
import { Disciplines } from "@/components/disciplines";
import { Teachers } from "@/components/teachers";
import { ImageGrid } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { Map } from "@/components/maps";
import Navbar from "@/components/navbar";
import { Upisi } from "@/components/upisi";
import { Dob } from "@/components/upisi/dob";

export default function Home() {
  return (
    <>
      <Navbar />
      <Upisi />
      <Dob />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}
