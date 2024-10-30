/* eslint-disable @next/next/no-img-element */
"use client"

import { Title } from '@/component/atoms';
import { Footer, SlideClientes } from '@/component/molecules';
import Hero from '@/component/molecules/Hero';
import { Header, HomeProcess, HomeSectionCard } from '@/component/organisms';
import transition from '@/utilities/transition'
import { Fade } from 'react-awesome-reveal';
import { HashNavigation, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from "./Home.module.scss"
function Home() {
  const certificacoes = [
    "MS_Startups_FH_lockup_hrz_OnLght_RGB.png",
    "MBPBadge-Darkbackground.jpg"
  ]

  return (
    <>
      <Header>
        <Hero />
      </Header>
      <main>
        <SlideClientes />
        <HomeSectionCard />
        <HomeProcess />
        <section className={Style.SlideCertificacao} >
          <Title>Certificações</Title>
          <div className="container">
            <Fade duration={1700} cascade direction="up" delay={0.5} >
              <Swiper
                spaceBetween={30}
                hashNavigation={{
                  watchState: false
                }}
                navigation={true}
                pagination={false}
                modules={[Pagination, Navigation, HashNavigation]}
                className={Style.Swiper}
                breakpoints={{
                  640: {
                    slidesPerView: 1,

                  },
                  768: {
                    slidesPerView: 2,

                  },
                  1024: {
                    slidesPerView: 2,

                  }
                }}
              >
                {certificacoes.map((logo) => (
                  <SwiperSlide data-hash="slide1" key={logo}>
                    <img
                      src={`/images/clientes/${logo}`}
                      alt=""
                      className={Style.logoCertificacoes}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Fade>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default transition(Home);