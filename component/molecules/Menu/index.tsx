'use client'
import { useEffect, useState } from "react"

import Style from "./Menu.module.scss"
import {  Logo, Nav } from "../../atoms"
import { backIn, stagger, useAnimate } from "framer-motion"

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
      [
        "path.top",
        { d: open ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" }
      ],
      ["path.middle", { opacity: open ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: open ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" }
      ],
      ...menuAnimations as any
    ]);
  }, [open]);

  return scope;
}

const Menu = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(true)

  const scope = useMenuAnimation(open);  
  
  return (
    <div ref={scope}>
      <div className={Style.bgNav}>
        <div className={Style.container}>
          <div className={Style.flexDeskTop}>
            <div className={Style.flexMobile}>
              <Logo />
              <div className={Style.burger} onClick={() => setOpen(!open)}>
                <span className={`${!open ? Style.active : ""}`}></span>
                <span className={`${!open ? Style.active : ""}`}></span>
                <span className={`${!open ? Style.active : ""}`}></span>
              </div>
            </div>
            <Nav/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
