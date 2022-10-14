export default function Profil({ token }) {
  return token ? (
    <div>
      <p>Salut {username}</p>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
