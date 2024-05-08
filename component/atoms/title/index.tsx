import { useEffect, useRef } from "react"
import S from "./title.module.scss"
import { motion, useAnimation, useInView } from "framer-motion"
import { useView } from "@/utilities/hooks/useView"
type Props = {
  children: React.ReactNode
}

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.6},
  exit: { opacity: .7, transition: { duration: 0.5 } }
}


const Title = ({ children }: Props) => {
  const ref = useRef(null)
  const { control } = useView(ref)

  return (
    <motion.h1
      className={S.title}
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >{children}</motion.h1>

  )
}

export default Title
