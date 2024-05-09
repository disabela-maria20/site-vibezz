/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from "framer-motion"

import { Title } from "@/component/atoms"
import Style from "./HomeProcess.module.scss"
import './style.scss'
import { useRef } from "react";
import { useView } from "@/utilities/hooks/useView"

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

const boxVariant = (delay: number) => {
  return {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: delay * 0.3 } },
    hidden: { opacity: 0, scale: 0},
    exit: { opacity: .7, transition: { duration: 0.5 } }
  }
}
  
const HomeProcess = () => {
  const container = useRef(null)
  const { control } = useView(container)

  return (
    <section className={Style.processArea} ref={container}>
      <div className="container" >
        <div className={Style.title}>
          <Title>
            apoiamos você desde o início
          </Title>
        </div>
        <div className={Style.process}>
          {PROCESS.map((data) => (
            <motion.div
              ref={container}
              variants={boxVariant(data.id)}
              initial="hidden"
              animate={control}
              key={data.id}
              id={data.style}
              className={Style.areaProcess}>
              <span>{data.id}</span>
              <div>
                <h2>{data.name}</h2>
                <p>{data.paragraph}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeProcess
