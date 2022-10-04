import "./Header.css";

// Components : 
import ButtonNavbar from "../../components/button-navbar/ButtonNavbar";

export default function Header() {
  return <div className="containerHeader">
    <h1>Bijouterie Dashboard</h1>
    <ButtonNavbar titleButton={"Recherche"}/>
    <ButtonNavbar titleButton={"Se connecter"}/>
  </div>;
};
