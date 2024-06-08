import styles from './maincontent.module.css';

export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <img src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=0&hl=pt-BR" alt="Small Image" className={styles.smallImage} />
      <h1 className={styles.mainTitle}>Marcos Paratella</h1>
      <h2 className={styles.subtitle}>Programador FullStack</h2>
      <h1 className={styles.sectionTitle}>Título de Seção</h1>
      <p className={styles.paragraph}>Estou avançando de forma sólida e contínua na área 
        de Análise e Desenvolvimento de Sistemas da Informação, com o objetivo de me tornar um 
        programador Fullstack ou Backend, e talvez até um acima da média. A paixão por 
        resolver problemas e criar soluções inovadoras é o motor que impulsiona meu 
        crescimento e aprimoramento constantes. Acredito que, mesmo aos 47 anos, é 
        possível reinventar-se e buscar novos horizontes na carreira, especialmente em um 
        campo tão dinâmico e inovador como a programação..</p>
      <a href="#" className={styles.link}>Repositórios</a>
      <a href="#" className={styles.link}>@UltimoProjeto</a>
      <hr className={styles.divider} />
      <h1 className={styles.bottomTitle}>Título Inferior</h1>
      <img src="/path/to/your/image4.jpg" alt="Bottom Image" className={styles.bottomImage} />
    </div>
  );
}
