import React from "react";
import 'tachyons';
import CardList from "../container/CardList";
 import SearchBox from "../container/SearchBox.js";
import './app.css';
import Scroll from "../container/Scroll";

class App extends React.Component {

  constructor(){
    super()
    this.state = {
      robot: [],
      searchfields: ' '
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({robot : user}));
  }

 onSearchChange = (event) => {
  this.setState({searchfields: event.target.value})
 }
  
  render() {    

    console.log(this.state.robot); 
    const filteredRobots = this.state.robot.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfields.toLowerCase());
    })

    if(this.state.robot.length === 0 ) {
      return <h1> Loading ... </h1>
    }else {
      return (
        <div className = 'tc'>
          <h1 className = 'f1'>ROBOFRIENDS</h1>
          <SearchBox searchChange = {this.onSearchChange} />
          <Scroll>  
        <CardList robots= {filteredRobots}/>
          </Scroll>
        </div>
        );
    }
      }
}

export default App;
