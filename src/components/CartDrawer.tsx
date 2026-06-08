import { siteConfig } from "@/config/site";
import type { CartItem } from "@/types";

const money = (value: number) => `$${value.toFixed(2)}`;

type Props = {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
  onNotes: (id: string, notes: string) => void;
  onClear: () => void;
};

export function CartDrawer({
  open,
  items,
  onClose,
  onIncrease,
  onDecrease,
  onRemove,
  onNotes,
  onClear,
}: Props) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const sendOrder = () => {
    if (!items.length) return;
    const lines = items.map((item, index) => {
      const note = item.notes.trim() ? `\n   Nota: ${item.notes.trim()}` : "";
      return `${index + 1}. ${item.quantity} x ${item.product.name} - ${money(item.product.price * item.quantity)}${note}`;
    });
    const message = [
      `Hola ${siteConfig.name}, quiero hacer este pedido:`,
      "",
      ...lines,
      "",
      `Total estimado: ${money(total)}`,
      "¿Me confirman disponibilidad y tiempo de entrega?",
    ].join("\n");
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <button className={`drawer-backdrop ${open ? "show" : ""}`} onClick={onClose} aria-label="Cerrar pedido" type="button" />
      <aside className={`drawer ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="drawer-header">
          <div>
            <p className="eyebrow dark">Tu pedido</p>
            <h2>Arma el combo</h2>
          </div>
          <button className="close-button" onClick={onClose} type="button">×</button>
        </div>

        <div className="drawer-content">
          {!items.length && (
            <div className="empty-cart">
              <span>🛒</span>
              <h3>El pedido está vacío</h3>
              <p>Agrega algo del menú y aquí podrás cambiar cantidades o dejar notas.</p>
            </div>
          )}

          {items.map((item) => (
            <article className="cart-item" key={item.product.id}>
              <div className="cart-emoji">{item.product.emoji}</div>
              <div className="cart-info">
                <div className="cart-line">
                  <strong>{item.product.name}</strong>
                  <button onClick={() => onRemove(item.product.id)} type="button">Quitar</button>
                </div>
                <small>{money(item.product.price)} c/u</small>
                <div className="quantity">
                  <button onClick={() => onDecrease(item.product.id)} type="button">−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onIncrease(item.product.id)} type="button">+</button>
                  <b>{money(item.product.price * item.quantity)}</b>
                </div>
                <input
                  aria-label={`Nota para ${item.product.name}`}
                  placeholder="Ej: sin cebolla"
                  value={item.notes}
                  onChange={(event) => onNotes(item.product.id, event.target.value)}
                />
              </div>
            </article>
          ))}
        </div>

        <div className="drawer-footer">
          <div className="total-line"><span>Total estimado</span><strong>{money(total)}</strong></div>
          <button className="button primary full" disabled={!items.length} onClick={sendOrder} type="button">
            Enviar pedido por WhatsApp
          </button>
          {items.length > 0 && <button className="clear-button" onClick={onClear} type="button">Vaciar pedido</button>}
        </div>
      </aside>
    </>
  );
}
