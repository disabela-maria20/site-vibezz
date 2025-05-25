"use client"

import { Cta, Title } from '@/component/atoms';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'
import Style from "./Parceiros.module.scss";

import { motion } from 'framer-motion';
import { Fade } from 'react-awesome-reveal';
import { useTranslations } from 'next-intl';

function Parceiros() {
  const t = useTranslations('clientes');
  const b = useTranslations('btn');
  const cardParceiros = [
    {
      id: 0,
      nome: t('titulo1'),
      img: '/images/clientes/apas.png',
      text: t('texto1')
    },
    {
      id: 2,
      nome: t('titulo2'),
      img: '/images/clientes/paramount.png',
      text: t('texto2')
    },
    {
      id: 3,
      nome: t('titulo3'),
      img: '/images/clientes/IMAX.svg.png',
      text: t('texto3')
    },
    {
      id: 4,
      nome: t('titulo4'),
      img: '/images/clientes/sony-pictures.png',
      text: t('texto4')
    },
    {
      id: 5,
      nome: t('titulo5'),
      img: '/images/clientes/diamond.png',
      text: t('texto5')
    },
    {
      id: 6,
      nome: t('titulo6'),
      img: '/images/clientes/paris.png',
      text: t('texto6')
    },

    {
      id: 7,
      nome: t('titulo7'),
      img: '/images/clientes/cinesystem-vermelho.png',
      text: t('texto7')
    },

    {
      id: 8,
      nome: t('titulo8'),
      img: '/images/clientes/united-international-picture-uip-colombie.jpg',
      text: t('texto8')
    },

    {
      id: 9,
      nome: t('titulo9'),
      img: '/images/clientes/filmelier-logo.webp',
      text: t('texto9')
    },

    {
      id: 10,
      nome: t('titulo10'),
      img: '/images/clientes/supervarejo-logo.jpg',
      text: t('texto10')
    },

    {
      id: 11,
      nome: t('titulo11'),
      img: '/images/clientes/unnamed-1.webp',
      text: t('texto11')
    },

    {
      id: 12,
      nome: t('titulo12'),
      img: '/images/clientes/cineart-logo.png',
      text: t('texto12')
    }
  ]

  return (
    <>
      <Header />
      <main>
        <section className={Style.parceiros}>
          <div className="container">
            <Title>{t('titulo')}</Title>
            <div className={Style.grid}>
              {cardParceiros.map((data) => (
                <Fade direction='up' cascade damping={0.7} key={data.id}>
                  <motion.div
                    whileHover={{
                      scale: 1.13,
                      transition: { duration: 0.25 }
                    }}
                    whileTap={{
                      scale: 1.13,
                      transition: { duration: 0.9 }
                    }}
                    className={Style.card}
                  >

                    <div className={Style.img}>
                      <img src={data.img} alt="logo" />
                    </div>
                    <div className={Style.text}>
                      <h2>{data.nome}</h2>
                      <p>{data.text}</p>
                    </div>
                  </motion.div>
                </Fade>
              ))}
            </div>
          </div>
        </section>
        <Fade direction='up' cascade damping={0.7} delay={200}>
          <Cta>{b('cta')}</Cta>
        </Fade>

      </main>
      <Footer />
    </>
  );
}
export default transition(Parceiros);

