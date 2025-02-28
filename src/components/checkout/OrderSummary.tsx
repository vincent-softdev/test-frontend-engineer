import { useCartStore } from "@/store/useCartStore";

// ✅ Summary what user has ordered
const OrderSummary = () => {
  const { cart } = useCartStore();
  const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Order Summary</h2>
      <ul className="mb-4">
        {cart.map((item) => (
          <li key={item.product.id} className="flex justify-between">
            <span>
              {item.product.title} x {item.quantity}
            </span>
            <span>${(item.product.price * item.quantity).toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default OrderSummary;
