/* eslint-disable @next/next/no-img-element */
'use client'

import { Title } from "@/component/atoms"
import Style from "./HomeProcess.module.scss"

const HomeProcess = () => {
  const PROCESS = [
    {
      id: 1, 
      name: 'Ideia', 
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      style: Style.ideia
    },
    {
      id: 2, 
      name: 'Pesquisa', 
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      style: Style.pesquisa
    },
    {
      id: 3, 
      name: 'Planejamento', 
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      style: Style.planejamento
    },
    {
      id: 4, 
      name: 'Execução', 
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      style: Style.execucao
    },
    {
      id: 5, 
      name: 'Análise', 
      paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 
      style: Style.analise
    }
  ]
  return (
    <section>
      <div className="container">
        <div className={Style.title}>
          <Title>
            apoiamos você desde o início
          </Title>
        </div>
        <div className={Style.process}>
          {PROCESS.map((data) => (
            <div key={data.id} id={data.name} className={Style.areaProcess}>
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
