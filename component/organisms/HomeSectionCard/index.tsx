/* eslint-disable @next/next/no-img-element */
import { Fade } from "react-awesome-reveal";
import Style from "./HomeSectionCard.module.scss";


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
  return (
    <>
      <section className={Style.marketing}>
        <div className={Style.grid}>
          <Fade direction="left" className={Style.title}>
            <h2>
              <span>Núcleo</span>
              <strong>Marketing</strong>
            </h2>
          </Fade>
          <Fade direction="up" cascade damping={0.3}>
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
          </Fade>
        </div>
      </section>
      <section className={Style.mercado}>
        <div className={Style.grid}>
          <Fade direction="up" cascade damping={0.3}>
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
          </Fade>
          <Fade direction="right" className={Style.title}>
            <h2>
              <span>Núcleo</span>
              <strong>Marketing</strong>
            </h2>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default HomeSectionCard;
