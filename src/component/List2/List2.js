import React from "react";
import ListItem from "../Listitem/ListItem1";

export default class List2 extends React.Component
{
  render(){
    console.log("render List2");
    return(
      <ol>
        {this.props.items.map(element=>{
            return <ListItem key={element.id} value={element.item}/>
        })}
      </ol>
    )
  }
}
  
