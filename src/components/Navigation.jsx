import {Link} from "react-router-dom";
import "./../css/Navigation.css"
import {useState} from "react";

const Navigation = () =>
{

    const [menuOpen, setMenuOpen] = useState(false);

    

    const toggleMenu = () =>
    {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav id="main-nav">
            <a onClick={toggleMenu} id="toggle-nav" href="#">&darr;</a>
            <ul className={menuOpen?"":"hide-small"}>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Houses">Houses</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;