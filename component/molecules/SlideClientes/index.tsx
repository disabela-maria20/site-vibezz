'use client'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import { motion } from "framer-motion";

import Style from "./SlideClientes.module.scss"
import { Title } from "../../atoms"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { useRef } from 'react';
import { useView } from '@/utilities/hooks/useView';

const SlideClientes = () => {

  const container = useRef(null)
  const { control } = useView(container)

  const logo = [
    "apas.png",
    "kisspng-logo.png",
    "Cinemark.png",
    "Disney.png",
    "coca-cola.png"
  ]

  const animate = {
    visible: { opacity:1, y: 0, transition: { duration: 0.5, delay: 0.1 } },
    hidden: { opacity: 0, y:'5vh'},
    exit: { opacity: .7, transition: { duration: 0.5 } }
  }
  return (
    <section className={Style.SlideClientes} >
      <Title>Clientes</Title>
      <div className="container" ref={container}>
        <motion.div
           variants={animate}
           initial="show"
           animate={control}
          >
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
        </motion.div>

      </div>
    </section >
  )
}

export default SlideClientes
