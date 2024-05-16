"use client"

import { Title } from '@/component/atoms';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'
import Style from "./Parceiros.module.scss";
import { cardParceiros } from "./CardParceiros"

function Parceiros() {
  return (
    <>
      <Header />
      <main>
        <section className={Style.parceiros}>
          <div className="container">
            <Title>Parceiros</Title>
            <div className={Style.grid}>
            {cardParceiros.map((data) => (
              <div className={Style.card} key={data.id}>
                <div className={Style.img}>
                  <img src={data.img} alt="logo" />
                </div>
                <div className={Style.text}>
                  <h2>{data.nome}</h2>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default transition(Parceiros);