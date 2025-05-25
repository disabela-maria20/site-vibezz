
import { Home } from '@/component/templates';
import { Metadata } from 'next';

import React, { Suspense } from 'react'

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
