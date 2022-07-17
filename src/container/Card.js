import React  from "react";
import { Component } from "react";

class Card extends Component  {
    render(props) {
        return (
            <div className = 'bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
              <img alt = 'robot' src= {`https://robohash.org/${this.props.id}?200x200`} />
              <div>
                  <h2>{this.props.name}</h2>
                  <h2>{this.props.email}</h2>
              </div>
           </div>
        )

    }   
}

export default Card;