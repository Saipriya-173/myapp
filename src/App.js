import Header from "./components/Header";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register"
import Products from "./components/Products";
import Footer from "./components/Footer";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App(props) {
  return (
    <div><BrowserRouter>
     <Header/>
     <Routes>
      <Route index element={<Products />}/>
      <Route path="home" element={<Products />}/>
      <Route path="cart" element={<Cart />}/>
      <Route path="login" element={<Login />}/>
      <Route path="register" element={<Register />}/>
     </Routes>
     <Footer/>   
     </BrowserRouter>   
    </div>
  );
}
export default App;