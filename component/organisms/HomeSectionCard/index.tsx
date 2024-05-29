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
  const containerMark = useRef(null);
  const marketing = useView(containerMark);

  const containerMercado = useRef(null);
  const mercado = useView(containerMercado);

  return (
    <>
      <section className={Style.marketing} ref={containerMark}>
        <div className={Style.grid}>
          <h2 className={Style.title}>
          <span>Núcleo</span>
          <strong>Marketing</strong>
        </h2>
        <ul className={Style.gridCard}>
          {arrayCard.map((data) => (
            <li className={Style.card} key={data.id}>
              <i>
                <img src={`/images/${data.icon}.svg`} alt="" />
              </i>
              <h3>{data.title}</h3>
              <hr />
              <p>{data.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section >
      <section className={Style.mercado} ref={containerMercado}>
        <div className={Style.grid}>
          <ul className={Style.gridCard}>
            {arrayCard.map((data) => (
              <li className={Style.card} key={data.id}>
                <i>
                  <img src={`/images/${data.icon}.svg`} alt="" />
                </i>
                <h3>{data.title}</h3>
                <hr />
                <p>{data.description}</p>
              </li>
            ))}
          </ul>
          <h2 className={Style.title}>
            <span>Núcleo</span>
            <strong>Marketing</strong>
          </h2>
        </div>
      </section>
    </>
  );
};

export default HomeSectionCard;
