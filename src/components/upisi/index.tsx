import styles from "./styles.module.scss";

export const Upisi = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>
          UPISI NOVIH ČLANOVA ZA SEZONU 2026/2027
        </div>
        <div className={styles.content}>
          <span>DanceBox i ove godine vrši upise novih članova.</span>
          <span>
            Priključiti nam se možete tijekom cijele godine, ali svakako
            preporučamo početak sezone kada svi plesači startaju s treninzima.
          </span>
          <span>
            Temeljem popunjenog prijavnog obrasca povratno ćemo Vas kontaktirati
            te obavijestiti o terminima treninga.{" "}
            <a href="https://forms.gle/aX2bQwYoFRiHKXyH6" target="_blank">
              Prijavni obrazac
            </a>
          </span>
          <span>
            Imate mogućnost jednog do dva probna treninga, nakon čega možete
            postati punopravni član popunjavanjem obrasca upisnice koja će vam
            biti dostavljena.
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
            seniorske dobi. Moguće je i priključiti nam se u bilo kojoj kasnijoj
            dobi kao početnik i pobrinuti ćemo se da zavolite ples i sve ono što
            on nosi sa sobom.
          </span>
        </div>
      </div>
    </div>
  );
};
