import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home  from "./pages/home/Home";
import Hotels from "./pages/Hotels/Hotels";
import Hotel from "./pages/hotel/hotel";

function App() {


    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = { <Home /> }/>
                <Route path = "/hoteles" element = { <Hotels /> }/>
                <Route path = "/hoteles/:id" element = { <Hotel /> }/>
            </Routes>
        </BrowserRouter>

    )
}

export default App
