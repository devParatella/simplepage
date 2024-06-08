import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './leftsidebar.module.css';

export default function LeftSidebar() {
    return (
        <div className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1625535069654-cfeb8f829088?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&authuser=0&hl=pt-BR" alt="Top Image" className={styles.topImage} />
            <img src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=0&hl=pt-BR" alt="Center Image" className={styles.centerImage} />
            <h1 className={styles.title}>Marcos Paratella Júnior</h1>
            <p className={styles.text1}>Desenvolvedor FullStack</p>
            <button className={styles.buttonGit}>
                <a href="https://github.com/DevParatella" className={styles.linkGit}>
                    <FaGithub className={styles.icon} /> DevParatella
                </a>
            </button>
            <button className={styles.buttonEdin}>
                <a href="https://github.com/DevParatella" className={styles.linkedin}>
                    <FaLinkedin className={styles.icon} /> DevParatella
                </a>
            </button>
        </div>
    );
}
