import Slider from 'react-slick';
import Cards from './Cards';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from './slider.module.css';

export default function CustomSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const cardData = [
    {
      title: "Formação e Conhecimento:",
      content: [
        "Ensino Médio Completo,", 
        "Curso Técnico em Informática,", 
        "Curso de Programador FullStack em RPV, Senai"
      ]
    },
    {
      title: "Atribuições no Emprego Atual (Bevile Hotel):",
      content: [
        "Atendimento ao público",
        "Gerenciamento de Reservas",
        "Resolução de Problemas",
        "Manutenção de Sistemas"
      ]
    },
    {
      title: "Experiências Anteriores:",
      content: [
        "Técnico em Infraestrutura de TI (Atual)",
        "Assistente Administrativo (Singer do Brasil)"
      ]
    },
    {
      title: "Competências:",
      content: [
        "Comunicação interpessoal",
        "Gestão de tempo",
        "Proficiência em TI",
        "Flexibilidade e adaptabilidade"
      ]
    },
    {
      title: "Adicional:",
      content: "Disponível para estabelecer contatos e alternar com maior frequência parcerias educacionais e em projetos extracurriculares"
    }
  ];

  return (
    <Slider {...settings} className={styles.slider}>
      {cardData.map((card, index) => (
        <div key={index}>
          <Cards title={card.title} content={card.content} />
        </div>
      ))}
    </Slider>
  );
}

