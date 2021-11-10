import React, { Component, Fragment } from "react";
import Slide from "../components/Slide";
import { Pagination, Flex } from "../components/SliderStyle";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: [
        {
          id: "1",
          image:"https://media.istockphoto.com/photos/terraced-rice-field-in-mu-cang-chai-vietnam-picture-id624183176?k=20&m=624183176&s=612x612&w=0&h=b1BHT4sk9TnZozfiOo_V1TUgrJKxiUPB3osRHM7l0kU=",
        },
        {
          id: "2",
          image:
            "https://media.istockphoto.com/photos/peggys-cove-lighthouse-sunset-ocean-view-landscape-in-halifax-nova-picture-id953009874?k=20&m=953009874&s=612x612&w=0&h=qD8TeEGqslSVuiqRPTEAdSmlr163Hbcb9CvyJCLyA5A=",
        },
        {
          id: "3",
          image:
            "https://media.istockphoto.com/photos/kilchurn-sunset-picture-id622204296?k=20&m=622204296&s=612x612&w=0&h=7BDyJBiUqwjk2-GmdJgCJf7Xz9ZD4BgoXirJKyQdDTs=",
        },
        {
            id: "4",
            image:
              "https://media.istockphoto.com/photos/sunset-at-the-crisp-point-lighthouse-picture-id588382034?k=20&m=588382034&s=612x612&w=0&h=DtrouR3afUGIJ6efxn1iEV7x75qJkkg7vjRfVD3n2CA=",
          },
          {
            id: "5",
            image:
              " https://media.istockphoto.com/photos/famous-tuscany-landscape-with-curved-road-and-cypress-italy-europe-picture-id978368192?k=20&m=978368192&s=612x612&w=0&h=u8W4dcdxixdtGF8Slfa89qMyYAod_vNK3O7JUx55Aq8="
          }
      ],
      currentIndex: 0
    };
  }

  previousState = () => {
    const { slide, currentIndex } = this.state;
    if (currentIndex === 0) {
      return this.setState({ currentIndex: slide.length - 1 });
    }
    this.setState({ currentIndex: currentIndex - 1 });
  };

  nextState = () => {
    const { currentIndex, slide } = this.state;
    if (currentIndex === slide.length - 1) {
      return this.setState({ currentIndex: 0 });
    }
    this.setState({ currentIndex: currentIndex + 1 });
  };

  indexSlide = info => {
    const { id } = info;
    this.setState({ currentIndex: id - 1 });
  };

  render() {
    const { slide, currentIndex } = this.state;
    return (
      <Fragment>
        <Slide key={slide[currentIndex].id} info={slide[currentIndex]} />
        <Flex background>
          {slide.map(v => {
            let bgColor = "grey";
            if (currentIndex + 1 === +v.id) {
              bgColor = "white";
            }
            return (
              <Pagination
                key={v.id}
                bgColor={bgColor}
                onClick={() => this.indexSlide(v)}
              />
            );
          })}
        </Flex>
      </Fragment>
    );
  }
}

export default Slider;
