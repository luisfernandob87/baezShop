import "../styles/footer.css";
import facebook from "../assets/facebook_white.svg";
import instagram from "../assets/instagram_white.svg";
import tiktok from "../assets/tiktok_white.svg";
function Footer() {
  return (
    <footer>
      <div className="containerFooter">
        <div>
          <h5>Acerca de </h5>
          <ul>
            <li>Quienes somos</li>
            <li>Terminos y condiciones</li>
            <li>Política de privacidad</li>
          </ul>
        </div>
        <div>
          <h5>Ayuda</h5>
          <ul>
            <li>Preguntas frecuentes</li>
            <li>Como comprar</li>
          </ul>
        </div>
        <div>
          <h5>Contacto</h5>
          <ul>
            <li>Escribenos en Whatsapp</li>
            <li>Envíanos un email</li>
            <li>Horarios</li>
            <li>Tel: 0000-0000</li>
          </ul>
        </div>
        <div>
          <h5>LOGO</h5>
          <div className="containerIconos">
            <img src={instagram} alt="Icono Instagram" />
            <img src={facebook} alt="Icono Facebook" />
            <img src={tiktok} alt="Icono Tik Tok" />
          </div>
        </div>
      </div>
      <p>Copyright © 2023</p>
    </footer>
  );
}

export default Footer;
