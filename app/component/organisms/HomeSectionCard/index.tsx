/* eslint-disable @next/next/no-img-element */
'use client'

import Style from "./HomeSectionCard.module.scss"

const HomeSectionCard = () => {
  const arrayCard = [
    {
      id: 1,
      title: "title",
      icon: "icon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "title2",
      icon: "icon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 3,
      title: "title3",
      icon: "icon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 4,
      title: "title4",
      icon: "icon",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
  return (
    <>
      <section className={Style.marketing}>
        <div className={Style.grid}>
          <h2 className={Style.title}>
            <span>Núcleo</span>
            <strong>Marketing</strong>
          </h2>
          <div className={Style.gridCard}>
            {arrayCard.map((data) => (
              <div className={Style.card} key={data.id}>
                <i>
                  <img src={`/images/${data.icon}.svg`} alt="" />
                </i>
                <h3>{data.title}</h3>
                <hr />
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={Style.mercado}>
        <div className={Style.grid}>
          <div className={Style.gridCard}>
            {arrayCard.map((data) => (
              <div className={Style.card} key={data.id}>
                <i>
                  <img src={`./images/${data.icon}.svg`} alt="" />
                </i>
                <h3>{data.title}</h3>
                <hr />
                <p>{data.description}</p>
              </div>
            ))}
          </div>
          <h2 className={Style.title}>
            <span>Núcleo</span>
            <strong>Marketing</strong>
          </h2>
        </div>
      </section>
    </>
  )
}

export default HomeSectionCard
