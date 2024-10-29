/* eslint-disable @next/next/no-img-element */
import { Cta, Title } from "@/component/atoms";
import Style from "./HomeProcess.module.scss";
import './style.scss';
import { Ciculo } from "@/component/atoms/Icons";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";

export interface DataItem {
  id: number;
  name: string;
  paragraph: string;
}

const ROTATIONS: any = {
  0: 250, // Análise
  1: 178, // Conexão
  2: 105, // Iniciativa
  3: 35, // Planejamento
  4: 320, // Execução
};

const PROCESS: DataItem[] = [
  {
    id: 0,
    name: 'Análise',
    paragraph: 'O fluxo e dados gerados parte para toda a cadeia que se repete e se retroalimenta, assim, buscando otimizar toda a estratégia e planejamento.',
  },
  {
    id: 1,
    name: 'Conexão de dados',
    paragraph: 'Para validarmos nossas hipóteses e alternativas de execução, conexão com os dados são primordiais. Pesquisas podem ser feitas a partir de grupos focais, bem como análise de base de dados de diferentes canais, sejam de comunicação, mídia, vendas, internos, etc.',
  },
  {
    id: 2,
    name: 'Iniciativa',
    paragraph: 'A partir da imersão nos dados, as iniciativas surgem ou podem ser validadas, a partir disso diretrizes são definidas, bem como os nossos objetivos e o que precisamos de fato encarar como resultados.',
  },
  {
    id: 3,
    name: 'Planejamento',
    paragraph: 'A partir das hipóteses e dados validados, partimos para o que de fato queremos executar, buscando métodos que conectem a esfera estratégica, passando pela tática e operacional.',
  },
  {
    id: 4,
    name: 'Execução',
    paragraph: 'Entra em jogo todo o time que encara a rotina, os canais, e todas as suas singularidades para conectar todo o fluxo do que queremos fazer e como faremos isso acontecer.',
  },
];

const HomeProcess = () => {
  const circulo = useRef<HTMLDivElement | null>(null);
  const [componente, setComponente] = useState<DataItem>(PROCESS[0]);
  const [rotation, setRotation] = useState(0);
  const [isPending, startTransition] = useTransition();
  const [activeItem, setActiveItem] = useState<Element | null>(null); 

  const handlePathClick = useCallback((item: Element, index: number) => {
    startTransition(() => {
      setComponente(PROCESS[index]);
      const newRotation = ROTATIONS[index];
      setRotation(newRotation);

      if (activeItem) {
        activeItem.classList.remove('active');
      }

      item.classList.add('active');
      setActiveItem(item); 
    });
  }, [activeItem]);

  useEffect(() => {
    const paths = circulo.current?.querySelectorAll("#Layer_1 g path");
    if (paths) {
      paths.forEach((item, index) => {
        const handleClick = () => handlePathClick(item, index);
        item.addEventListener('click', handleClick);

        return () => {
          item.removeEventListener('click', handleClick);
        };
      });
    }
  }, [handlePathClick]);

  return (
    <section className={Style.processArea}>
      <div className="container">
        <div className={Style.title}>
          <Title>apoiamos você desde o início</Title>
        </div>
        <div className={Style.process}>
          <div className="area-circulo">
            <div
              ref={circulo}
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.6s ease-in-out',
                width: '90%',
              }}
              className="circulo"
            >
              <Ciculo />
            </div>
            <div className="img-icon">
              <img src="/images/illustration/vibezz-icon.svg" alt="Icone Vibezz" />
            </div>
          </div>
          {componente && (
            <div className={Style.areaProcess}>
              <h2>{componente.name}</h2>
              <p>{componente.paragraph}</p>
            </div>
          )}
        </div>
      </div>
      <Cta>
        Vamos Conversar?
      </Cta>
    </section>
  );
};

export default HomeProcess;
