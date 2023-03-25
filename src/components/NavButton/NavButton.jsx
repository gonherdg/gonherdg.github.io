import { useState } from "react";
//import "./WorkCell.css"
import "./styles.css"
import { HashLink as Link } from 'react-router-hash-link';

const NavButton = ({label, linkTo}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link className="RoundedButton" to={linkTo}>
    {label}
    </Link>
    
  )
}

export default NavButton;
