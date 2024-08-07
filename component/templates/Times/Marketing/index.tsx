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
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla eleifend, imperdiet arcu sed, sollicitudin tellus. Pellentesque augue mauris, sollicitudin quis ante a, pretium posuere est. ",
    img: "/images/fotos/marketing.png",
    data: [
      {
        id: 0,
        title: "Atendimento",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/images/fotos/pl.png",
      },
      {
        id: 1,
        title: "Criação",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/images/fotos/pl.png",
      },
      {
        id: 2,
        title: "Conteúdo",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/images/fotos/pl.png",
      },
      {
        id: 3,
        title: "Mídia",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        img: "/images/fotos/pl.png",
      }
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
                  <p>{data.text}</p>
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
