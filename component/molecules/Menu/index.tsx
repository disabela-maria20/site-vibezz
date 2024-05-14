'use client'
import { useEffect, useState } from "react"

import Style from "./Menu.module.scss"
import { Logo, Nav } from "../../atoms"
import { stagger, useAnimate } from "framer-motion"
import useIsMobile from "@/utilities/hooks/useIsMobile"

function useMenuAnimation(open: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = open
      ? [
        [
          "nav",
          { transform: "translateX(0%)" },
          { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }
        ],
        [
          "li",
          { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
          { delay: stagger(0.05), at: "-0.1" }
        ]
      ]
      : [
        [
          "li",
          { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
          { delay: stagger(0.05, { from: "last" }), at: "<" }
        ],
        ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
      ];

    animate([
      ...menuAnimations as any
    ]);
  }, [open]);

  return scope;
}

const Menu = (): JSX.Element => {
  const {isMobile} =  useIsMobile()

  const [open, setOpen] = useState<boolean>(isMobile ? true : false)

  const scope = useMenuAnimation(open);

  return (
    <div ref={scope}>
      <div className={Style.bgNav}>
        <div className={Style.container}>
          <div className={Style.flexDeskTop}>
            <div className={Style.flexMobile}>
              <Logo />
              <div className={Style.burger} onClick={() => setOpen(!open)}>
                <span className={`${open ? Style.active : ""}`}></span>
                <span className={`${open ? Style.active : ""}`}></span>
                <span className={`${open ? Style.active : ""}`}></span>
              </div>
            </div>
            <Nav />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
