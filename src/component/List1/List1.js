import React from "react";
import ListItem from "../Listitem/ListItem1";

export default class List1 extends React.Component
{
  render(){
    console.log("render List1");
    return(
      <ul>
        {this.props.items.map(element => {
          return <ListItem key={element.id} value={element.item}/>
        })}
        
      </ul>
    )
  }
}
  
