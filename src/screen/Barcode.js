import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createProject} from "../actions/barcodeActions";
import { BrowserRouter as Router, Route,Link } from "react-router-dom";


class Barcode extends Component{

  constructor() {
    super();

    this.state = {
      cargoTrackingCode:"",
      test:"",
      test2:[],
      selectDepartman:"Tamir Takip",
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      //[e.target.selectDepartman]: e.target.value1,
    //  selectDepartman:e.target.value,
    })

    setTimeout(() => {
      this.setState({
        cargoTrackingCode: ''
      })
    }, 1000000)

  }

  onSubmit(e) {
    e.preventDefault();
    const newBarcode = {
      cargoTrackingCode: this.state.cargoTrackingCode,
      selectDepartman: this.state.selectDepartman,
    };
    this.props.createProject(newBarcode, this.props.history);
    console.log(newBarcode);
    console.log({...this.state});
    this.state.test2= this.state.cargoTrackingCode;

  }

  render(){
    return(
      <div>
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
        <a href="/barcodeListe" className="col s6 m6 l6">
          <div className="card light-blue">
            <div className="card-content center-align">
              <h3 className="white-text">Barcode</h3>
              <p>

              </p>
            </div>
          </div>
        </a>
        <a href="/" className="col s6 m6 l6">
          <div className="card light-blue">
            <div className="card-content center-align">
              <h3 className="white-text">Home</h3>
              <p>

              </p>
            </div>
          </div>
        </a>
               <div className="project">
                 <div className="container">
                   <div className="row">
                     <div className="col-md-8 m-auto">

                       <h5 className="display-4 text-center">Barcode form</h5>
                       <hr />
                       <form onSubmit={this.onSubmit}>
                          <div className="form-group">
                          <label>
                   Departman Sec:
                   <select value={this.state.selectDepartman}  name="selectDepartman" onChange={this.onChange}>
                     <option value="TamirTakip">Tamir Takip</option>
                     <option value="Internet">Internet</option>
                       <option value="Muhasebe">Muhasebe</option>
                       <option value="ik">i.k</option>
                       <option value="SatinAlma">Satin Alma</option>
                       <option value="BilgiIslem">Bilgi islem</option>
                       <option value="Pazarlama">Pazarlama</option>
                       <option value="Arge">Arge</option>
                       <option value="Jeep">Jeep</option>
                       <option value="-">-</option>

                   </select>
                 </label>

                           <input
                             type="text"
                             className="form-control form-control-lg "
                             placeholder="barcode"
                             name="cargoTrackingCode"
                             value={this.state.cargoTrackingCode}
                             onChange={this.onChange}
                           />
                           <input type="submit" value="Gönder" />
                         </div>
                         {
                           this.state.test2
                         }
                       </form>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
        </div>
      </div>
    </div>
  </div>

    )
  }
}
Barcode.propTypes = {
  createProject: PropTypes.func.isRequired
};
export default connect(
  null,
  { createProject }
)(Barcode);
