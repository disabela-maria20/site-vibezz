

import { Home } from '@/component/templates';
import { Metadata } from 'next';

import React from 'react'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Agência full service que conecta dados, marketing e tecnologia para transformar seu planejamento em resultados reais.',
  keywords: ['Marketing', 'Dados', 'Tecnologia', 'Planejamento', 'Resultados', 'Vibezz'],
  openGraph: {
    title: 'Home',
    description: 'Agência full service que conecta dados, marketing e tecnologia para transformar seu planejamento em resultados reais.',
    url: 'https://www.vibezz.com.br',
    siteName: 'Vibezz',
    images: [
      {
        url: 'https://www.vibezz.com.br/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vibezz - Agência Full Service'
      }
    ],
    locale: 'pt-BR',
    type: 'website'
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'pt-Br': '/pt-BR',
      'es': '/es'
    },
  },
};

const pageHome = () => {
  return (
    <Home />
  )
}

export default pageHome
