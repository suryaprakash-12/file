import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";


function Ss(){
 return(
<div className="ss">
    <BrowserRouter>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact />}/>

    </Routes>
    </BrowserRouter>
    </div>
 );
}

export default Ss;