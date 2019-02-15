import React, { Component } from 'react';
import { connect } from 'react-redux';

class Members extends Component {
    render() {
        return(
            <li>{this.props.name}</li>
        )
    }
}

const mapStateToProps = state => ({
    secrets: state.secrets,
    user: state.user,
  });
  
export default connect(mapStateToProps)(Members);