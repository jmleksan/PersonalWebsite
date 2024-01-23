

import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./pages/Layout"; 
import Home from "./pages/Home"; 
import Resume from "./pages/Resume"; 
import Contact from "./pages/Contact"; 
import NoPage from "./pages/NoPage"; 
import "./App.css";
export default function App() {
    return (
           <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="Resume" element={<Resume />} />
                      <Route path="Contact" element={<Contact />} />
                      <Route path="*" element={<NoPage />} />         
                    </Route>       
                  </Routes>     
            </BrowserRouter>   
    ); } 
