import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Button from "./Button";
import bg from "../assets/Bg.png";
import oval from "../assets/Oval.png";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import BuyEasyStep from "./BuyEasyStep";

function Banner() {
  const slides = [slider1, slider2, slider3, slider4];

  const [currentIndex, setCurrentIndex] = useState(0);
  // Functions for right arrow and left arrow
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  // Functions for right arrow and left arrow

  // Function dots
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  // Function dots

  return (
    <div className="w-full mb-[16%]">
      <div
        style={{
          background: `url(${bg})`,
        }}
        className="w-full flex items-end h-[250px] sm:h-[400px] md:h-[600px] lg:h[918px] relative group"
      >
        <div className="w-full h-full flex items-center justify-center absolute">
          <img src={oval} alt="oval" className=" w-2/5" />
          <div className="w-full absolute bottom-0 left-[4%] flex items-center justify-center">
            <img src={slides[currentIndex]} alt="" className="w-5/12" />
          </div>
        </div>
        <div className="absolute top-[30%] md:top-[40%] left-[5%] md:left-[10%] flex flex-col gap-5 md:gap-10 items-start max-w-[200px] md:max-w-[400px]">
          <h3 className="text-xl md:text-4xl font-bold text-[#383838]">
            Personalized Eyeglass Shopping
          </h3>
          <Button>Buy Now</Button>
        </div>
        {/* <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div> */}
        {/* Left Arrow */}
        {/* <div className="hidden group-hover:block absolute bottom-5 -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div> */}
        {/* Right Arrow */}
        {/* <div className="hidden group-hover:block absolute bottom-5 -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}
        <div className="absolute flex flex-col top-[40%] right-[2%] justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-3xl cursor-pointer ${
                currentIndex === slideIndex
                  ? "text-orange-300"
                  : "text-gray-500"
              }`}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
      <BuyEasyStep />
    </div>
  );
}

export default Banner;
