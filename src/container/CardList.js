import React, { Component } from "react";
import Card from "./Card";

class CardList extends Component {
  render(props) {
    let { robots } = this.props;
    // console.log(robots);
   return (
       <div>{
           robots.map((user , i) => {
               return (
        <Card key = {robots[i].id} id={robots[i].id}
         email={robots[i].email}
          name={robots[i].name} />
               )
           })
           } </div>
   )
    
  }
}

export default CardList;

