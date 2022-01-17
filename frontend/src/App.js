import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducto from './components/AddProducto';
import NotFound from "./components/NotFound";
import ProductoList from "./components/ProductoList";

function App() {
  
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<ProductoList/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/add" element={<AddProducto/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;