import React from "react";
function ListItem(props) {
  return (
    <li className={'userCardContactItems${!props.item ?"unavailable":""}'}>
      <div className="userCardContactIconWrapper">
        <img className="UserCardContactIcon" src={props.icon} alt="" />
      </div>
      <div className="userCardContactText">
        <p>{props.item ? props.item:"Not Available"}</p>
      </div>
    </li>
  );
}


export default ListItem;