"use client"

import { Title } from '@/component/atoms';
import { Footer, Slide } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'
import Style from "./Projetos.module.scss";
import { INTELIGENCIA, PROJETOS } from './array';
import { FaPlus } from "react-icons/fa6";

import { SwiperOptions } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css/navigation'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

function Projetos() {
  const [isOpen, setIsOpen] = useState(false)

  const slideProjetos: SwiperOptions = {
    slidesPerView: 1,
    pagination: false,
    navigation: false,
    modules: [Navigation, Pagination],
    spaceBetween: 20,
    breakpoints: {
      990: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  }
  const slideInteligencia: SwiperOptions = {
    slidesPerView: 1,
    pagination: false,
    navigation: false,
    modules: [Navigation, Pagination],
    spaceBetween: 20,
  }
  return (
    <>
      <Header />
      <section className={Style.projetos}>
        <Title>Projetos</Title>
        {PROJETOS.map((data) => (
          <div key={data.id}>
            <div className="container">
              <Slide.Title className={Style.title}>{data.title}</Slide.Title>
              <Slide.Content className={Style.slide} swiperOptions={slideProjetos}>
                {data.data.map((data) => (
                  <div key={data.id}>
                    <img src={data.img} alt={data.title} />
                    <div className={Style.card}>
                      <div className={Style.cardTitle}>
                        <motion.div>
                          <h2>{data.title}</h2>
                          <h3>{data.subtitle}</h3>
                        </motion.div>
                        <FaPlus role='button' />
                      </div>
                      <div className={Style.cardHover}>
                        <div>
                          <h2>{data.title}</h2>
                          <h3>{data.subtitle}</h3>
                          <p>{data.text}</p>
                        </div>
                        <img src={data.img} alt={data.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </Slide.Content>
            </div>
          </div>
        ))}
      </section>
      <section className={Style.inteligencia}>
        {INTELIGENCIA.map((data) => (
          <div key={data.id}>
            <div className="container">
              <Slide.Title className={Style.title}>{data.title}</Slide.Title>
              <Slide.Content className={Style.slide} swiperOptions={slideInteligencia}>
                {data.data.map((data) => (
                  <div key={data.id}>
                    <img src={data.img} alt={data.title} />
                    <div className={Style.card}>
                      <div className={Style.cardTitle}>
                        <motion.div>
                          <h2>{data.title}</h2>
                          <h3>{data.subtitle}</h3>
                        </motion.div>
                        <FaPlus role='button' onClick={()=> setIsOpen(!isOpen)} />
                      </div>
                      <div className={Style.cardHover}>
                        <div>
                          <h2>{data.title}</h2>
                          <h3>{data.subtitle}</h3>
                          <p>{data.text}</p>
                        </div>
                        <img src={data.img} alt={data.title} />
                      </div>
                    </div>
                  </div>
                ))}
              </Slide.Content>
            </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}
export default transition(Projetos);