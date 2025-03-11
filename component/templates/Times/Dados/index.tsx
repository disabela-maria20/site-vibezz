/* eslint-disable @next/next/no-img-element */
"use client"

import { Title } from "@/component/atoms";
import { Footer, Slide } from "@/component/molecules";
import { Header } from "@/component/organisms";
import { Metadata } from "next";
import { Fade } from "react-awesome-reveal";
import Style from "./dados.module.scss";
import { Navigation, Pagination } from "swiper/modules";

export const metadata: Metadata = {
  title: 'Times de Marketing | Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

const SwiperOptions = {
  slidesPerView: 1,
  pagination: false,
  navigation: true,
  modules: [Navigation, Pagination],
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
}

const SwiperOptions1 = {
  slidesPerView: 1,
  pagination: true,
  navigation: true,
  modules: [Navigation, Pagination],
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 10
    }
  }
}

export const MERCADO = [
  {
    title: 'Inteligência de Mercado',
    text: "",
    img: "/images/fotos/close-up-caucasian-man-s-portrait-isolated-blue-studio-neon-light.png",
    data: [

      {
        id: 0,
        title: "Coleta e análise de Dados ",
        img: "/images/fotos/Coleta-e-analise-de-Dados.jpg",
        text: "A partir de inúmeras coletas vindas de diferentes fontes, mapeamos os dados referentes a consumo e comportamento de vendas. Assim, podemos buscar um entendimento 360, dos seus usuários e até mesmo mercado."
      },
      {
        id: 1,
        title: "Data Fusion e Insights Integrados",
        img: "/images/fotos/Data-Fusion-e-Insights-Integrados.jpg",
        text: "Unificamos bases de dados de diferentes canais e as cruzamos, a partir de tratamento desses dados, interpretamos suas funções, características e como podem se complementar."
      },
      {
        id: 2,
        title: "Construção, Aplicação e Análise de Pesquisa",
        img: "/images/fotos/Construcao-Aplicacao-Analise-de-Pesquisa.jpg",
        text: "A partir de diferentes oportunidades, que vão desde a descoberta de potenciais publicos, ou até mesmo seu aprofundamento, até a validação de campanhas e produtos, buscamos conectar aplicações de pesquisas a dados."
      },
      {
        id: 3,
        title: "Gestão e Arquitetura de Banco de Dados",
        img: "/images/fotos/coleta.jpg",
        text: "A quantidade de dados que são gerados por sistemas e diferentes ambientes muitas vezes precisam ser geridos da melhor forma em diversos pontos de vista. Para isso nosso time apoia em toda essa camada de gestão de Data Warehouse para que dados sejam ágeis, fáceis e seguros."
      },
      {
        id: 4,
        title: "Desenvolvimento de Data Products",
        img: "/images/fotos/Desenvolvimento-de-Data-Products.jpg",
        text: "A partir dos negócios e propósito dos nossos clientes, temos times habilitados a desenvolver diferentes produtos de análise de dados para múltiplos objetivos e canais"
      },
      {
        id: 5,
        title: "Implementação de Data Lakes",
        img: "/images/fotos/Implementacao-de-Data-Lakes.jpg",
        text: "Toda a arquitetura, implantação e governança de big data passa por nosso time que escala todos esses bancos e os conecta a um data lake."
      },
      {
        id: 6,
        title: "Storytelling com Dados",
        img: "/images/fotos/Storytelling-com-Dados.jpg",
        text: "Quanto mais dados temos, mais históricas precisamos construir e interpretar. Pensando nisso temos times especial."
      }

    ]
  }
]

function PageMarketing() {
  const empresas = [
    'PowerBI.png',
    'GoogleAnalyticsv.png',
    'GoogleTagManager.png',
    'SendGrid.png',

  ]
  return <>
    <Header />
    <section className={Style.times}>
      <div className={Style.Mercado}>
        <div className='container'>
          <div className={Style.gridMercado}>
            {MERCADO.map((data, i) => (
              <div key={i}>
                <Fade direction='left' delay={1} cascade>
                  <img src={data.img} />
                </Fade>
              </div>
            ))}

            {MERCADO.map((data, i) => (
              <div key={i}>
                <Fade direction='right' delay={1} cascade damping={0.1}>
                  <h2>{data.title}</h2>
                  <p>{data.text}</p>
                </Fade>
              </div>
            ))}
          </div>
        </div>

        <>
          {MERCADO.map((data) => (
            <div key={data.text} className={Style.bgMercado}>
              <div className="container">
                <Slide.Content className={Style.cardFlex} swiperOptions={SwiperOptions}>
                  {data.data.map((data) => (
                    <div className={Style.card} key={data.id}>
                      <div className={Style.img}>
                        <img src={data.img} />
                      </div>
                      <div className={Style.text}>
                        <h3>{data.title}</h3>
                        <p>{data.text}</p>
                      </div>
                    </div>
                  ))}
                </Slide.Content>
              </div>
            </div>
          ))}
        </>


        <div className={Style.slideTime}>
          <Title>Nossos times utilizam</Title>
          <>
            <div className="container">
              <Slide.Content className={Style.cardFlex} swiperOptions={SwiperOptions1}>
                {empresas.map(data => (
                  <img src={`/images/clientes/${data}`} key={data} alt="" />
                ))}
              </Slide.Content>
            </div>
          </>

        </div>
      </div>
    </section>
    <Footer />
  </>
}
export default PageMarketing
