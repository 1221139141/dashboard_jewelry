import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css"

export default function Login({setAdmin}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [motdepasse, setMotdepasse] = useState("");

  const handleFormLogIn = async (event) => {
    try {
      event.preventDefault();

      const response = await axios.post(
        "https://dashboard-shop-api.vercel.app/admin/login",

        {
          username: username,
          motdepasse: motdepasse
        }
        );

        if(response.data.token) {
          console.log("CONNECTED dans login")
          setAdmin(response.data.token)
          navigate("/profil");
        }

        if(response.data.username) {
          console.log(response.data.username)
        }

    } catch (error) {
      console.log(error.response.status);
    }
  };

  return (
<div className="containerLogIn">
<h1>CONNEXION</h1>
  <form onSubmit={handleFormLogIn}>
    <input 
    value={username}
    type="text" 
    placeholder="admin" 
    onChange={(event) => setUsername(event.target.value)}
    />
    <input 
    value={motdepasse}
    type="password" 
    placeholder="mot de passe" 
    onChange={(event) => setMotdepasse(event.target.value)}
    />
    <input 
    className="submitLogin"
    value="Se connecter"
    type="submit" 
    />
  </form>
</div>
  );
}
