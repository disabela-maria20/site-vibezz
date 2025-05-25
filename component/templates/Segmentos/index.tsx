"use client"

import { Cta, Title } from '@/component/atoms';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';
import Style from "./Segmentos.module.scss";

import { Fade } from 'react-awesome-reveal';
import { useTranslations } from 'next-intl';

function segmentos() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations('segmentos');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const b = useTranslations('btn');

  const SEGMENTOS = [
    {
      id: 0,
      title: t('titulo'),
      text: t('texto'),
      data: [
        {
          id: 0,
          title: t('card.titulo1'),
          img: '/images/fotos/cinema.jpg',
          text: [
            t('card.texto1'),
            t('card.texto2'),
            t('card.texto4'),
            t('card.texto5'),
            t('card.texto6'),
            t('card.texto7'),
            t('card.texto8'),
          ]
        },
        {
          id: 1,
          title: t('card.titulo2'),
          img: '/images/fotos/varejo.jpg',
          text: [
            t('card.texto9'),
            t('card.texto10'),
            t('card.texto11'),
            t('card.texto12'),
            t('card.texto13'),
          ]
        },
        {
          id: 2,
          title: t('card.titulo3'),
          img: '/images/fotos/streaming.jpg',
          text: [
            t('card.texto14'),
            t('card.texto15'),
            t('card.texto16'),
            t('card.texto17'),
          ]
        },
        {
          id: 3,
          title: t('card.titulo4'),
          img: '/images/fotos/bebidas.png',
          text: [
            t('card.texto18'),
            t('card.texto19'),
            t('card.texto20'),
            ('card.texto21'),
          ]
        }
      ]
    }
  ]

  return (
    <>
      <Header />
      <section className={Style.segmentos}>
        <div className="container">
          {SEGMENTOS.map((data) => (
            <div key={data.id}>
              <Title>{data.title}</Title>
              <Fade direction='up'>
                <p>{data.text}</p>
              </Fade>
              <Fade direction='up'>
                <div className={Style.gridsegmentos}>
                  {data.data.map((data) => (
                    <div key={data.id} className={Style.card}>
                      <img src={data.img} alt={data.title} />
                      <div className={Style.text}>
                        <h2>{data.title}</h2>
                        <ul>
                          {data.text.map((data) => (
                            <li key={data}>{data}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </Fade>
              <Fade direction='up' cascade damping={0.7} delay={300}>
                <Cta>{b('cta')}</Cta>
              </Fade>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
export default transition(segmentos)