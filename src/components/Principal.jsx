import "../styles/principal.css";
import productos from "../../products.json";
function Principal() {
  return (
    <main>
      <div className="containerProductos">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={producto.thumbnail} alt="Imagen Producto" />
            <h4>{producto.title}</h4>
            <p>$ {producto.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Principal;
