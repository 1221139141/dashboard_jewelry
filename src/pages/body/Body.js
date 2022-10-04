import "./Body.css";

// Components :
import Introduction from "../../components/introduction/Introduction";
import MenuBody from "../../components/menu-body/MenuBody";

export default function Body() {
  
  return (
    <div className="containerBody">
      <Introduction/>
      <MenuBody/>
    </div>
  );
}
