
import dynamic from 'next/dynamic'
import React from 'react'

const Home = dynamic(() => import('@/component/templates/Home'), { ssr: false })

const pageHome = () => {
  return <Home/>
}

export default pageHome
