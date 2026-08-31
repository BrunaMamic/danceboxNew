import styles from "./styles.module.scss";

const FORM_URL = "https://forms.gle/aX2bQwYoFRiHKXyH6";

const program = [
  {
    title: "Mini kadeti",
    content:
      "Uz jačanje primarne muskulature kroz igru i zabavne vježbe veliku pozornost dajemo koordinaciji i stabilnosti. Kada dijete stekne osnovne fizičke predispozicije i spremno je za viši stupanj plesne aktivnosti, učimo ga osnovnim baletnim i gimnastičkim elementima. Program uključuje i rad na ritmičnosti i muzikalnosti kroz jednostavne koreografije prilagođene njihovoj dobi.",
  },
  {
    title: "Kadeti",
    content:
      "Osvještavanjem funkcionalnosti muskulature djeca ove dobi već su spremna za bazičnu plesnu tehniku kao što su pirueti, osnovni skokovi i kretanje kroz prostor. Koreografije su glazbeno i ritmički kompleksnije te se od njih očekuje aktivno sudjelovanje u stvaranju rezultata treninga.",
  },
  {
    title: "Juniori i seniori",
    content:
      "Ove dobne skupine već imaju usvojenu određenu razinu plesne tehnike te su fizički spremne za zahtjevne plesne programe.",
  },
  {
    title: "Rekreativna grupa",
    content:
      "Dobna skupina koja podrazumijeva starije od 30 godina željne treninga uz glazbu. Trening obuhvaća istezanje, snagu i izdržljivost, koordinaciju, plesnu tehniku te lagane i zabavne koreografije.",
  },
];

const groups = [
  { title: "Plesni vrtić", years: ["2022", "2023"] },
  { title: "Mini kadeti", years: ["2021", "2020"] },
  { title: "Kadeti 2", years: ["2019", "2018"] },
  { title: "Kadeti 1", years: ["2017", "2016"] },
  { title: "Juniori 2", years: ["2015", "2014"] },
  { title: "Juniori 1", years: ["2013", "2012", "2011"] },
  { title: "Seniori", years: ["2010 i niže"] },
];

export const Upisi = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Sezona 2026 / 2027</p>
          <h1 className={styles.mainTitle}>Upisi novih članova</h1>
          <p className={styles.lead}>
            DanceBox i ove godine vrši upise novih članova. Priključiti nam se
            možete tijekom cijele godine, ali svakako preporučamo početak sezone
            kada svi plesači startaju s treninzima.
          </p>
        </header>

        <section className={styles.content}>
          <p>
            Ispunite{" "}
            <a className={styles.inlineLink} href={FORM_URL} target="_blank">
              prijavni obrazac
            </a>{" "}
            i povratno ćemo Vas kontaktirati te obavijestiti o terminima
            treninga.
          </p>
          <p>
            Imate mogućnost jednog do dva probna treninga, nakon čega možete
            postati punopravni član popunjavanjem obrasca upisnice koja će Vam
            biti dostavljena.
          </p>
          <p>
            Naš program rada s djecom i mladima bazira se na usvajanju tehnike
            jazz baleta, modernog i suvremenog plesa, te baletom kao bazičnom
            tehnikom za sve plesne discipline. Program je prilagođen dobnim
            skupinama i njihovim intelektualnim i fizičkim sposobnostima te se
            shodno njima i primjenjuje.
          </p>
          <p>
            Iako se deklariramo kao studio koji rado odlazi na plesna
            natjecanja, naš program nudi i samo rekreativno vježbanje i plesanje
            koje ostaje u okvirima koje polaznik želi.
          </p>
          <p className={styles.emphasis}>
            Niže navedeno podrazumijeva put našeg polaznika od dječje do
            seniorske dobi. Moguće nam se priključiti i u bilo kojoj kasnijoj
            dobi kao početnik — pobrinut ćemo se da zavolite ples i sve ono što
            on nosi sa sobom.
          </p>
          <a className={styles.cta} href={FORM_URL} target="_blank">
            Ispuni prijavni obrazac
          </a>
        </section>

        <section className={styles.program}>
          {program.map((item) => (
            <article className={styles.programItem} key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </article>
          ))}
        </section>

        <section className={styles.groups} id="program">
          <h2 className={styles.groupsTitle}>Dobne skupine po godištima</h2>
          <table className={styles.groupsTable}>
            <thead>
              <tr>
                <th scope="col">Skupina</th>
                <th scope="col">Godište</th>
              </tr>
            </thead>
            <tbody>
              {groups.map((group) => (
                <tr key={group.title}>
                  <th scope="row">{group.title}</th>
                  <td>{group.years.join(" · ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};
