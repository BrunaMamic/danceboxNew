import styles from "./styles.module.scss";

const images = [
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0003.webp",
    alt: "Two cups of coffee being made from a coffee machine.",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/009.webp",
    alt: "Food with decorated plate",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/001.webp",
    alt: "Coffe served on a table",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
  {
    url: "https://cdn.dotyourspot.com/images/revelin-bistro/Home/TwoRowSlideShow/0005.webp",
    alt: "Breakfast",
  },
];

export const ImageGrid = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className={styles[`image_${index + 1}`]}>
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
