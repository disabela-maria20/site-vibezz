
import { Metadata } from 'next';
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

const Home = dynamic(() => import('@/component/templates/Home'), { ssr: false })

export const metadata: Metadata = {
  title: 'Vibezz',
  description: 'The official Next.js Course Dashboard, built with App Router.',
};

const pageHome = () => {
  return (
    <Suspense fallback={<p>Carregango</p>}>
      <Home />
    </Suspense>
  )
}

export default pageHome
