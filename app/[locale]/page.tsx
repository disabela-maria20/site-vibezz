

import { Home } from '@/component/templates';
import { Metadata } from 'next';

import React from 'react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Agência full service que conecta dados, marketing e tecnologia para transformar seu planejamento em resultados reais.',
  keywords: ['Marketing', 'Dados', 'Tecnologia', 'Planejamento', 'Resultados', 'Vibezz'],
};

const pageHome = () => {
  return (

    <Home />
  )
}

export default pageHome
