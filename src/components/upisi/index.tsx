import styles from "./styles.module.scss";

export const Upisi = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>UPISI U SEZONU 2025.</div>
        <div className={styles.content}>
          <span>
            Studio svaku godinu na početku sezone vrši upise novih članova koji
            se priključuju već postojećim grupama ili se otvaraju nove grupe
            ukoliko su postojeće popunjene. Na osnovu prikupljenih podataka
            temeljem popunjenog obrasca za upis biti će te povratno kontaktirani
            te možete jednom do dva puta napraviti probne treninge nakon čega će
            te odlučiti dali će te nam se priključiti.
          </span>
          <span>
            Članom studija postaje se regularno popunjenim registracijskim
            listićem ( dostupan na našoj stranici ili direktno u studiju ) i
            uplaćenom prvom članarinom.
          </span>
          <span>
            Naš program rada s djecom i mladima bazira se na usvajanju tehnike
            jazz baleta, modernog i suvremenog plesa, te baletom kao bazičnom
            tehnikom za sve plesne discipline. Program je prilagođen dobnim
            skupinama i njihovim intelektualnim i fizičkim sposobnostima te se
            shodno njima i primjenjuje.
          </span>
          <span>
            Iako se deklariramo kao studio koji rado odlazi na plesna
            natjecanja, naš program nudi i samo rekreativno vježbanje i plesanje
            koje ostaje u okvirima koje polaznik želi.
          </span>
          <span style={{ fontWeight: "500" }}>
            Niže navedeno podrazumijeva put našeg polaznika od dječje do
            seniorske dobi. Naravno da je moguće priključiti nam se u bilo kojoj
            dobi kao totalni početnik i pobrinuti ćemo se da zavolite ples i sve
            ono što on nosi sa sobom.
          </span>
          <span>
            Ukoliko nam se želite priključiti popunite{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSchblYdvYwaNuz_2Nofjk3l3eSSeT-pa6OF_xn7T02TDvS-hg/viewform"
              target="_blank"
            >
              obrazac
            </a>{" "}
            i kontaktirati ćemo Vas vrlo skoro.
          </span>
        </div>
      </div>
    </div>
  );
};
