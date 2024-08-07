/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client"

import { Footer, Slide } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'
import Style from "./Times.module.scss";
import { Title } from '@/component/atoms';
import { MARKETING, MERCADO } from './array';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination } from 'swiper/modules';
import { Fade } from 'react-awesome-reveal';

function Times() {
  const SwiperOptions: SwiperOptions = {
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
  return (
    <>
      <Header />
      <section className={Style.times}>
        <Title>Times</Title>
        <div className={Style.Marketing}>
          <div className='container'>
            <div className={Style.gridMarketing}>
              {MARKETING.map((data, i) => (
                <>
                  <div key={i}>
                    <Fade direction='left' delay={1} cascade>
                      <img src={data.img} />
                    </Fade>
                  </div>
                  <div key={i}>
                    <Fade direction='right' delay={1} cascade damping={0.1}>
                      <h2>{data.title}</h2>
                      <p>{data.text}</p>
                    </Fade>
                  </div>
                </>
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
        <div className={Style.Mercado}>
          <div className='container'>
            <div className={Style.gridMercado}>
              {MERCADO.map((data, i) => (
                <>
                  <div key={i}>
                    <Fade direction='left' delay={1} cascade>
                      <img src={data.img} />
                    </Fade>
                  </div>
                  <div key={i}>
                    <Fade direction='right' delay={1} cascade damping={0.1}>
                      <h2>{data.title}</h2>
                      <p>{data.text}</p>
                    </Fade>
                  </div>
                </>
              ))}
            </div>
          </div>
          <Fade direction='up'>
            {MERCADO.map((data) => (
              <div key={data.text} className={Style.bgMercado}>
                <div className="container">
                  <Slide.Content className={Style.cardFlex} swiperOptions={SwiperOptions}>
                    {data.data.map((data) => (
                      <div className={Style.card} key={data.id}>
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
  );
}
export default transition(Times);