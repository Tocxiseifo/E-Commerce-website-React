import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductPage from "../Pages/ProductPage";


export default function AppRouter() {
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Products" element={<ProductPage />} />
            </Routes>
        </>
    )
}