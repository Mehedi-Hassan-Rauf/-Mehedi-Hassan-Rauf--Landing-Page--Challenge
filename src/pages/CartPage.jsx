import { useCartStore } from "../store/store";
import ProductItem from "../components/ProductItem";

const CartPage = () => {
  const { cart } = useCartStore((state) => ({
    cart: state.cart,
  }));
  return (
    <div className=" min-h-[50vh] py-[8%] flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold">Your Cart</h1>
      <div className="grid grid-cols-4 gap-2 gap-y-10 px-4 sm:px-10">
        {cart.map((item, i) => (
          <ProductItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CartPage;
