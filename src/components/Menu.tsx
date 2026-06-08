import { categories, products } from "@/data/products";
import type { Category, Product } from "@/types";
import { useMemo, useState } from "react";

const money = (value: number) => `$${value.toFixed(2)}`;

type Props = { onAdd: (product: Product) => void };

export function Menu({ onAdd }: Props) {
  const [category, setCategory] = useState<Category>("Todos");
  const visible = useMemo(
    () => products.filter((product) => category === "Todos" || product.category === category),
    [category],
  );

  return (
    <section className="section menu-section" id="menu">
      <div className="section-title">
        <div>
          <p className="eyebrow dark">Menú</p>
          <h2>Escoge lo que te provoca</h2>
        </div>
        <p>Filtra por categoría y agrega productos a tu pedido.</p>
      </div>
      <div className="filters">
        {categories.map((item) => (
          <button className={item === category ? "active" : ""} key={item} onClick={() => setCategory(item)} type="button">
            {item}
          </button>
        ))}
      </div>
      <div className="product-grid">
        {visible.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image"><span>{product.emoji}</span></div>
            <div className="product-content">
              <div className="product-name">
                <h3>{product.name}</h3>
                {product.tag && <small>{product.tag}</small>}
              </div>
              <p>{product.description}</p>
              <div className="product-bottom">
                <strong>{money(product.price)}</strong>
                <button onClick={() => onAdd(product)} type="button">Agregar +</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
