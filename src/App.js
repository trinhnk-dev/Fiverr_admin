import logo from "./logo.svg";
import "./App.css";
import Admin from "./features/components/Admin";
import Customer from "./features/components/Customer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} /> 
          <Route path="/customer" element={<Customer />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
