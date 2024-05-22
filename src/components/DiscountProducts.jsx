import Block1 from "../assets/Block1.png";
import Block2 from "../assets/Block2.png";
import Block3 from "../assets/Block3.png";
import Block4 from "../assets/Block4.png";
import Button from "./Button";

const DiscountProducts = () => {
  return (
    <div className="flex flex-col py-[4%] sm:flex-row gap-5 w-10/12 overflow-hidden">
      <div className="flex flex-col gap-5 sm:w-1/2">
        <div className="relative">
          <img src={Block1} alt="" className="" />
          <div className="absolute bottom-1 md:bottom-4 left-0 w-full h-full flex items-end justify-center">
            <div className="bg-white text-center w-[80%] py-2 lg:py-5 flex flex-col items-center gap-3 sm:gap-1 lg:gap-3">
              <h3>Bravo Sunglasses</h3>
              <p className="md:mb-3">Up to 80% off on selected item</p>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Block2} alt="" />
          <div className="absolute bottom-1 md:bottom-4 left-0 w-full h-full flex items-end justify-center">
            <div className="bg-white text-center w-[80%] py-2 lg:py-5 flex flex-col items-center gap-3 sm:gap-1 lg:gap-3">
              <h3>Bravo Sunglasses</h3>
              <p className="md:mb-3">Up to 80% off on selected item</p>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 sm:w-1/2">
        <div className="relative">
          <img src={Block3} alt="" />
          <div className="absolute bottom-1 md:bottom-4 left-0 w-full h-full flex items-end justify-center">
            <div className="bg-white text-center w-[80%] py-2 lg:py-5 flex flex-col items-center gap-3 sm:gap-1 lg:gap-3">
              <h3>Bravo Sunglasses</h3>
              <p className="md:mb-3">Up to 80% off on selected item</p>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={Block4} alt="" />
          <div className="absolute bottom-1 md:bottom-4 left-0 w-full h-full flex items-end justify-center">
            <div className="bg-white text-center w-[80%] py-2 lg:py-5 flex flex-col items-center gap-3 sm:gap-1 lg:gap-3">
              <h3>Bravo Sunglasses</h3>
              <p className="md:mb-3">Up to 80% off on selected item</p>
              <Button>Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProducts;
