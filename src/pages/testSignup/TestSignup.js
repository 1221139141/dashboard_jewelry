import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TestSignup.css";

export default function TestSignup({ setAdmin }) {

  const [username, setUsername] = useState("");
  const [motdepasse, setMotdepasse] = useState("");

  const navigate = useNavigate();
  
  const handleFormSIgnUp = async (event) => {
    try {
      event.preventDefault();

    const response = await axios.post(
    "https://dashboard-shop-api.vercel.app/admin/signup",
      {
        username: username,
        motdepasse: motdepasse
      }
    );

      if (response.data) {
        console.log("COMPTE ADMIN CREE")
        setAdmin(response.data.token);
        // Rediriger l'admin vers la page de connexion
        navigate("/");
      }

    } catch (error) {
      console.log(error.response.status);
    }

  };

  return (
    <div className="containerSignup">
      <h1>INSCRIPTION admin</h1>
      <form onSubmit={handleFormSIgnUp}>
        <input 
        value={username}
        type="text" 
        placeholder="admin" 
        onChange={(event) => setUsername(event.target.value)}
        />
        <input 
        value={motdepasse}
        type="password" 
        placeholder="password" 
        onChange={(event) => setMotdepasse(event.target.value)}
        />
        <input 
        className="submitSignup"
        value="test-inscription"
        type="submit" 
        placeholder="envoyer" 
        />
      </form>
    </div>
  );
}
