/* eslint-disable @next/next/no-img-element */
'use client'

import { Title } from "@/component/atoms"
import Style from "./HomeProcess.module.scss"
import './style.scss'

const PROCESS = [
  {
    id: 1,
    name: 'Ideia',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    style: 'ideia'
  },
  {
    id: 2,
    name: 'Pesquisa',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    style: 'pesquisa'
  },
  {
    id: 3,
    name: 'Planejamento',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    style: 'planejamento'
  },
  {
    id: 4,
    name: 'Execução',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    style: 'execucao'
  },
  {
    id: 5,
    name: 'Análise',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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
        </div>
      </div>
    </section>
  )
}

export default HomeProcess
