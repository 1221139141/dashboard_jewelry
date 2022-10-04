import "./ButtonNavbar.css";

export default function ButtonNavbar({titleButton}) {
  return (
    <div>
        <button className='buttonNavbar'>{titleButton}</button>
    </div>
  );
};
