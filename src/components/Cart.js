// import { useCart } from '../components/CartContext';

// const Cart = () => {
//   const { cartItems } = useCart();

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div key={index}>
//             <p>{item.name}</p>
//             {/* optionally show quantity, price, etc. */}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;



// import { useCart } from '../components/CartContext';
// import "../../i.css";

// const Cart = () => {
//   const { cartItems } = useCart();

//   return (
//     <div>
//       <h2>Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>No items in cart.</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <div key={index} className="cart-item">
//             <h3>{item.name}</h3>
//             <p>Price: ₹{item.price / 100 || item.defaultPrice / 100}</p>
//             {item.description && <p>{item.description}</p>}
//             {item.imageId && (
//               <>
//               <img
//                 src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
//                 alt={item.name}
//                 style={{ width: "100px", height: "100px" }}
//               />
//                <button className="add-btn"  onClick={() => addToCart(item.card.info)}>+</button>
//                <button className="add-btn"  onClick={() => addToCart(item.card.info)}>-</button>
//               </>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;




import { useCart } from '../components/CartContext';
import "../../i.css";
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
  
  const { cartItems, addToCart, removeFromCart } = useCart(); // Ensure removeFromCart is available
  const navigate = useNavigate(); // ✅ use hook

  const order = (item) => {
    navigate("/order", { state: { orderItem: item } }); // ✅ use hook to navigate
  };

  return (
    <div className="menu"> {/* Centering layout like ResMenu */}
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            
            <div className="menu-text">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price / 100 || item.defaultPrice / 100}</p>
              {item.description && <p>{item.description}</p>}
              <div>
                <button className="add-btn" onClick={() => addToCart(item)}>+</button>
                <span style={{ margin: "0 8px" }}>{item.quantity}</span>
                <button className="add-btn" onClick={() => removeFromCart(item)}>-</button>
                <button className="add-btn" onClick={() => order(item)}>Order</button>
              </div>
            </div>

            <div className="menu-image-section">
              {item.imageId && (
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.imageId}`}
                  alt={item.name}
                />
              )}
            </div> 
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
