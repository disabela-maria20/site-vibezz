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
import { useTranslations } from "next-intl";

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


function PageMarketing() {
  const t = useTranslations('Marketing');
  const logo = [
    'MBPBadge-Darkbackground.jpg',
    'TikTok.png',
    'GoogleAnalyticsv.png',
    'YouTube.png',
    'Spotify_Full_Logo_RGB_Green.png',
    'Pinterest.png',
    'Tinder.png'
  ]
  const MARKETING = [
    {
      title: t('titulo'),
      text1: t('texto1'),
      text2: t('texto2'),
      img: "/images/fotos/marketing.png",
      data: [
        {
          id: 0,
          title: t('card.titulo1'),
          img: "/images/fotos/planejamento-de-marca.jpg",
          text: t('card.texto1'),
        },
        {
          id: 1,
          title: t('card.titulo2'),
          img: "/images/fotos/canais-omnichannel.jpg",
          text: t('card.texto2'),
        },
        {
          id: 2,
          title: t('card.titulo3'),
          img: "/images/fotos/Design-360.jpg",
          text: t('card.texto3'),
        },
        {
          id: 3,
          title: t('card.titulo4'),
          img: "/images/fotos/SocialMedia.jpg",
          text: t('card.texto4'),
        },
        {
          id: 4,
          title: t('card.titulo5'),
          img: "/images/fotos/Planejamento-de-Midia.jpg",
          text: t('card.texto5'),
        },
        {
          id: 5,
          title: t('card.titulo6'),
          img: "/images/fotos/Digital-Analytics.jpg",
          text: t('card.texto6'),
        }

      ]
    }
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
                    <p>{data.text1}</p>
                    <p>{data.text2}</p>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </div>

        <section>

          <>
            {MARKETING.map((data, i) => (
              <div key={i} className={Style.bgMarketing}>
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
              <Title>{t('card.areaNossostimesutilizam.titulo')}</Title>
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
