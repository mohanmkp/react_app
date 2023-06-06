import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ProductDetail from "./pages/product_detail";


function App() {

return <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Navbar/> }>
       <Route path="/" element={ <Home/> }/>
       <Route path="/product" element={ <Home/> }/>
       <Route path="/product/:id" element={ <ProductDetail/> }/>

    </Route>
  </Routes>
</BrowserRouter>
}

export default App;

