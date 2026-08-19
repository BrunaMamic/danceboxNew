import { getTranslations } from "next-intl/server";
import Navbar from "@/components/navbar";
import { Upisi } from "@/components/upisi";

export default function Home() {
  return (
    <>
      <Navbar />
      <Upisi />
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
