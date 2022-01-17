import { useState } from "react"
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ProductoService from "../services/ProductoService";

const AddProducto = () => {
    const[codigo, setCodigo] = useState('');
    const[nombre, setNombre] = useState('');
    const[categoria, setCategoria] = useState('');
    const[vencimiento, setVencimiento] = useState('');
    const[precio, setPrecio] = useState('');
    const navigate = useNavigate();
    
    const saveProducto = (e) => {
        e.preventDefault();

        const producto = {codigo, nombre, vencimiento, categoria, precio};
        ProductoService.create(producto)
        .then(response => {
            console.log("Producto agregado exitosamente!", response.data);
            navigate("/");
        })
    }
    return(
        <div className="container">
            <h2>Agregar producto</h2>
            <hr/>
            <form>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="codigo"
                        value={codigo}
                        onChange={(e) => setCodigo(e.target.value)}
                        placeholder="Ingresar código"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ingresar nombre"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="vencimiento"
                        value={vencimiento}
                        onChange={(e) => setVencimiento(e.target.value)}
                        placeholder="Ingresar fecha de vencimiento (yyyy-mm-dd)"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control col-4"
                        id="categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        placeholder="Ingresar categoría"
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control col-4"
                        id="precio"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                        placeholder="Ingresar precio"
                    />
                </div>
                <div>
                    <button className="btn btn-primary" onClick={(e) => saveProducto(e)}>Guardar</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Volver</Link>
        </div>
    )
}
export default AddProducto;