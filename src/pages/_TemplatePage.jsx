import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import ChampionCard from "../components/ChampionCard";

export default function Template(){
    return(<>
        <Header />
        <Outlet />
        {/* <ChampionCard /> */}
        <Footer />
    </>);
}