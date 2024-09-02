"use client"

import { Title } from '@/component/atoms';
import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition';
import Style from "./Segmentos.module.scss";
import { SEGMENTOS } from './array';
import { Fade } from 'react-awesome-reveal';

function segmentos() {
  return (
    <>
      <Header />
      <section className={Style.segmentos}>
        <div className="container">
          {SEGMENTOS.map((data) => (
            <div key={data.id}>
              <Title>{data.title}</Title>
              <Fade direction='up'>
                <p>{data.text}</p>
              </Fade>
              <Fade direction='up'>
                <div className={Style.gridsegmentos}>
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
              </Fade>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default transition(segmentos)