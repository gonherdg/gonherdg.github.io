import { useState } from "react";
import "./styles.css"

const WorkCell = ({imgSource = "https://d3ugyf2ht6aenh.cloudfront.net/stores/913/526/products/jazmin-del-cabo-flor1-3830aa1bf4c928412d16078020929544-640-0.jpg"}) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="Container">
      {hover && <div>
        
        </div>}
      {!hover && <div>
        <img className="cellImage" alt={""} src={imgSource}/>
      </div>}
    </div>
    
  )
}

export default WorkCell;
