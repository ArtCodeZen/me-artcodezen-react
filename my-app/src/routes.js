import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Technologies from './pages/Technologies';
function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/me-artcodezen-react" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/tech" element={<Technologies/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>
        </BrowserRouter>
    )
}
export default RoutesApp;