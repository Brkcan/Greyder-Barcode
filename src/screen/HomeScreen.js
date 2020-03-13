import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Header from './0.png'
import axios from 'axios';

class HomeScreen extends Component{
  constructor() {
    super();
  this.state = {
     liste: [],
   };
  }

  render() {
    return (
      <div style={divStyle}>
      <nav>
      <div class="nav-wrapper">
       <a href="#" class="brand-logo right">Greyder</a>
       <ul id="nav-mobile" class="left hide-on-med-and-down">
         <li><a href="sass.html">Sass</a></li>
         <li><a href="badges.html">Components</a></li>
         <li><a href="collapsible.html">JavaScript</a></li>
       </ul>
      </div>
      </nav>
      <div className="card">
    <div className="card-content">
      <div className="row">
        <div className="row">
          <a href="/addBarcode" className="col s12 m12 l12">
            <div className="card light-blue">
              <div className="card-content center-align">
                <h3 className="white-text">Barcode</h3>
                <p>

                </p>
              </div>
            </div>
          </a>
          <a href="/barcodeListe" className="col s12 m12 l12">
            <div className="card light-blue">
              <div className="card-content center-align">
                <h3 className="white-text">Rapor</h3>
                <p>

                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
        </div>
    )
  }
}

const divStyle = {
  marginLeft: '0px',
}

export default HomeScreen;
