import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Users extends Component {

    state = {
        users: [],
    }

    componentDidMount = () => {
        axios.get('/api/secrets/user')
        .then(response => {
            this.setState({
            users: response.data
            })
        })
        .catch((error) => {
            console.log(error);
        })

        
    }

    render() {
        console.log(this.state.users);
        return(
            <div>
                {JSON.stringify(this.state.users)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    secrets: state.secrets,
    user: state.user,
  });
  
export default connect(mapStateToProps)(Users);
