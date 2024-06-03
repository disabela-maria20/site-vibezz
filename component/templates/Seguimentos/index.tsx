"use client"

import { Title } from '@/component/atoms';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';
import Style from "./Seguimentos.module.scss";
import { SEGMENTOS } from './array';

function Seguimentos() {
  return (
    <>
      <Header />
      <section className={Style.seguimentos}>
        <div className="container">
          {SEGMENTOS.map((data) => (
            <div key={data.id}>
              <Title>{data.title}</Title>
              <p>{data.text}</p>
              <div className={Style.gridSeguimentos}>
                {data.data.map((data) => (
                  <div key={data.id} className={Style.card}>
                    <img src={data.img} alt={data.title} />
                    <div className={Style.text}>
                      <h2>{data.title}</h2>
                      <ul>
                        {data.text.map((data) => (
                          <li key={data}>{data}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default transition(Seguimentos)