import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
function Card(props){
  return(
    <div>
      <div className="card">
      <div className="top">
  <h2 className="name">{props.name}</h2>
  <Avatar img={props.imgURL}/>
</div>
<div className="bottom">
  <Detail phone={props.phone} email={props.email}/>
</div>
</div>
    </div>

  )
}
export default Card;