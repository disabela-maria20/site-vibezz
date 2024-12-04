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
import { cardParceiros } from './cardParceiros'

const SlideClientes = () => {
  const container = useRef(null)
  const logo = [
    "/images/clientes/kisspng-logo.png",
  ]

  const clientes = [...logo, ...cardParceiros.map(data => data.img)]
  return (
    <>
      <section className={Style.SlideClientes}>
        <Title>Clientes</Title>
        <div className="container" ref={container}>
          <Fade duration={1700} cascade direction="up" delay={0.5} >
            <Swiper
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

                },
                768: {
                  slidesPerView: 4,
                },
                1024: {
                  slidesPerView: 5,
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

    </>

  )
}

export default SlideClientes
