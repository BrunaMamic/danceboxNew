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
import { text } from "stream/consumers";

export default function Home() {
  const text1 = [
    {
      text: "Barbara Mamic",
    },
    {
      text: "Barbara je odrasla u Splitu gdje je, od osnutka Dance Box-a pa do odlaska u Zagreb na studij, sudjelovala u radu studija kao plesač, a sada je posvećena plesno-pedagoškom radu i koreografiranju.",
    },
    {
      text: "Po završetku Akademije dramske umjetnosti na Odsjeku za suvremeni ples (nastavnički smjer) odlazi u Nizozemsku na stručnu praksu u Kraljevski Konzervatorij gdje je kasnije pozvana i kao službena zamjena.",
    },
    {
      text: "Trenutno radi u Umjetničkoj školi Franje Lučića u Velikoj Gorici kao pedagog suvremenog plesa i ritmike u osnovnoj i srednjoj školi. ",
    },
    {
      text: "Stekla je titulu suca Hrvatskog plesnog saveza 2023. godine.",
    },
  ];

  const text2 = [
    {
      text: "Ines Mamic",
    },
    {
      text: "Barbara je odrasla u Splitu gdje je, od osnutka Dance Box-a pa do odlaska u Zagreb na studij, sudjelovala u radu studija kao plesač, a sada je posvećena plesno-pedagoškom radu i koreografiranju.",
    },
    {
      text: "Nakon 18 godina aktivnog rada u Hrvatskom narodnom kazalištu u Splitu odlučuje se posvetiti radu s djecom i mladima.",
    },
    {
      text: "U posljednjih 30 godina obrazovala je sedam generacija plesača od kojih su neki danas profesionalni plesači, pedagozi i koreografi.",
    },
    {
      text: "Članica je Hrvatskog udruženja profesionalnih baletnih umjetnika, te nacionalni sudac za discipline umjetničkih plesova.",
    },
  ];
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Teachers
        image1="/assets/images/teachers/ines/ines1.webp"
        image2="/assets/images/teachers/ines/ines1.2.webp"
        text={text2}
      />
      <Teachers
        image1="/assets/images/teachers/barbara/barbara2.webp"
        image2="/assets/images/teachers/barbara/barbara1.webp"
        reverse
        text={text1}
      />

      <Disciplines />
      <Events />

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
