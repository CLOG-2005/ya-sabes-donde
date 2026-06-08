type Props = {
  cartCount: number;
  onOpenCart: () => void;
};

export function Navbar({ cartCount, onOpenCart }: Props) {
  return (
    <nav className="navbar">
      <a className="brand" href="#inicio">
        <span>YSD</span>
        <strong>Ya Sabes Donde!</strong>
      </a>
      <div className="nav-links">
        <a href="#menu">Menú</a>
        <a href="#nosotros">Nosotros</a>
        <a href="#ubicacion">Ubicación</a>
      </div>
      <button className="cart-button" onClick={onOpenCart} type="button">
        Pedido <b>{cartCount}</b>
      </button>
    </nav>
  );
}
