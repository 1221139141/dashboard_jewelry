import "./Introduction.css";

// Components :
import IntroImage from "../../assets/images/introImageBloc.png";

export default function Introduction() {
  return (
    <div className="introContainer">
      <div className="leftContainer">
        <h2>Le tableau de bord qui vous aide au quotidien</h2>
      </div>
      <div className="rightContainer">
        <img src={IntroImage} alt="a jewel"/>
      </div>
    </div>
  );
}
