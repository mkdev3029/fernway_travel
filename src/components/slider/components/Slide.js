import React from "react";
import { SlideSection} from "./SliderStyle";

const Slide = ({ info: { image}}) => {
  return (
    <SlideSection url={image}>
    </SlideSection>
  );
};

export default Slide;
