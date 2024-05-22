import { useState } from "react";
import PropTypes from "prop-types";
import bg from "../assets/Bg.png";
import { RxDotFilled } from "react-icons/rx";
import { useCartStore } from "../store/store";
import { useLocation } from "react-router-dom";

const ProductItem = ({ item }) => {
  const { removeFromCart } = useCartStore((state) => ({
    removeFromCart: state.removeFromCart,
  }));
  const location = useLocation();
  const { addToCart } = useCartStore((state) => ({
    addToCart: state.addToCart,
  }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="flex flex-col items-start gap-3">
      <div
        style={{ background: `url(${bg})` }}
        className="h-[160px] sm:h-[300px] lg:h-[400px] relative flex items-center justify-center px-[8%] sm:px-[5%]"
      >
        <img src={item.image[currentIndex]} alt="" />
        <div className="absolute bottom-0">
          <div className="flex">
            {item.image.map((slide, slideIndex) => (
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
      </div>
      <div className="text-xs sm:text-base flex flex-col items-start gap-1">
        <h3>{item.name}</h3>
        <div className="flex gap-2">
          <p className="text-gray-800 font-bold">${item.price}</p>
          <p className="text-gray-300 line-through decoration-2 decoration-gray-400 font-bold">
            ${item.price + 50}
          </p>
        </div>
        <button
          className={`${
            location.pathname === "/cart"
              ? "text-red-500 border-red-300"
              : "text-gray-500 border-gray-300"
          } hover:text-orange-300 border-b-2 hover:border-orange-300 duration-500`}
          onClick={() => {
            if (location.pathname === "/cart") {
              removeFromCart(item.id);
            } else {
              addToCart(item);
            }
          }}
        >
          {location.pathname === "/cart" ? "Remove From Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

// Defining propTypes
ProductItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
// Defining propTypes

export default ProductItem;
