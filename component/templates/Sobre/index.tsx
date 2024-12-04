/* eslint-disable @next/next/no-img-element */
"use client";

import { Cta, Title } from '@/component/atoms';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';
import { timeline } from "./timeline";
import Style from "./Sobre.module.scss";
import { Footer, HEro } from '@/component/molecules';
import { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import Mapa from '@/utilities/svg/mapa';
import { estados } from './estados';
import { Fade } from 'react-awesome-reveal';

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
                  <Title>A vibezz</Title>
                  <p>Somos uma agência Full Service atuante em Marketing. Nascemos e crescemos com um propósito: conectar tudo o que pensamos e fazemos aos canais de comunicação de forma construtiva e objetiva para nossos parceiros. A partir disso, formamos uma estrutura de dados que se conecta aos segmentos, construindo um ecossistema que se retroalimenta e gera novas iniciativas a partir do cruzamento desses polos.</p>
                  <p>E assim nos propormos a criar empoderamento estratégico, tático e operacional por meio da conexão com os dados.</p>
                </div>
              </Fade>
              <Fade direction='right'>
                <img src="../../images/illustration/card-sobre.png" alt="" />
              </Fade>
            </div>
            <Cta>
              Vamos Conversar?
            </Cta>
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
