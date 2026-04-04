/*CartDrawer.tsx*/

import "./CartDrawer.css";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  return (
    <>
      {/* Backdrop */}
      {open && <div className="cart-backdrop" onClick={onClose}></div>}

      {/* Drawer */}
      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        <button className="cart-close" onClick={onClose}>
          ×
        </button>

        <h2 className="cart-title">Your Cart</h2>

        <p className="cart-empty">Your cart is empty.</p>

        {/* Later: map cart items here */}
      </aside>
    </>
  );
}
