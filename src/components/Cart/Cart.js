import classes from "./Cart.module.css";

const Cart = () => {
  const cartItem = [
    {
      id: "c1",
      name: "Sushi",
      amount: 2,
      price: 12.99,
    },
  ].map((item) => <li>{item.name}</li>);
  return (
    <div className={classes.cart}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.61</span>
      </div>
      <div className={classes.actions}>
        <button>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};
export default Cart;
