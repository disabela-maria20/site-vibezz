/* eslint-disable @next/next/no-img-element */
import {  motion  } from "framer-motion";
import Style from "./HomeSectionCard.module.scss";
import { useRef } from "react";
import { useView } from "@/utilities/hooks/useView";

const HomeSectionCard = () => {
  const arrayCard = [
    {
      id: 1,
      title: "title",
      icon: "icon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "title2",
      icon: "icon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "title3",
      icon: "icon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 4,
      title: "title4",
      icon: "icon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const boxVariant = (delay: number) => {
    return {
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: delay * 0.3 } },
      hidden: { opacity: 0, y: '100px' },
      exit: { opacity: 1, transition: { duration: 0.5 } }
    };
  };

  const title = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay:  0.5 } },
    hidden: { opacity: 0, y: '15vh' },
    exit: { opacity: 1, transition: { duration: 0.5 } }
  };

  const containerMark = useRef(null);
  const marketing = useView(containerMark);

  const containerMercado = useRef(null);
  const mercado = useView(containerMercado);

  return (
    <>
      <section className={Style.marketing} ref={containerMark}>
        <div className={Style.grid}>
          <motion.h2
            initial="hidden"
            animate={marketing.control}
            variants={title}
            className={Style.title}>
          <span>Núcleo</span>
          <strong>Marketing</strong>
        </motion.h2>
        <ul className={Style.gridCard}>
          {arrayCard.map((data) => (
            <motion.li
              className={Style.card}
              key={data.id}
              variants={boxVariant(data.id)}
              initial="hidden"
              animate={marketing.control}
            >
              <i>
                <img src={`/images/${data.icon}.svg`} alt="" />
              </i>
              <h3>{data.title}</h3>
              <hr />
              <p>{data.description}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section >
      <section className={Style.mercado} ref={containerMercado}>
        <div className={Style.grid}>
          <div className={Style.gridCard}>
            {arrayCard.map((data) => (
              <motion.li
                className={Style.card}
                key={data.id}
                variants={boxVariant(data.id)}
                initial="hidden"
                animate={mercado.control}
              >
                <i>
                  <img src={`/images/${data.icon}.svg`} alt="" />
                </i>
                <h3>{data.title}</h3>
                <hr />
                <p>{data.description}</p>
              </motion.li>
            ))}
          </div>
          <motion.h2
            variants={title}
            initial="hidden"
            animate={mercado.control}
            className={Style.title}>
            <span>Núcleo</span>
            <strong>Marketing</strong>
          </motion.h2>
        </div>
      </section>
    </>
  );
};

export default HomeSectionCard;
