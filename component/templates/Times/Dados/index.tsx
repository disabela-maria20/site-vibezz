"use client"

import { Title } from "@/component/atoms";
import { Footer, Slide } from "@/component/molecules";
import { Header } from "@/component/organisms";
import { Metadata } from "next";
import { Fade } from "react-awesome-reveal";
import Style from "./dados.module.scss";
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

export const MERCADO = [
  {
    title: 'Inteligência de Mercado',
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla eleifend, imperdiet arcu sed, sollicitudin tellus. Pellentesque augue mauris, sollicitudin quis ante a, pretium posuere est. ",
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
      {
        id: 4,
        title: "Análise",
        img: "/images/fotos/analise.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 5,
        title: "Coleta",
        img: "/images/fotos/coleta.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 5,
        title: "Transformação",
        img: "/images/fotos/transformação.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 6,
        title: "Visualização",
        img: "/images/fotos/visualização.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }
]

function PageMarketing() {
  return <>
    <Header />
    <section className={Style.times}>
      <Title>Dados</Title>

      <div className={Style.Mercado}>
        <div className='container'>
          <div className={Style.gridMercado}>
            {MERCADO.map((data, i) => (
              <div key={i}>
                <Fade direction='left' delay={1} cascade>
                  <img src={data.img} />
                </Fade>
              </div>
            ))}

            {MERCADO.map((data, i) => (
              <div key={i}>
                <Fade direction='right' delay={1} cascade damping={0.1}>
                  <h2>{data.title}</h2>
                  <p>{data.text}</p>
                </Fade>
              </div>
            ))}
          </div>
        </div>
        <Fade direction='up'>
          {MERCADO.map((data) => (
            <div key={data.text} className={Style.bgMercado}>
              <div className="container">
                <Slide.Content className={Style.cardFlex} swiperOptions={SwiperOptions}>
                  {data.data.map((data) => (
                    <div className={Style.card} key={data.id}>
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
