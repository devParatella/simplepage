import styles from './maincontent.module.css';
import habilits from '../assets/IMG/habilits2.png';
export default function MainContent() {
  return (
    <div className={styles.mainContent}>
      <div className={styles.sectionHead}>
        <img src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png?authuser=0&hl=pt-BR" alt="Small Image" className={styles.smallImage} />
        <div className={styles.mainTitle}>
          <h1>Marcos Paratella</h1>
          <h2 className={styles.subtitle}>Programador FullStack</h2>
        </div>
      </div>
      <h1 className={styles.sectionTitle}>Sobre</h1>
      <p className={styles.paragraph}>Estou avançando de maneira sólida e contínua na área
        de Análise e Desenvolvimento de Sistemas da Informação, com o objetivo de me tornar um
        programador Fullstack ou Backend, e talvez até um acima da média. A paixão por
        resolver problemas e criar soluções inovadoras é o motor que impulsiona meu
        crescimento e aprimoramento constantes. Acredito que, mesmo aos 47 anos, é
        possível reinventar-se e buscar novos horizontes na carreira, especialmente em um
        campo tão dinâmico e inovador como a programação.</p>
      <a href="https://github.com/devParatella?tab=repositories" target='aboutblanc' className={styles.link}>Repositórios</a>
      <a href="https://github.com/devParatella/simplepage" target='aboutblanc' className={styles.link}>@Ultimo projeto</a>
      <hr className={styles.divider} />
      <h1 className={styles.bottomTitle}>Mais informações</h1>
      <div className={styles.secondContent}>
        <img src={habilits} alt="Bottom Image" className={styles.bottomImage} />
        <section className={styles.sectionHabilits}>
          <div className={styles.cardHbilits}>
            <h3>Formação e conhecimento:</h3>
            <p>
              Segundo grau completo,
              Técnico de Informática,
              Técnico Eletricista,
              Cursando Programador FullStack RPV, Senai
            </p>
          </div>
          <div className={styles.cardHbilits}>
            <h3>Atribuições no atual emprego  ( Bevile Hotel ):</h3>
            <p>
              Atendimento a hóspedes
              Gerenciamento de reservas
              Suporte técnico
              Manutenção de sistemas e segurança da informação
              Marketing digital
              Resolução de problemas e reclamações
            </p>
          </div>
          <div className={styles.cardHbilits}>
            <h3>Experiências anteriores:</h3>
            <p>
              Técnico em Infraestrutura de TI (Ainda atuando)
              Eletricista Técnico Automotivo e de Refrigeração
              Assistente Administrativo
            </p>
          </div>
          <div className={styles.cardHbilits}>
            <h3>Competências:</h3>
            <p>
              Comunicação Interpessoal
              Gestão de Tempo
              Conhecimentos Técnicos: Proficiente em TI
              Organização e Administração: Manutenção de registros precisos e administração eficiente
              Flexibilidade e Adaptabilidade
            </p>
          </div>
          <div className={styles.cardHbilits}>
            <h3>Adicional:</h3>
            <p>
              Disponível para estabelecer mais contato e alternar
              com maior frequência
              parcerias educacionais e em projetos extracurriculares.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
