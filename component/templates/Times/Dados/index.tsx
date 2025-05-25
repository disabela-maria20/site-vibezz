/* eslint-disable @next/next/no-img-element */
"use client"

import { Title } from "@/component/atoms";
import { Footer, Slide } from "@/component/molecules";
import { Header } from "@/component/organisms";
import { Metadata } from "next";
import { Fade } from "react-awesome-reveal";
import Style from "./dados.module.scss";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: 'Times de Marketing | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

const SwiperOptions = {
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

const SwiperOptions1 = {
  slidesPerView: 1,
  pagination: true,
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

function PageMarketing() {
  const t = useTranslations('dados');
  const empresas = [
    'PowerBI.png',
    'GoogleAnalyticsv.png',
    'GoogleTagManager.png',
    'SendGrid.png',
  ]
  const MERCADO = [
    {
      title: t('titulo'),
      text: "",
      img: "/images/fotos/close-up-caucasian-man-s-portrait-isolated-blue-studio-neon-light.png",
      data: [

        {
          id: 0,
          title: t('card.titulo1'),
          img: "/images/fotos/Coleta-e-analise-de-Dados.jpg",
          text: t('card.texto1'),
        },
        {
          id: 1,
          title: t('card.titulo2'),
          img: "/images/fotos/Data-Fusion-e-Insights-Integrados.jpg",
          text: t('card.texto2'),
        },
        {
          id: 2,
          title: t('card.titulo3'),
          img: "/images/fotos/Construcao-Aplicacao-Analise-de-Pesquisa.jpg",
          text: t('card.texto3'),
        },
        {
          id: 3,
          title: t('card.titulo4'),
          img: "/images/fotos/coleta.jpg",
          text: t('card.texto4'),
        },
        {
          id: 4,
          title: t('card.titulo5'),
          img: "/images/fotos/Desenvolvimento-de-Data-Products.jpg",
          text: t('card.texto5'),
        },
        {
          id: 5,
          title: t('card.titulo6'),
          img: "/images/fotos/Implementacao-de-Data-Lakes.jpg",
          text: t('card.texto6'),
        },
        {
          id: 6,
          title: t('card.titulo7'),
          img: "/images/fotos/Storytelling-com-Dados.jpg",
          text: t('card.texto7'),
        }

      ]
    }
  ]
  return <>
    <Header />
    <section className={Style.times}>
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

        <>
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
        </>


        <div className={Style.slideTime}>
          <Title>{t('areaNossostimesutilizam.titulo')}</Title>

          <>
            <div className="container">
              <Slide.Content className={Style.cardFlex} swiperOptions={SwiperOptions1}>
                {empresas.map(data => (
                  <img src={`/images/clientes/${data}`} key={data} alt="" />
                ))}
              </Slide.Content>
            </div>
          </>

        </div>
      </div>
    </section>
    <Footer />
  </>
}
export default PageMarketing
