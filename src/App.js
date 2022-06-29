import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import { ProductListing } from "./Components/ProductListing";
import { ProductDetails } from "./Components/ProductDetails";
import {NotFound} from './Components/NotFound'

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="" element={<ProductListing/>} />
          <Route path="/product/:pid" element={<ProductDetails/>} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
