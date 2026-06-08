import { siteConfig } from "@/config/site";

export function InfoSections() {
  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.address);
      window.alert("Dirección copiada");
    } catch {
      window.alert(siteConfig.address);
    }
  };

  return (
    <>
      <section className="section story" id="nosotros">
        <div className="story-card">
          <p className="eyebrow">Nuestra idea</p>
          <h2>Comida sin tanta vuelta, pero con bastante sabor.</h2>
          <p>
            Ya Sabes Donde nació como una propuesta de comida rápida para quienes buscan
            algo contundente en la noche. El menú se mantiene sencillo, con productos que
            se pueden pedir directamente desde la página.
          </p>
        </div>
        <div className="story-points">
          <article>
            <span>01</span>
            <h3>Pedido directo</h3>
            <p>Armas el pedido en la web y lo envías por WhatsApp sin formularios largos.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Precios claros</h3>
            <p>El carrito calcula el total estimado antes de enviar el mensaje.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Hecho en Manta</h3>
            <p>Una identidad local pensada para pedidos nocturnos y atención cercana.</p>
          </article>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="section-title">
          <div>
            <p className="eyebrow dark">Reseñas</p>
            <h2>Lo que dicen del sabor</h2>
          </div>
        </div>
        <div className="reviews-grid">
          <blockquote>
            <div>★★★★★</div>
            <p>“La Bacon Jam tiene una mezcla distinta y el pedido llegó bien armado.”</p>
            <cite>Andrea M.</cite>
          </blockquote>
          <blockquote>
            <div>★★★★★</div>
            <p>“Las alitas estuvieron crocantes y pedir por WhatsApp fue rápido.”</p>
            <cite>Luis C.</cite>
          </blockquote>
          <blockquote>
            <div>★★★★★</div>
            <p>“Buen precio, porciones contundentes y atención directa.”</p>
            <cite>Mateo R.</cite>
          </blockquote>
        </div>
      </section>

      <section className="section location" id="ubicacion">
        <div className="location-copy">
          <p className="eyebrow">Ubicación</p>
          <h2>Estamos en Manta.</h2>
          <p>{siteConfig.address}</p>
          <p className="location-note">
            Antes de salir, confirma por WhatsApp el horario y la disponibilidad del día.
          </p>
          <div className="location-actions">
            <a className="button primary" href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">
              Abrir en Maps
            </a>
            <button className="button ghost light" onClick={copyAddress} type="button">
              Copiar dirección
            </button>
          </div>
        </div>
        <div className="map-card" aria-hidden="true">
          <span className="map-pin">●</span>
          <strong>Ya Sabes Donde!</strong>
          <small>Manta, Ecuador</small>
          <div className="map-road road-one" />
          <div className="map-road road-two" />
          <div className="map-road road-three" />
        </div>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>Ya Sabes Donde!</strong>
        <p>Hamburguesas, alitas, hot dogs y papas en Manta.</p>
      </div>
      <div className="footer-links">
        <a href="#menu">Menú</a>
        <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer">Ubicación</a>
      </div>
      <small>Proyecto desarrollado por Carlos Ortiz.</small>
    </footer>
  );
}
