import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./Fullpage.scss";

const Fullpage = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentScrollBarPos, setCurrentScrollBarPos] = useState(0);

  useEffect(() => {
    const slide = document.querySelector(".fullpage .active");
    if (slide) console.log(slide.offsetTop);
  }, [currentSlide]);

  let scrollScreen;

  const slideChange = posStatus => {
    console.log(
      posStatus,
      currentSlide,
      children.length,
      currentSlide > children.length,
      currentSlide < children.length
    );
    if (posStatus === "up" && currentSlide < children.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else if (posStatus === "down" && currentSlide < children.length) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleScroll = e => {
    setCurrentScrollBarPos(e.currentTarget.scrollTop);
    clearTimeout(scrollScreen);
    scrollScreen = setTimeout(
      slideChange(
        e.currentTarget.scrollTop > currentScrollBarPos ? "up" : "down"
      ),
      800
    );
  };

  return (
    <div className="fullpage" onScroll={handleScroll}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          id: `slide_${index}`,
          setCurrentSlide,
          currentSlide
        })
      )}
    </div>
  );
};

Fullpage.Slide = ({ children, id, currentSlide }) => {
  return (
    <section
      className={classnames("slide", id, {
        active: id === `slide_${currentSlide}`
      })}
    >
      {children}
    </section>
  );
};

export default Fullpage;
