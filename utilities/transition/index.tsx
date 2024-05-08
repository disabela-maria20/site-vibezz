"use Client"

import { motion } from "framer-motion"
import { FunctionComponent } from "react"

const transition = (OgComponent: FunctionComponent) => {
  const entradaVariants = {
    hidden: { x: "0%" },
    visible: { x: "100%" }
  }

  const saidaVariants = {
    hidden: { x: "0%" },
    visible: { x: "-100%" }
  }

  const transicao = { duration: 1, ease: [0.22, 1, 0.36, 1] }

  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={entradaVariants}
        transition={transicao}
      ></motion.div>

      <motion.div
        className="slide-out"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={saidaVariants}
        transition={transicao}
      ></motion.div>
    </>
  )
}
export default transition
