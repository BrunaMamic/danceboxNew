import { getTranslations } from "next-intl/server";
import { Locale } from "@formatjs/ecma402-abstract/types/core";
import Hero from "@/components/hero";
import { About } from "@/components/about";
import { Events } from "@/components/events";
import { Disciplines } from "@/components/disciplines";
import { Teachers } from "@/components/teachers";
import { ImageGrid } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { Map } from "@/components/maps";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Events />
      {/* <Disciplines /> */}
      <Teachers
        image1="https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0003.webp"
        image2="https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0003.webp"
      />
      <Teachers
        image1="https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0003.webp"
        image2="https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0003.webp"
        reverse
      />
      <ImageGrid />
      <Map />

      <Footer />
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
