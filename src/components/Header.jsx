import "./../css/Header.css"
import logo from "../images/house-logo.png";

const Header = () =>
{
    return (
        <div id="header">
            <img id="logo" src={logo} alt="Logo"/>
            <h1>Dogs!</h1>
        </div>
    );
};

export default Header;