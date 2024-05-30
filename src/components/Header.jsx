import { NavLink } from "react-router-dom";
import "../styles/Header.css";

export default function Header(){

    return (
        <header>
            <div id="headerBranding">
                LoL Wiki
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/about"} >About</NavLink>
                <NavLink to={"/champions"} >Champions</NavLink>
            </nav>
        </header>
    )
}