/* eslint-disable @next/next/no-img-element */
"use client"

import { Title } from "@/component/atoms";
import { Footer, Slide } from "@/component/molecules";
import { Header } from "@/component/organisms";
import { Metadata } from "next";
import { Fade } from "react-awesome-reveal";
import Style from "./marketing.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { fail } from "assert";

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

const SwiperOptions1 = {
  slidesPerView: 1,
  pagination: false,
  navigation: true,
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
        title: "Planejamento de Marca",
        img: "/images/fotos/planejamento-de-marca.jpg",
        text: "Desvende seu diferencial competitivo e domine seu nicho de mercado, construindo uma marca autêntica e memorável que conquista clientes."
      },
      {
        id: 1,
        title: "Plano de canais omnichannel",
        img: "/images/fotos/canais-omnichannel.jpg",
        text: "Mapeie a jornada do cliente e alcance-o em cada etapa e onde quer que ele esteja, criando um plano personalizado para impulsionar as métricas ideias de cada canal e/ou audiência."
      },
      {
        id: 2,
        title: "Design 360º",
        img: "/images/fotos/Design-360.jpg",
        text: "Criamos histórias que atraem, educam e convertem seu público, exploramos diversos conceitos e formatos para atender às diferentes necessidades das audiências em suas diferentes jornadas."
      },
      {
        id: 3,
        title: "Social Media",
        img: "/images/fotos/SocialMedia.jpg",
        text: "Criamos histórias que atraem, educam e convertem seu público, exploramos diversos conceitos e formatos para atender às diferentes necessidades das audiências em suas diferentes jornadas."
      },
      {
        id: 4,
        title: "Planejamento de Mídia",
        img: "/images/fotos/Planejamento-de-Mídia.jpg",
        text: "Base de todo o nosso racional é a performance do produto, respeitando suas características e enxergando oportunidades, equalizamos os canais a partir da jornada e funil, criando modelos de atribuição de acordo com nossa estratégia "
      },
      {
        id: 5,
        title: "Digital Analytics",
        img: "/images/fotos/Digital-Analytics.jpg",
        text: "Com a visão macro de toda a estratégia, funcionamento dos canais e execução, nosso time visa buscar os principais insights de todas as frentes e conectá-las diretamente ao negócio."
      }

    ]
  }
]

function PageMarketing() {
  const logo = [
    'MBPBadge-Darkbackground.jpg',
    'TikTok.png',
    'Google Analyticsv.png',
    'YouTube.png',
    'Spotify_Full_Logo_RGB_Green.png',
    'Pinterest.png',
    'Tinder.png'
  ]
  return <>
    <Header />
    <section className={Style.times}>
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
                    <p dangerouslySetInnerHTML={{ __html: data.text }} />
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>

        <section>

          <>
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
          </>

          <>
            <div className={Style.slideTime}>
              <Title>Nossos times utilizam</Title>
              <div className="container">

                <Slide.Content className={Style.cardFlex} swiperOptions={SwiperOptions1}>
                  {logo.map(data => (
                    <img src={`/images/clientes/${data}`} key={data} alt="" />
                  ))}
                </Slide.Content>
              </div>
            </div>
          </>
        </section>
      </div>
    </section>
    <Footer />
  </>
}
export default PageMarketing
