/* eslint-disable @next/next/no-img-element */
"use client";

import { Cta, Title } from '@/component/atoms';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';

import Style from "./Sobre.module.scss";
import { Footer, HEro } from '@/component/molecules';
import { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import Mapa from '@/utilities/svg/mapa';
import { Fade } from 'react-awesome-reveal';
import { useTranslations } from 'next-intl';

interface Estado {
  id: number;
  data: string;
  paragraph: string[];
}

function useMenuAnimation(openIndexes: number[]) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = openIndexes.map(index => (
      [
        "p",
        {
          transform: index !== -1 ? "scale(1)" : "scale(0.5)",
          opacity: index !== -1 ? 1 : 0,
          filter: index !== -1 ? "blur(0px)" : "blur(10px)"
        },
      ]
    ));

    animate(menuAnimations as any);
  }, [animate, openIndexes]);

  return scope;
}

function Sobre() {
  const t = useTranslations('avibezz');
  const b = useTranslations('btn');
  const timeline = [
    {
      id: 1,
      data: '2019',
      paragraph: t('areanossaevolucaodesde2019ate2023.texto1')
    },
    {
      id: 2,
      data: '2020',
      paragraph: t('areanossaevolucaodesde2019ate2023.texto2')
    },
    {
      id: 3,
      data: '2021',
      paragraph: t('areanossaevolucaodesde2019ate2023.texto3')
    },
    {
      id: 4,
      data: '2022',
      paragraph: t('areanossaevolucaodesde2019ate2023.texto4')
    },
    {
      id: 5,
      data: '2023',
      paragraph: t('areanossaevolucaodesde2019ate2023.texto5')
    },
  ]
  const estados: Estado[] = [
    {
      id: 0,
      data: t('areaSOLUCOESEMDIFERENTESTERRITORIOS.titulo1'),
      paragraph: [
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto1'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto2'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto3'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto4'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto5'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto6'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto7'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto8'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto9'),
      ]
    },
    {
      id: 1,
      data: t('areaSOLUCOESEMDIFERENTESTERRITORIOS.titulo2'),
      paragraph: [
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto10'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto11'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto12'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto13'),
      ]
    },
    {
      id: 2,
      data: t('areaSOLUCOESEMDIFERENTESTERRITORIOS.titulo3'),
      paragraph: [
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto14'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto15'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto16'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto17'),
      ]
    },
    {
      id: 3,
      data: t('areaSOLUCOESEMDIFERENTESTERRITORIOS.titulo4'),
      paragraph: [
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto18'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto19'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto20'),
        t('areaSOLUCOESEMDIFERENTESTERRITORIOS.texto21'),
      ]
    },
  ];
  const [openTimelineIndexes, setOpenTimelineIndexes] = useState<number[]>([4]);
  const [openEstadoIndexes, setOpenEstadoIndexes] = useState<string[]>(["Brasil"]);

  const scope = useMenuAnimation(openTimelineIndexes);

  const toggleTimelineIndex = (index: number) => {
    if (openTimelineIndexes.includes(index)) {
      setOpenTimelineIndexes([]);
    } else {
      setOpenTimelineIndexes([index]);
    }
  };

  const toggleEstadoIndex = (index: string) => {
    if (openEstadoIndexes.includes(index)) {
      setOpenEstadoIndexes([]);
    } else {
      setOpenEstadoIndexes([index]);
    }
  };

  const handleLocal = (index: string) => {
    setOpenEstadoIndexes([index]);
  };

  return (
    <>
      <Header />
      <main>
        <section className={Style.sobre}>
          <div className="container">
            <div className={Style.grid}>
              <Fade direction='left'>
                <div>
                  <Title>{t('areaavibezz.titulo')}</Title>
                  <p>{t('areaavibezz.texto1')}</p>
                  <p>{t('areaavibezz.texto2')}</p>
                </div>
              </Fade>
              <Fade direction='right'>
                <img src="../../images/illustration/card-sobre.png" alt="" />
              </Fade>
            </div>
            <Cta>{b('cta')}</Cta>
          </div>
        </section>

        <section className={Style.timeline}>
          <Title>nossa evolução desde 2019 até 2023</Title>
          <div className="container">
            <ul className={Style.flex} ref={scope}>
              {timeline.map((data, index) => (
                <li key={data.id}>
                  <Fade direction="up" cascade damping={0.6}>
                    <div>
                      <motion.h2
                        whileTap={{ scale: 0.97 }}
                        onClick={() => toggleTimelineIndex(index)}>
                        {openTimelineIndexes.includes(index) ?
                          <i className={`${Style.icon} ${openTimelineIndexes.includes(index) ? Style.active : ''}`}>+</i> : <i className={`${Style.icon} ${openTimelineIndexes.includes(index) ? Style.active : ''}`}>-</i>
                        }
                        <span>{data.data}</span>

                      </motion.h2>
                      {openTimelineIndexes.includes(index) && <p>{data.paragraph}</p>}
                    </div>
                  </Fade>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={Style.mapa}>
          <div className="container">
            <div className={Style.grid}>
              <Fade direction="left" cascade damping={0.4}>
                <div className={Style.svg}>
                  <Mapa Local={handleLocal} />
                </div>
              </Fade>
              <div>
                <Fade direction="right" >
                  <div>
                    <h2>SOLUÇÕES EM DIFERENTES TERRITÓRIOS</h2>
                    <ul>
                      {estados.map((data, index) => (
                        <li key={data.id} >
                          <motion.h3
                            whileTap={{ scale: 0.97 }}
                            onClick={() => toggleEstadoIndex(data.data)}>
                            {data.data}
                          </motion.h3>
                          {openEstadoIndexes.includes(data.data) && data.paragraph.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </main >
      <Footer />
    </>
  );
}

export default transition(Sobre);
