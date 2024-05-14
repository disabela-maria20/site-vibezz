'use client'

import useIsMobile from '@/utilities/hooks/useIsMobile'
import dynamic from 'next/dynamic'
import React, { Suspense } from 'react'

const Home = dynamic(() => import('@/component/templates/Home'), { ssr: false })

const pageHome = () => {
  const {isMobile} =  useIsMobile()

  return <Suspense fallback={<p>Carregango</p>}>
     <Home/>
  </Suspense>
}

export default pageHome
