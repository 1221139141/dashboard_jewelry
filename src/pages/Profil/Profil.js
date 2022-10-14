import { Navigate } from "react-router-dom";
export default function Profil({ token, username }) {
  return token ? (
    <div>
      <p>Salut {username}</p>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
