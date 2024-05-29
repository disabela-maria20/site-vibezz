"use client"

import { Footer } from '@/component/molecules';
import { Header } from '@/component/organisms';
import transition from '@/utilities/transition'
import Style from "./Times.module.scss";
import { Title } from '@/component/atoms';
import { MARKETING } from './array';

function Times() {
  return (
    <>
      <Header />
      <section className={Style.times}>
        <Title>Times</Title>
        <div className={Style.Marketing}>
          <div className='container'>
            <div className={Style.gridMarketing}>
              {MARKETING.map((data) => (
                <>
                  <div>
                    <img src={data.img} />
                  </div>
                  <div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
          {MARKETING.map((data) => (
            <div className={Style.bgMarketing}>
              <div className="container">
                <div className={Style.cardFlex}>
                  {data.data.map((data) => (
                    <div className={Style.card}>
                      <div className={Style.img}>
                        <img src={data.img} />
                      </div>
                      <div className={Style.text}>
                        <h3>{data.title}</h3>
                        <p>{data.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
export default transition(Times);