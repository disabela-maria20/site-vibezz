'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, HashNavigation } from 'swiper/modules';

import Style from "./SlideClientes.module.scss"
import { Title } from "../../atoms"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useRef } from 'react';

const SlideClientes = () => {

  const container = useRef(null)


  const logo = [
    "apas.png",
    "kisspng-logo.png",
    "Cinemark.png",
    "Disney.png",
    "coca-cola.png"
  ]
  return (
    <section className={Style.SlideClientes} >
      <Title>Clientes</Title>
      <div className="container" ref={container}>
        <div>
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

      </div>
    </section >
  )
}

export default SlideClientes
