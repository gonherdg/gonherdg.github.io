import { useState } from "react";
import "./WorkCell.css"
//import "../pages/Main.css"
import "./NavButton.css"

const NavButton = ({label = "(empty)"}) => {
  const [hover, setHover] = useState(false);

  return (
    <button className="RoundedButton">
    {label}
    </button>
    
  )
}

export default NavButton;
