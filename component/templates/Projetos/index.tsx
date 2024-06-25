"use client"

import { HubspotForm, Title } from '@/component/atoms';
import { Footer, Slide } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';
import Style from "./Projetos.module.scss";
import { INTELIGENCIA, PROJETOS } from './array';
import { CgMathMinus, CgMathPlus } from "react-icons/cg";

import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/navigation';
import { useState } from 'react';
import { motion } from "framer-motion";
import { Fade } from 'react-awesome-reveal';

interface SlideData {
  id: number;
  img: string;
  title: string;
  subtitle: string;
  text: string;
}

interface ProjectData {
  id: number;
  title: string;
  data: SlideData[];
}

interface ProjetosProps {
  projetos: ProjectData[];
  inteligencia: ProjectData[];
}

const Projetos: React.FC = () => {
  const [openSlideId, setOpenSlideId] = useState<number | null>(null);

  const handleToggleSlide = (id: number) => {
    setOpenSlideId((prevId) => (prevId === id ? null : id));
  };

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
  };

  const slideInteligencia: SwiperOptions = {
    slidesPerView: 1,
    pagination: false,
    navigation: false,
    modules: [Navigation, Pagination],
    spaceBetween: 20,
  };

  return (
    <>
      <Header />
      <section className={Style.projetos}>
        <Title>Projetos</Title>
        {PROJETOS.map((data: ProjectData) => (
          <div key={data.id}>
            <div className="container">
              <Fade direction='up'>
                <Slide.Title className={Style.title}>{data.title}</Slide.Title>
              </Fade>
              <Fade direction='up'>
                <Slide.Content className={Style.slide} swiperOptions={slideProjetos}>
                  {data.data.map((item: SlideData) => (
                    <div key={item.id}>
                      <img src={item.img} alt={item.title} />
                      <div className={Style.card}>
                        <div className={Style.cardTitle}>
                          <motion.div>
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                          </motion.div>
                          {openSlideId === item.id ? (
                            <CgMathMinus role="button" onClick={() => handleToggleSlide(item.id)} />
                          ) : (
                            <CgMathPlus role="button" onClick={() => handleToggleSlide(item.id)} />
                          )}
                        </div>
                        <div className={`${Style.cardHover} ${openSlideId === item.id ? Style.active : ''}`}>
                          <div className={Style.area}>
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                            <p>{item.text}</p>
                          </div>
                          <img src={item.img} alt={item.title} />
                        </div>
                      </div>
                    </div>
                  ))}
                </Slide.Content>
              </Fade>
            </div>
          </div>
        ))}
      </section>
      <section className={Style.inteligencia}>
        {INTELIGENCIA.map((data: ProjectData) => (
          <div key={data.id}>
            <div className="container">
              <Fade direction='up'>
                <Slide.Title className={Style.title}>{data.title}</Slide.Title>
              </Fade>
              <Fade direction='up'>
                <Slide.Content className={Style.slide} swiperOptions={slideInteligencia}>
                  {data.data.map((item: SlideData) => (
                    <div key={item.id}>
                      <img src={item.img} alt={item.title} />
                      <div className={Style.card}>
                        <div className={Style.cardTitle}>
                          <motion.div>
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                          </motion.div>
                          {openSlideId === item.id ? (
                            <CgMathMinus role="button" onClick={() => handleToggleSlide(item.id)} />
                          ) : (
                            <CgMathPlus role="button" onClick={() => handleToggleSlide(item.id)} />
                          )}
                        </div>
                        <div className={`${Style.cardHover} ${openSlideId === item.id ? Style.active : ''}`}>
                          <div className={Style.area}>
                            <h2>{item.title}</h2>
                            <h3>{item.subtitle}</h3>
                            <p>{item.text}</p>
                          </div>
                          <div className={Style.areaImg}>
                            <img src={item.img} alt={item.title} />
                            <CgMathMinus role="button" onClick={() => handleToggleSlide(item.id)} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slide.Content>
              </Fade>

            </div>
          </div>
        ))}
      </section>
      <Footer />
      <HubspotForm />
    </>
  );
}

export default transition(Projetos);
