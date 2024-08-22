// src/hooks/useSlider.ts
import { useState } from "react";
import data from "./data.ts";

const useSlider = () => {
  const [curSlide, setCurSlide] = useState(0);

  const nextSlide = () => {
    const newIndex = curSlide === data.length - 1 ? 0 : curSlide + 1;
    setCurSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = curSlide === 0 ? data.length - 1 : curSlide - 1;
    setCurSlide(newIndex);
  };

  const goToSlide = (slide: number) => {
    setCurSlide(slide);
  };

  return { curSlide, nextSlide, prevSlide, goToSlide, data };
};

export default useSlider;
