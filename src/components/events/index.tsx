import React from "react";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

export const Events = () => {
  const t = useTranslations("events");
  const images = [
    {
      url: "assets/images/events/diplomski.jpeg",
      alt: "event",
      title: 'Ines Mamić',
      text: 'Naša umjetnička voditeljica i glavna koreografkinja Ines Mamić 26.02.2026. na @institut_za_umetnicku_igru u Beogradu obranila je svoj diplomski rad na temu "Utjecaj digitalizacije i društvenih mreža na plesnu umjetnost" te službeno stekla titulu Dramskog i audio vizualnog plesnog umjetnika.',

      href: "https://www.facebook.com/PlesniStudioDanceBox/posts/pfbid0tHXuYWLPtVvP1jydXwH2kpHhu9e6YcVxmkNA1F4jT8QADTZP3hLaLW76jNDHSRYzl",
    },
    {
      url: "assets/images/events/slovenija.jpeg",
      alt: "event",
      title: 'Vikend u Sloveniji',
      text: 'Vikend smo proveli u Sloveniji na natjecanju u besprijekornoj organizaciji @mdflukecopen\n' +
          'Predstavili smo se s dva tima.\n' +
          'Dječjom show  formacijom i juniorskom show grupom, te jednim modern solom.\n' +
          'Pored odličnih rezultata imali smo i kvalitetno timsko druženje pa ćemo sigurno ponoviti ovakva putovanja.\n',

      href: "https://www.facebook.com/reel/877246458433728",
    },
    {
      url: "assets/images/events/zaDjecu.jpeg",
      alt: "event",
      title: 'DanceBox za djecu',
      text: 'Hvala na pozivu @splitzadjecu  kao i izvrsnoj organizaciji.\n' +
          'Bio nam je gušt sudjelovati.\n' +
          '@gradsplit_st',

      href: "https://www.facebook.com/PlesniStudioDanceBox/posts/pfbid02Bi48dnu26PC7PXFu3EWkbudpK3yKvKtiQLxcN5zbVfxhpGMuQ8NpvLXx9syCt7t8l",
    },
    {
      url: "assets/images/events/flashmob.jpeg",
      alt: "event",
      title: 'Flashmob u Splitu',
      text: 'Preko 500 sudionika na do sada najvećem flashmobu u Splitu u svrhu najave utrke Race for the cure koja će se održati za tjedan dana. 05.10.2025 sa startom u 11 sati na splitskoj Rivi. Na čast nam je što smo bili dio velike splitske priče i pomogli na ovakav način u borbi protiv raka.',

      href: "https://www.facebook.com/PlesniStudioDanceBox/posts/pfbid02dQ1QoZ79zwXuL9qoppwf8h6ssdRENNrU1MBHbAYYYjdHAfHSawjw6htQ3JVLQLfVl",
    }
  ];

  return (
    <div className={styles.container} id="events">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{t("title")}</h1>
        <div className={styles.grid}>
          {images.map((item, index) => (
            <Link
              href={item.href}
              key={`item_${index}`}
              target="_blank"
              rel="noopener noreferrer">
              <div className={styles.project}>
                <img src={item.url} alt="Project" className={styles.image} />
                <div className={styles.text}>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
