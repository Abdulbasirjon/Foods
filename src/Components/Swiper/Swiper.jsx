import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import slide1 from "./image copy 2.png";
import slide2 from "./image copy.png";
import slide3 from "./image.png";
import './Swiper.css';
export default function App() {
  const swiperRef = useRef(null);
  useEffect(() => {
    register();
    Object.assign(swiperRef.current, {
      autoplay: {
        delay: 4000, 
        disableOnInteraction: false, 
      },
      loop: true, 
      on: {
        slideChange(s) {
          console.log("Slide changed", s);
        },
      },
    });
    swiperRef.current.initialize();
  }, []);
  return (
    <swiper-container init="false" ref={swiperRef} className="mySwiper">
      <swiper-slide className="slider">
        <img src={slide1} alt="Slide 1" />
      </swiper-slide>
      <swiper-slide className="slider">
        <img src={slide2} alt="Slide 2" />
      </swiper-slide>
      <swiper-slide className="slider">
        <img src={slide3} alt="Slide 3" />
      </swiper-slide>
    </swiper-container>
  );
}