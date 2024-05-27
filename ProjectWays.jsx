import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProjectFile1 from "./ProjectFile1";
import Navbar from "./Navbar";
import Carts from "./Carts";
import Men from "./Men";
import Women from "./Women";
import Jewellery from "./Jewellery";
import Electronics from "./Electronics";
import AnyProduct from "./AnyProduct";

export default function ProjectWays(){
        return(
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<><Navbar/><ProjectFile1/></>}></Route>
                        <Route path='/carts' element={<><Navbar/><Carts/></>}></Route>
                        <Route path="/men's clothing" element={<><Navbar/><Men/></>}></Route>
                        <Route path="/women's clothing" element={<><Navbar/><Women/></>}></Route>
                        <Route path='/jewelery' element={<><Navbar/><Jewellery/></>}></Route>
                        <Route path='/electronics' element={<><Navbar/><Electronics/></>}></Route>
                        <Route path="/:pid" element={<><Navbar/><AnyProduct/></>}></Route>
                    </Routes>
                </BrowserRouter>
            </>
        )
}