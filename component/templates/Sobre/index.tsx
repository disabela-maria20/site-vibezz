"use client"

import { Title } from '@/component/atoms';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';
import { timeline } from "./timeline";
import Style from "./Sobre.module.scss";
import { Footer } from '@/component/molecules';
import { useEffect, useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import Mapa from '@/utilities/svg/mapa';
import { estados } from './estados';

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
  }, [openIndexes]);

  return scope;
}

function Sobre() {
  const [openTimelineIndexes, setOpenTimelineIndexes] = useState<number[]>([4]);
  const [openEstadoIndexes, setOpenEstadoIndexes] = useState<string[]>(["Brasil"]);

  const scope = useMenuAnimation(openTimelineIndexes);

  const toggleTimelineIndex = (index: number) => {
    const newIndexes = [...openTimelineIndexes];    
    const indexPosition = newIndexes.indexOf(index);
    if (indexPosition !== -1) {
      newIndexes.splice(indexPosition, 1);
    } else {
      newIndexes.push(index);
    }
    setOpenTimelineIndexes(newIndexes);
  };

  const toggleEstadoIndex = (index: string) => {
    const newIndexes = [...openEstadoIndexes];
    const indexPosition = newIndexes.indexOf(index);
    if (indexPosition !== -1) {
      newIndexes.splice(indexPosition, 1);
    } else {
      newIndexes.push(index);
    }
    setOpenEstadoIndexes(newIndexes);
  };

  const handleLocal = (index: string) => {
    setOpenEstadoIndexes([index])
  };

  return (
    <>
      <Header />
      <section className={Style.sobre}>
        <div className="container">
          <div className={Style.grid}>
            <div>
              <Title>A vibezz</Title>
              <p>A Vibezz é um parceiro que entrega
                a melhor <strong>Inteligência de dados</strong> sobre seu negócio, para aprimorar e <strong>executar
                  a sua estratégia</strong> de marketing
                e <strong>qualificar os seus resultados.</strong>
              </p>
            </div>
            <img src="../../images/illustration/card-sobre.png" alt="" />
          </div>
        </div>
      </section>
      <section className={Style.timeline}>
        <Title>nossa evolução</Title>
        <div className="container">
          <ul className={Style.flex} ref={scope}>
            {timeline.map((data, index) => (
              <li key={data.id} >
                <motion.h2
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleTimelineIndex(index)}>
                  <i className={`${Style.icon} ${openTimelineIndexes.includes(index) ? Style.active : ''}`}></i>
                  {data.data}
                </motion.h2>
                {openTimelineIndexes.includes(index) && <p>{data.paragraph}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className={Style.mapa}>
        <div className="container">
          <div className={Style.grid}>
            {/* Mapa vai aqui */}
            <div className={Style.svg}>
              <Mapa Local={handleLocal} />
            </div>
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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default transition(Sobre);
