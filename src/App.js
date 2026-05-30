import { useState } from "react";
import vaibav from "./vaibav.jpg";
import bodybuilder from "./bodybuilder.jpg";
import stare from "./stare.jpg";
import shy from "./shy.jpg";
import vekkam from "./vekkam.jpg";
import sus from "./sus.jpg";
import likesit from "./likesit.jpg";

const products = [
  { id: 1, name: "Bro thinks he's Vaibav Suryavamshi", price: 100, images: [vaibav] },
  { id: 2, name: "Musclase", price: 666, images: [bodybuilder] },
  { id: 3, name: "Death Stare", price: 999, images: [stare] },
  { id: 4, name: "Vekkam", price: 86, images: [shy] },
  { id: 5, name: "Aiyoo Vekkam", price: 8686, images: [vekkam] },
  { id: 6, name: "Dexter", price: 6969, images: [sus] },
  { id: 7, name: "*enjoys it*", price: 69, images: [likesit] },
];

function ProductCard({ product, onAdd }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        padding: "16px",
        textAlign: "center",
        width: "200px",
        backgroundColor: "white",
        boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.15)" : "0 2px 8px rgba(0,0,0,0.08)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}>
      <img
        src={product.images[0]}
        alt={product.name}
        style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px" }}
      />
      <h3 style={{ fontSize: "13px", margin: "10px 0 4px", color: "#222" }}>{product.name}</h3>
      <p style={{ color: "#00b894", fontWeight: "bold", fontSize: "16px", margin: "4px 0 12px" }}>₹{product.price}</p>
      <button onClick={() => onAdd(product)} style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        border: "none",
        padding: "10px 16px",
        borderRadius: "8px",
        cursor: "pointer",
        width: "100%",
        fontWeight: "bold",
        fontSize: "13px",
        transition: "opacity 0.2s"
      }}>
        Add to Cart 🛒
      </button>
    </div>
  );
}

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #f5f7fa, #c3cfe2)", fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* Navbar */}
      <nav style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ color: "white", margin: 0, fontSize: "22px" }}>🎨 My Art Shop</h1>
        <button onClick={() => setCartOpen(!cartOpen)} style={{
          background: "white",
          color: "#764ba2",
          border: "none",
          padding: "10px 20px",
          borderRadius: "20px",
          fontWeight: "bold",
          cursor: "pointer",
          fontSize: "14px"
        }}>
          🛒 Cart ({cart.length})
        </button>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: "center", padding: "50px 20px 30px" }}>
        <h2 style={{ fontSize: "32px", color: "#333", margin: 0 }}>Hope u enjoy 😏</h2>
        <p style={{ color: "#666", marginTop: "8px" }}>Handpicked art just for you</p>
      </div>

      {/* Products */}
      <div style={{ display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap", padding: "0 40px 60px" }}>
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={addToCart} />
        ))}
      </div>

      {/* Cart Sidebar */}
      {cartOpen && (
        <div style={{
          position: "fixed",
          top: 0, right: 0,
          width: "320px",
          height: "100vh",
          background: "white",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.15)",
          padding: "24px",
          overflowY: "auto",
          zIndex: 1000
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h2 style={{ margin: 0 }}>🛒 Cart</h2>
            <button onClick={() => setCartOpen(false)} style={{
              background: "none", border: "none", fontSize: "22px", cursor: "pointer"
            }}>✕</button>
          </div>

          {cart.length === 0 ? (
            <p style={{ color: "#999", marginTop: "30px", textAlign: "center" }}>Your cart is empty 😢</p>
          ) : (
            <>
              {cart.map((item, index) => (
                <div key={index} style={{
                  display: "flex", justifyContent: "space-between",
                  padding: "12px 0", borderBottom: "1px solid #eee"
                }}>
                  <span style={{ fontSize: "13px", color: "#333" }}>{item.name}</span>
                  <span style={{ fontWeight: "bold", color: "#00b894" }}>₹{item.price}</span>
                </div>
              ))}
              <div style={{ marginTop: "20px" }}>
                <h3 style={{ color: "#333" }}>Total: ₹{total}</h3>
                <button onClick={clearCart} style={{
                  backgroundColor: "#ff4444",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  width: "100%",
                  fontWeight: "bold"
                }}>
                  Clear Cart 🗑️
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Footer */}
      <footer style={{
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        color: "white",
        textAlign: "center",
        padding: "20px",
        fontSize: "14px"
      }}>
        Made with ❤️ | My Art Shop © 2026
      </footer>

    </div>
  );
}

export default App;