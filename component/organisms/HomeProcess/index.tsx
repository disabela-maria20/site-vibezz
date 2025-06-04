/* eslint-disable @next/next/no-img-element */
import { Cta, Title } from "@/component/atoms";
import Style from "./HomeProcess.module.scss";
import './style.scss';
import { Ciculo, CirculoEN } from "@/component/atoms/Icons";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

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

const HomeProcess = () => {
  const t = useTranslations('inicio');
  const b = useTranslations('btn');
  const PROCESS: DataItem[] = [
    {
      id: 0,
      name: t('areaapoiamosvoce.titulo1'),
      paragraph: t('areaapoiamosvoce.texto')
    },
    {
      id: 1,
      name: t('areaapoiamosvoce.titulo2'),
      paragraph: t('areaapoiamosvoce.texto2')
    },
    {
      id: 2,
      name: t('areaapoiamosvoce.titulo3'),
      paragraph: t('areaapoiamosvoce.texto3')
    },
    {
      id: 3,
      name: t('areaapoiamosvoce.titulo4'),
      paragraph: t('areaapoiamosvoce.texto4')
    },
    {
      id: 4,
      name: t('areaapoiamosvoce.titulo5'),
      paragraph: t('areaapoiamosvoce.texto5')
    },
  ];

  const circulo = useRef<HTMLDivElement | null>(null);
  const [componente, setComponente] = useState<DataItem>(PROCESS[0]);
  const [rotation, setRotation] = useState(0);
  const [, startTransition] = useTransition();
  const [activeItem, setActiveItem] = useState<Element | null>(null);

  const currentLocale = useLocale()


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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <Title>{t('areaapoiamosvoce.titulo')}</Title>
        </div>
        <div className={Style.process}>
          <div className="area-circulo">
            <div
              ref={circulo}
              style={{
                transform: `rotate(${rotation}deg) ${currentLocale == 'pt' ? '' : 'scale(1.2)'}`,
                transition: 'transform 0.6s ease-in-out',
                width: '90%',
              }}
              className="circulo"
            >
              {currentLocale == 'pt' ? <Ciculo /> : <CirculoEN />}

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
      <Cta>{b('cta')}</Cta>
    </section>
  );
};

export default HomeProcess;
