'use client'

import transition from '@/utilities/transition'
import dynamic from 'next/dynamic'
import React from 'react'

const Home = dynamic(() => import('@/component/templates/Home'), { ssr: false })

const pageHome = () => {
  return <Home/>
}

export default transition(pageHome)
