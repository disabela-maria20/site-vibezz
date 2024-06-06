import { Fade } from "react-awesome-reveal"
import S from "./title.module.scss"

type Props = {
  children: React.ReactNode
}

const Title = ({ children }: Props) => {
  return (
    <Fade direction="up" duration={1600} delay={0.6}>
      <h1 className={S.title} >{children}</h1>
    </Fade>
  )
}

export default Title
