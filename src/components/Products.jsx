import { useState } from "react";
import { data } from "../Data";
import ProductItem from "./ProductItem";

const Products = () => {
  const [dataType, setDataType] = useState("Special");
  return (
    <div className="w-10/12 py-[4%] flex flex-col gap-14">
      <div className="flex flex-col sm:flex-row justify-between gap-5 sm:gap-0">
        <div className="w-full sm:w-6/12 flex flex-col gap-5">
          <h1 className="text-4xl font-bold">Our Products</h1>
          <p className=" text-gray-500 font-medium">
            Experience crystal clear vision and elevated style with our premium
            collection of eyeglasses.
          </p>
        </div>
        <div className="flex gap-3 items-end">
          <button
            className={`text-[#383838] border rounded-md border-[#383838] px-3 py-1`}
            onClick={() => setDataType("Latest")}
          >
            Latest
          </button>
          <button
            className={`text-[#383838] border rounded-md border-[#383838] px-3 py-1`}
            onClick={() => setDataType("Special")}
          >
            Special
          </button>
          <button
            className={`text-[#383838] border rounded-md border-[#383838] px-3 py-1`}
            onClick={() => setDataType("Best Sell")}
          >
            Best Sell
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-5 gap-y-14">
        {data.map(
          (item, i) =>
            dataType === item.type && <ProductItem item={item} key={i} />
        )}
      </div>
    </div>
  );
};

export default Products;
