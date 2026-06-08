import "@/status.css";
import { siteConfig } from "@/config/site";
import { useBusinessStatus } from "@/hooks/useBusinessStatus";

type Props = { onOpenCart: () => void };

export function Hero({ onOpenCart }: Props) {
  const status = useBusinessStatus();

  return (
    <header className="hero" id="inicio">
      <div className="hero-copy">
        <div className={`status-badge ${status.isOpen ? "open" : "closed"}`}>
          <span />
          <div>
            <strong>{status.label}</strong>
            <small>{status.detail}</small>
          </div>
        </div>
        <p className="eyebrow">Manta, Ecuador · sabor nocturno</p>
        <h1>El antojo ya sabe dónde encontrarte.</h1>
        <p>
          Hamburguesas, alitas, hot dogs y papas con pedidos directos por WhatsApp.
        </p>
        <div className="hero-actions">
          <button className="button primary" onClick={onOpenCart} type="button">
            Armar pedido
          </button>
          <a className="button ghost" href="#menu">Ver el menú</a>
        </div>
      </div>
      <div className="hero-food" aria-label="Ilustración de comida rápida">
        <div className="food-circle">🍔</div>
        <span className="sticker one">Desde $4</span>
        <span className="sticker two">Hecho en Manta</span>
      </div>
      <a className="maps-link" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
        Cómo llegar ↗
      </a>
    </header>
  );
}
