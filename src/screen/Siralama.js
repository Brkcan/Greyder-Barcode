import React, { Component } from 'react';
import ReactToExcel from 'react-html-table-to-excel';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";

import axios from 'axios';

class Siralama extends Component {
  constructor() {
    super();

  this.state = {
     liste: [],
     liste2: [],
     liste3:[],
     start_date_: "",
     created_at:"",
     end_date_: "",
     default:1,
     filterText: '',
     id:'',
   };
   this.onChange = this.onChange.bind(this);
   this.onSubmit = this.onSubmit.bind(this);

}

onChange(e) {
  this.setState({
    [e.target.name]: e.target.value,

  });

 }

   componentDidMount() {
   axios.get('http://localhost:8080/api/getbarcode')
     .then(users => users.data)
     .then(liste => {
       this.setState({
         liste,
       });
     });
     axios.get('http://localhost:8080/api/getValueDate')
       .then(users => users.data)
       .then(liste3 => {
         this.setState({
           liste3,
         });
       });

 }

 onSubmit(e) {
   e.preventDefault();
   this.setState({
     default: 2
   })
   axios.get('http://localhost:8080/api/gettwodatebetween/'+ this.state.start_date_ +'/'+ this.state.end_date_)
     .then(users => users.data)
     .then(liste2 => {
       this.setState({
         liste2,
       });
     });
     //console.log(this.state.start_date_);
     console.log(this.state.end_date_);
 }
 getToday = () => {

 }

onChangeFilterText = (e) => {
  this.setState({
    filterText: e.target.value
  })
}
onDeleteClick = id => {
  axios.delete(`http://localhost:8080/api/deletebarcode/${id}`)
    .then(res => res.data)
      .then(res1 => {
        this.setState({
          res1
        })
      })

  //this.props.deleteBarcode(id);
}

 render() {
   const filteredContacts = this.state.liste.filter(
     user => {
       return user.cargoTrackingCode.toLowerCase().indexOf(
         this.state.filterText.toLowerCase()
       ) !== -1
     }
   )
    return (
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
        <a href="/addBarcode" className="col s12 m6 l6">
          <div className="card light-blue">
            <div className="card-content center-align">
              <h3 className="white-text">Barcode EKLE</h3>
              <p>

              </p>
            </div>
          </div>
        </a>
        <a href="/" className="col s12 m6 l6">
          <div className="card light-blue">
            <div className="card-content center-align">
              <h3 className="white-text">Anasayfa</h3>
              <p>

              </p>
            </div>
          </div>
        </a>
  <h1>Kargo listesi</h1>


  <ReactToExcel
    className="btn"
    table="table-to-xls"
    filename="excelFile"
    sheet="sheet 1"
    buttonText="EXPORT TO EXCEL"
  />

     <form onSubmit={this.onSubmit}>
  <div className="form-group">
    <div>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        name="start_date_"
                        style={{width: "370px"}}
                        value={this.state.start_date_}
                        onChange={this.onChange}
                      />
                      <div>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        name="end_date_"
                        style={{width: "370px", justifyContent: "center",}}
                        value1={this.state.end_date_}
                        onChange={this.onChange}
                      />
                    <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                    style={{marginLeft:0}}
                    />
                    </div>
                  </div>
           </div>
       </form>
       <input
         type="text"
         className="form-control form-control-lg "
         placeholder="Search"
         name="filterText"
         style={{width: "500px",marginLeft:0}}
         value={this.state.filterText}
         onChange={this.onChangeFilterText}
       />

       {
         this.state.default === 1 ?
         <table id="table-to-xls" className="data-table" style={{width:"100%"}}>
            <thead>
              <tr>
                <th></th>
                <th>Kargo Takip Numarası</th>
                <th>Tarih</th>
                <th>Ups</th>
                <th>Departman</th>
                <th>Kargoyu Teslim Alan</th>
                <th>İmza</th>
                <th>{this.state.liste3.map(res => res.created_at)}</th>
              </tr>
            </thead>

            {
               filteredContacts.map(user => {
                 return (

            <tbody className="example">

              <tr>
              <td>     <button onClick={() => this.onDeleteClick(user.id)}>Sil</button>
              </td>
                <td>{ user.cargoTrackingCode }</td>
                <td>{user.created_at}</td>
                <td><a href={"https://www.ups.com.tr/WaybillSorgu.aspx?Waybill="+user.cargoTrackingCode}>{user.cargoTrackingCode} </a></td>
                <td>{user.selectDepartman}</td>
                <td>-</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          )
        }
          )
        }
          </table>
         :
       <table id="table-to-xlss" className="data-table">
          <thead>
            <tr>
              <th>Kargo Takip Numarası</th>
              <th>Tarih</th>
              <th>Ups</th>
              <th>Departman</th>
              <th>Kargoyu Teslim Alan</th>
              <th>İmza</th>
              <th>{this.state.liste3.map(res => res.created_at)}</th>
            </tr>
          </thead>
          {
             this.state.liste2.map(user => {
               return (
          <tbody>
            <tr>
              <td>{ user.cargoTrackingCode }</td>
              <td>{user.created_at}</td>
              <td><a href={"https://www.ups.com.tr/WaybillSorgu.aspx?Waybill="+user.cargoTrackingCode}>{user.cargoTrackingCode}</a></td>
              <td>{user.selectDepartman}</td>
              <td>-</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        )
      }
        )
      }
        </table>
      }
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}


export default Siralama;
