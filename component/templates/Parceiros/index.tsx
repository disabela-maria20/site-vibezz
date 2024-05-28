"use client"

import { Title } from '@/component/atoms';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'
import Style from "./Parceiros.module.scss";
import { cardParceiros } from "./cardParceiros"
import { motion } from 'framer-motion';

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
                  key={data.id}>
                  <div className={Style.img}>
                    <img src={data.img} alt="logo" />
                  </div>
                  <div className={Style.text}>
                    <h2>{data.nome}</h2>
                    <p>{data.text}</p>
                  </div>
                </motion.div>
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

