import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from './screen/HomeScreen';
import Barcode from './screen/Barcode';
import Siralama from './screen/Siralama';


class App extends React.Component{
  render() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={HomeScreen}></Route>
          <Route exact path="/addBarcode" component={Barcode}></Route>
          <Route exact path="/barcodeListe" component={Siralama}></Route>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
