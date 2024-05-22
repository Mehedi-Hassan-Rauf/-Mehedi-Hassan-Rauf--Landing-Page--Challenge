import { FaSearch } from "react-icons/fa";
import { RiGlasses2Fill } from "react-icons/ri";
import { MdOutlinePayment } from "react-icons/md";
import { FaTruck } from "react-icons/fa";

const BuyEasyStep = () => {
  return (
    <div className="flex items-start justify-evenly mt-[-30px] sm:mt-[-50px] w-full text-gray-700 relative font-medium">
      <div className="flex flex-col w-[100px] sm:w-fit items-center justify-center gap-4 sm:gap-8">
        <div className=" bg-orange-300 rounded-full w-[50px] md:w-[110px] h-[50px] md:h-[110px] text-base md:text-2xl text-gray-700 flex items-center justify-center">
          <FaSearch />
        </div>
        <div className="flex flex-col items-center justify-center gap-3 text-gray-700">
          <h3 className=" text-gray-900 text-xs md:text-base font-bold">
            Search you sunglass
          </h3>
          <p className="text-xs">Shop Stylish Eyewear Now</p>
        </div>
      </div>
      <div className="flex flex-col w-[100px] sm:w-fit items-center justify-center gap-4 sm:gap-8">
        <div className=" bg-orange-300 rounded-full w-[50px] md:w-[110px] h-[50px] md:h-[110px] text-base md:text-2xl text-gray-700 flex items-center justify-center">
          <RiGlasses2Fill />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
          <h3 className=" text-gray-900 text-xs md:text-base font-bold">
            Select Sunglass
          </h3>
          <p className="text-xs">Shade Your Style</p>
        </div>
      </div>
      <div className="flex flex-col w-[100px] sm:w-fit items-center justify-center gap-4 sm:gap-8">
        <div className=" bg-orange-300 rounded-full w-[50px] md:w-[110px] h-[50px] md:h-[110px] text-base md:text-2xl text-gray-700 flex items-center justify-center">
          <MdOutlinePayment />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
          <h3 className=" text-gray-900 text-xs md:text-base font-bold">
            Make Payment
          </h3>
          <p className="text-xs">Securely Checkout Now</p>
        </div>
      </div>
      <div className="flex flex-col items-center w-[100px] sm:w-fit justify-center gap-4 sm:gap-8">
        <div className=" bg-orange-300 rounded-full w-[50px] md:w-[110px] h-[50px] md:h-[110px] text-base md:text-2xl text-gray-700 flex items-center justify-center">
          <FaTruck />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 text-gray-700">
          <h3 className=" text-gray-900 text-xs md:text-base font-bold">
            Received Product
          </h3>
          <p className="text-xs">See The World Clearly</p>
        </div>
      </div>
    </div>
  );
};

export default BuyEasyStep;
