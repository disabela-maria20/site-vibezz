"use client"

import { Title } from "@/component/atoms";
import { Footer, Slide } from "@/component/molecules";
import { Header } from "@/component/organisms";
import { Metadata } from "next";
import { Fade } from "react-awesome-reveal";
import Style from "./marketing.module.scss";
import { Navigation, Pagination } from "swiper/modules";

export const metadata: Metadata = {
  title: 'Times de Marketing | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

const SwiperOptions = {
  slidesPerView: 1,
  pagination: false,
  navigation: false,
  modules: [Navigation, Pagination],
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
}

export const MARKETING = [
  {
    title: 'Marketing',
    text: "<p>Nossa vertical de marketing está preparada para ter uma imersão completa em múltiplos segmentos e negócios, mapeando o propósito do cliente, bem como seus indicadores-chave, para assim conectar a estratégia de comunicação e como ela e sua operação serão efetivas para o resultado do nosso cliente.</p><p>Com metodologias ágeis e abordando diferentes conceitos de growth, buscamos aplicar, testar e compreender todas as nossas iniciativas para buscar um ciclo contínuo de melhorias em todas as frentes.</p>",
    img: "/images/fotos/marketing.png",
    data: [
      {
        id: 0,
        title: "Atendimento",
        img: "/images/fotos/atendimento.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 1,
        title: "Criação",
        img: "/images/fotos/criação.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        title: "Conteúdo",
        img: "/images/fotos/conteudo.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 3,
        title: "Mídia",
        img: "/images/fotos/midia.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }, 

    ]
  }
]

function PageMarketing() {
  return <>
    <Header />
    <section className={Style.times}>
      <Title>marketing</Title>
      <div className={Style.Marketing}>
        <div className='container'>
          <div className={Style.gridMarketing}>
            {MARKETING.map((data, i) => ( 
                <div key={i}>
                  <Fade direction='left' delay={1} cascade>
                    <img src={data.img} />
                  </Fade>
                </div>
            ))}
            {MARKETING.map((data, i) => (
              <div key={i}>
                <Fade direction='right' delay={1} cascade damping={0.1}>
                  <h2>{data.title}</h2>
                  <div>
                    <p dangerouslySetInnerHTML={{__html: data.text}}/>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>
        <Fade direction='up'>
          {MARKETING.map((data) => (
            <div key={data.text} className={Style.bgMarketing}>
              <div className="container">
                <Slide.Content className={Style.cardFlex} swiperOptions={SwiperOptions}>
                  {data.data.map((data, i) => (
                    <div className={Style.card} key={i}>
                      <div className={Style.img}>
                        <img src={data.img} />
                      </div>
                      <div className={Style.text}>
                        <h3>{data.title}</h3>
                        <p>{data.text}</p>
                      </div>
                    </div>
                  ))}
                </Slide.Content>
              </div>
            </div>
          ))}
        </Fade>
      </div>

    </section>
    <Footer />
  </>
}
export default PageMarketing
