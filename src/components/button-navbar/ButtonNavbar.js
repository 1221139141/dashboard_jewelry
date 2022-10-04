import "./ButtonNavbar.css";

export default function ButtonNavbar({titleButton}) {
  return (
    <div className='buttonNavbar'>
        <button>{titleButton}</button>
    </div>
  );
};
