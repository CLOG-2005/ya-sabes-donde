import { CartDrawer } from "@/components/CartDrawer";
import { Hero } from "@/components/Hero";
import { Footer, InfoSections } from "@/components/InfoSections";
import { Menu } from "@/components/Menu";
import { Navbar } from "@/components/Navbar";
import type { CartItem, Product } from "@/types";
import { useCallback, useMemo, useState } from "react";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addProduct = useCallback((product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...current, { product, quantity: 1, notes: "" }];
    });
    setCartOpen(true);
  }, []);

  const increase = useCallback((id: string) => {
    setCart((current) =>
      current.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const decrease = useCallback((id: string) => {
    setCart((current) =>
      current.flatMap((item) => {
        if (item.product.id !== id) return [item];
        if (item.quantity === 1) return [];
        return [{ ...item, quantity: item.quantity - 1 }];
      }),
    );
  }, []);

  const remove = useCallback((id: string) => {
    setCart((current) => current.filter((item) => item.product.id !== id));
  }, []);

  const updateNotes = useCallback((id: string, notes: string) => {
    setCart((current) =>
      current.map((item) =>
        item.product.id === id ? { ...item, notes } : item,
      ),
    );
  }, []);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.product.price * item.quantity, 0),
    [cart],
  );

  return (
    <>
      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero onOpenCart={() => setCartOpen(true)} />
        <div className="ticker" aria-hidden="true">
          <div>
            <span>Sabor de Manta</span><b>★</b><span>Pedidos por WhatsApp</span><b>★</b>
            <span>Hamburguesas y alitas</span><b>★</b><span>Sabor de Manta</span><b>★</b>
            <span>Pedidos por WhatsApp</span><b>★</b><span>Hamburguesas y alitas</span><b>★</b>
          </div>
        </div>
        <Menu onAdd={addProduct} />
        <section className="promo section">
          <div>
            <p className="eyebrow">Combo recomendado</p>
            <h2>Una Oklahoma, papas y bebida por $6.50.</h2>
            <p>Una opción sencilla para pedir rápido cuando no quieres pensarlo demasiado.</p>
          </div>
          <button
            className="button dark"
            onClick={() => {
              const combo: Product = {
                id: "combo-nocturno",
                name: "Combo Nocturno",
                category: "Hamburguesas",
                description: "Oklahoma, papas personales y bebida.",
                price: 6.5,
                emoji: "🍔",
                tag: "Combo",
              };
              addProduct(combo);
            }}
            type="button"
          >
            Agregar combo
          </button>
        </section>
        <InfoSections />
      </main>
      <Footer />

      {cartCount > 0 && (
        <button className="floating-cart" onClick={() => setCartOpen(true)} type="button">
          <span>{cartCount} producto{cartCount === 1 ? "" : "s"}</span>
          <strong>${cartTotal.toFixed(2)}</strong>
        </button>
      )}

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onIncrease={increase}
        onDecrease={decrease}
        onRemove={remove}
        onNotes={updateNotes}
        onClear={() => setCart([])}
      />
    </>
  );
}
