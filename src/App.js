import './App.css';
import Titulo from "./components/titulo";
import NavBar from "./components/navbar";
import ItemListContainer from "./components/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";

// Importamos el contexto exportado en un modulo aparte.
import CartContextProvider from "./context/cartContext.js";

function App() {
 

  return (
    // El metodo PROVIDER va a proveer a mis hijos, funciones y estados a nivel global
    <CartContextProvider>
      <BrowserRouter>
        <div className="gradient leading-relaxed tracking-wide flex flex-col">
            <NavBar appName="Tienda DeTodo" />
            <Titulo title="DeTodo.com" subtitle="Eso que buscábas y no encontrabas, lo conseguís acá!"/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
              <Route exact path="/product/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
