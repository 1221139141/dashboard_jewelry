import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

// Components :
import ButtonNavbar from "../../components/button-navbar/ButtonNavbar";

export default function Header({ token, setAdmin }) {
  const navigate = useNavigate();

  return (
    <div className="containerHeader">
      <h1>Bijouterie Dashboard</h1>
      {token === null ? (
        <div>
          <ButtonNavbar titleButton={"Recherche"} />
          <Link to="/connexion"><ButtonNavbar titleButton={"Se connecter"} /></Link>
        </div>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/profil">profil</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  setAdmin(null);
                  navigate("/");
                }}
              >
                Se déconnecter
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}