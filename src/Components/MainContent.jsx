import styles from './maincontent.module.css';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <img src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=0&hl=pt-BR" alt="Small Image" className={styles.smallImage} />
      <h1 className={styles.mainTitle}>Título Principal</h1>
      <h2 className={styles.subtitle}>Subtítulo</h2>
      <h1 className={styles.sectionTitle}>Título de Seção</h1>
      <p className={styles.paragraph}>Este é um parágrafo com algum texto.</p>
      <a href="#" className={styles.link}>Link 1</a>
      <a href="#" className={styles.link}>Link 2</a>
      <hr className={styles.divider} />
      <h1 className={styles.bottomTitle}>Título Inferior</h1>
      <img src="/path/to/your/image4.jpg" alt="Bottom Image" className={styles.bottomImage} />
    </div>
  );
}
