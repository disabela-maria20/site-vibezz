'use client'

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Style from './Loading.module.scss'

const Loading = () => {
  return (
    <section className={Style.loadingArea}>
      <DotLottieReact
        src="./loading.json"
        loop
        autoplay
      />
    </section>
  )
}

export default Loading 