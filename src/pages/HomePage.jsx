import { Link } from "react-router-dom";

export default function HomePage(){
    return <>
        <h1>League of Legends Wiki!</h1>
        <p>Welcome to the LoL Wiki!</p>
        <Link to={"/about"}>About me!</Link>


    </>
}