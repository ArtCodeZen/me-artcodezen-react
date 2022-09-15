import { Link } from 'react-router-dom';
import './header.css';
function Header(){
    return(
        
        <div className='nav'>
            <Link className='link' to="/me-artcodezen-react">Home</Link>
            <Link className='link' to="/tecnologias">Tecnologias</Link>
            <Link className='link' to="/about">Sobre</Link>
        </div>
    )
}

export default Header;