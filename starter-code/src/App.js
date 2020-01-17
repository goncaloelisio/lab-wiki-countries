import React,{Component} from  'react';
import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import CountryList from "./components/CountryList";
import countries from "./countries.json";
import NavBar from "./components/NavBar";
import axios from 'axios';
class App extends Component {

//   constructor(){
//     super()
//     this.state = {
//         countries: []
//     }
// }
// componentDidMount() {
//     axios.get(“https://countries.tech-savvy.tech/countries”)
//     .then(response => {
//         this.setState({countries: response.data})
//     })
// }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div className="list-group">
               <CountryList />
              </div>
            </div>
            <div className="col-7">
            <Switch>
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>
            </div>
          </div>
        </div>
      </div>
    );
    }
}

export default App;
