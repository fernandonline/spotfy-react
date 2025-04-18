import { Link } from 'react-router-dom';
import logoSpotfy from '../assets/logo/spotify-logo.png';
import '../styles/header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'>
                <img src={logoSpotfy} alt="logo do projeto"/>
            </Link>

            <Link to='/' className='header-link'>
                <h1>Spotfy</h1>
            </Link>
        </div>
    )
}

export default Header;