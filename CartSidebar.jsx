function CartSidebar({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem
}) {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{
      position: "fixed",
      right: isOpen ? "0" : "-300px",
      top: 0,
      width: "300px",
      height: "100vh",
      background: "white",
      borderLeft: "1px solid #ccc",
      padding: "10px",
      transition: "0.3s"
    }}>
      <button onClick={onClose}>Close</button>

      {cart.length === 0 && <p>Empty Cart</p>}

      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>${item.price}</p>

          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          {item.quantity}
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>

          <button onClick={() => onRemoveItem(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
  );
}

export default CartSidebar;