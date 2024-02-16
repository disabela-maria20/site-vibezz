'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

import Style from "./SlideClientes.module.scss"
import { Title } from "../../atoms"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const SlideClientes = () => {
  const logo = [
    "apas.png",
    "kisspng-logo.png",
    "Cinemark.png",
    "Disney.png",
    "coca-cola.png"
  ]
  return (
    <section className={Style.SlideClientes}>
      <Title>Clientes</Title>
      <div className="container">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true
          }}
          pagination={{
            clickable: true
          }}
          navigation={true}
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
          {logo.map((logo) => (
            <SwiperSlide data-hash="slide1" key={logo}>
              <img
                src={`./images/clientes/${logo}`}
                alt=""
                className={Style.logo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default SlideClientes
