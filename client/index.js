import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllAircrafts from './components/AllAircrafts.js';
import SingleThingRenderer from './components/SingleAircraft.js';

ReactDOM.render(
  <Router>
    <Switch>
        <Route exact path="/" component={AllAircrafts}/>
        <Route exact path="/airplanes/:id" render={() => {
          return (
            <SingleThingRenderer craft={{
              id: 4,
              model: 'toyota',
              year: 1995,
              image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG'
            }}/> 
          )
        }
        }/>
    </Switch>
  </Router>,
  document.getElementById('app')
);





// export default class Route extends Component {
//   constructor(props){
//     super(props)
//   }

//   render(){
//     { Component } = this.props;
//     return(
//        { () => { <Component match=""> }}
//     )
//   }
// }