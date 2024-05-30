import { NavLink } from "react-router-dom";

export default function Header(){

    return (
        <header>
            <div id="headerBranding">
                LoL Wiki
            </div>
            <nav id="headerNavbar">
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/about"} >About</NavLink>
            </nav>
        </header>
    )
}