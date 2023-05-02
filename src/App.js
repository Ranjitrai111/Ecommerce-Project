import { Home } from "./page/Home";
import {Carts} from "./page/Carts"
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Store from "./Store";
import { LoginPage } from "./page/LoginPage";
import { SignIn } from "./page/SignIn";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Payment } from "./components/Payment";




function App() {
  return (
    <Router>
    <Provider store={Store}>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Carts" element={<Carts/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/Body" element={<Body/>} />
        <Route path="/footer" element={<Footer/>} />
        <Route path="/payments" element={<Payment/>}/>
     

       
        
      </Routes>
    </Provider>
     
    </Router>
  );
}

export default App;
