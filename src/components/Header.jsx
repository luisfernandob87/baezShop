import "../styles/header.css";
import cart from "../assets/cart_white.svg";
import cuenta from "../assets/user_white.svg";
import search from "../assets/search.svg";
function Header() {
  return (
    <header>
      <div className="containerHeader">
        <div>LOGO</div>
        <div className="containerInput">
          <div className="buscador">
            <img src={search} alt="Icono buscar" />
            <input type="text" placeholder="Buscar producto..." />
          </div>
        </div>
        <div className="containerIconos">
          <div className="icono">
            <img src={cuenta} alt="Icono Cuenta" />
            <span>Cuenta</span>
          </div>
          <div className="icono">
            <img src={cart} alt="Icono Carrito" />
            <span>Carrito</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
