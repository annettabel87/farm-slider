import Slider from "./(components)/slider/Slider";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Полезные материалы</h1>
      <p className={styles.textBold}>
        Собрали для вас полезные исследования схемы кормления и другие
        материалы, которые пригодятся для лучших результатов на вашем хозяйстве
      </p>
      <Slider />
    </main>
  );
}
