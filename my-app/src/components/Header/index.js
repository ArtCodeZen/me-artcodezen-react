import { Link } from 'react-router-dom';
import './header.css';
function Header(){
    return(
        
        <div className='nav'>
            <Link className='link' to="/">Home</Link>
            <Link className='link' to="/">Tecnologias</Link>

            <Link className='link' to="/About">Sobre</Link>
        </div>
    )
}

export default Header;