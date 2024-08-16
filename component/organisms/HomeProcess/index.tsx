/* eslint-disable @next/next/no-img-element */
'use client'

import { Title } from "@/component/atoms"
import Style from "./HomeProcess.module.scss"
import './style.scss'
import { Fade } from "react-awesome-reveal"

const PROCESS = [
  {
    id: 1,
    name: 'Conexão de dados',
    paragraph: 'Para validarmos nossas hipóteses e alternativas de execução, conexão com os dados são primordiais. Pesquisas podem ser feitas a partir de grupos focais, bem como análise de base de dados de diferentes canais, sejam de comunicação, mídia, vendas, internos, etc.',
    style: 'ideia'
  },
  {
    id: 2,
    name: 'Iniciativa',
    paragraph: ' A partir da imersão nos dados, as iniciativas surgem ou podem ser validadas, a partir disso diretrizes são definidas, bem como os nossos objetivos e o que precisamos de fato encarar como resultados.',
    style: 'pesquisa'
  },
  {
    id: 3,
    name: 'Planejamento',
    paragraph: 'A partir das hipóteses e dados validados, partimos para o que de fato queremos executar, buscando métodos que conectem a esfera estratégica, passando pela tática e operacional.',
    style: 'planejamento'
  },
  {
    id: 4,
    name: 'Execução',
    paragraph: 'Entra em jogo todo o time que encara a rotina, os canais, e todas as suas singularidades para conectar todo o fluxo do que queremos fazer e como faremos isso acontecer. ',
    style: 'execucao'
  },
  {
    id: 5,
    name: 'Análise',
    paragraph: ' fluxo e dados gerados parte para toda a cadeia que se repete e se retroalimenta, assim, buscando otimizar toda a estratégia e planejamento. ',
    style: 'analise'
  }
]



const HomeProcess = () => {
  return (
    <section className={Style.processArea}>
      <div className="container">
        <div className={Style.title}>
          <Title>
            apoiamos você desde o início
          </Title>
        </div>
        <div className={Style.process}>
          <Fade direction='up' cascade  damping={0.5}>
            {PROCESS.map((data) => (
              <div
                key={data.id}
                id={data.style}
                className={Style.areaProcess}>
                <span>{data.id}</span>
                <div>
                  <h2>{data.name}</h2>
                  <p>{data.paragraph}</p>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default HomeProcess
