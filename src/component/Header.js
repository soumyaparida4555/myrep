import { Link } from "react-router-dom";
import { logo_url } from "../utills/constraint";

const Header=()=>
{
    return(

        <div className="header-container">
        <img className="header-logo" src={logo_url}></img>
        <div className="nav-container">
        <ul>
           <Link to={"/home"}> <li>Home</li></Link>
           <Link to={"/about"}><li>About'us</li></Link> 
           <Link to={"/contact"}> <li>Contact</li></Link>
            <li>Login</li>
        </ul>
      </div>
       </div>





    )
}

export default Header;