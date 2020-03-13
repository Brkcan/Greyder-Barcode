import React, {Component} from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import {getProjects} from "../actions/barcodeActions";
import PropTypes from "prop-types";

class Liste extends Component{
  componentDidMount() {
   this.props.getProjects();
 }

  render(){
    return(
      <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br />
                <br />
                <hr />
                {}
              </div>
            </div>
          </div>
        </div>
      );
    }
}

Liste.propTypes = {
  list: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  list: state.list
});
export default connect(
  mapStateToProps,
  { getProjects }
)(Liste);
