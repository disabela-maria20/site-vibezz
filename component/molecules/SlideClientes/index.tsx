/* eslint-disable @next/next/no-img-element */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

import Style from "./SlideClientes.module.scss"
import { Title } from "../../atoms"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { useRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import {cardParceiros} from './cardParceiros'

const SlideClientes = () => {
  const container = useRef(null)
  const logo = [
    "./images/clientes/kisspng-logo.png",
  ]
  const certificacoes = [
    "MS_Startups_FH_lockup_hrz_OnLght_RGB.png",
    "MBPBadge-Darkbackground.jpg"
  ]

  const clientes =  [...logo, ...cardParceiros.map(data => data.img)]
  return (
    <>
     <section className={Style.SlideClientes} >
      <Title>Clientes</Title>
      <div className="container" ref={container}>
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
                slidesPerView: 2,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50
              }
            }}
          >
            {clientes.map((logo) => (
              <SwiperSlide data-hash="slide1" key={logo}>
                <img
                  src={logo}
                  alt=""
                  className={Style.logo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>

      </div>
    </section>
    <section className={Style.SlideCertificacao} >
      <Title>Certificações</Title>
      <div className="container" ref={container}>
        <Fade duration={1700} cascade direction="up" delay={0.5} >
          <Swiper
            spaceBetween={30}
            hashNavigation={{
              watchState: false
            }}
            pagination={{
              clickable: false
            }}
            navigation={false}
            modules={[Pagination, Navigation, HashNavigation]}
            className={Style.Swiper}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50
              }
            }}
          >
            {certificacoes.map((logo) => (
              <SwiperSlide data-hash="slide1" key={logo}>
                <img
                  src={`./images/clientes/${logo}`}
                  alt=""
                  className={Style.logoCertificacoes}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Fade>

      </div>
    </section>
    </>

  )
}

export default SlideClientes
