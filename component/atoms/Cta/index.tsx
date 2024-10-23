import React from 'react'
import Style from './Cta.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {
  children?: React.ReactNode
}

const Cta = ({ children }: Props) => {
  return (
    <motion.div whileHover={{
      scale: 1.13,
      transition: { duration: 0.25 }
    }}
      whileTap={{
        scale: 1.13,
        transition: { duration: 0.9 }
      }}
      className={Style.cta} >
      <Link href="/contato">{children}</Link>
    </motion.div>
  )
}

export default Cta