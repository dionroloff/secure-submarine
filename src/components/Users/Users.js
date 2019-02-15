import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Members from './../Members/Members';

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
                <h3>Members of the Security Submarine:</h3>
                <ul>
                    {this.state.users.map((member, i) => {
                        return <Members key={i} name={member.username} />
                    })}
                    {/* {JSON.stringify(this.state.users)} */}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    secrets: state.secrets,
    user: state.user,
  });
  
export default connect(mapStateToProps)(Users);
