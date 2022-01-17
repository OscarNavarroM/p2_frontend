import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductoService from "../services/ProductoService";
import { Link } from "react-router-dom";

const ProductoList = () => {
    const [producto, setProducto] = useState([]);
    const [cantidad, setCantidad] = useState(0);
  
    useEffect(() => {
        init();
    }, [])

    const init = () => {
        ProductoService.getAll()
        .then(response => {
            setProducto(response.data);
            countProducto();
        })
    }

    const deleteProducto = (id) => {
        ProductoService.remove(id)
        .then(response => {
            //console.log("Producto eliminado exitosamente!", response.data);
            init();
        })
    }
    
    const countProducto = () => {
        ProductoService.count()
        .then(response => {
            setCantidad(response.data);
        })
    }
    
    return (
        <div className="container">
            <h1 className="text-center">Lista de productos</h1>
            <h3 className="text-center">Se han encontrado {cantidad} productos</h3>
            <hr/>
            <div>
                <Link to="/add" className="btn btn-primary mb-3">Agregar Producto</Link>
                <table className="table table-striped table-bordered ">
                <thead className="table-dark">
                    <tr>
                        <td>Código</td>
                        <td>Nombre</td>
                        <td>Categoría</td>
                        <td>Vencimiento</td>
                        <td>Precio</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                {
                    producto.map(producto => (
                    <tr key={producto.id}>
                        <td>{producto.codigo}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.categoria}</td>
                        <td >{producto.vencimiento.toString().substring(0,10)}</td>
                        <td>{producto.precio}</td>
                        <td>
                            <button className="btn btn-danger" onClick={(e) => deleteProducto(producto.id)}>Borrar</button>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
                </table>
            </div>
        </div>
  );
}

export default ProductoList;