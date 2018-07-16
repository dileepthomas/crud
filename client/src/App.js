import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions'

class App extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fetchData}>Show Data</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(actions.fetchDataHandler)
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
