import { useAnimation, useInView } from "framer-motion";
import { MutableRefObject, useEffect } from "react";

export  function useView(root: MutableRefObject<null>){
  const control = useAnimation();
  const isInView = useInView(root);

  useEffect(() => {    
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, isInView]);

  return {
    control, 
    isInView
  }
}