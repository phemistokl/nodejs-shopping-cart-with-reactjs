import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { signUp } from '../actions';
import { signUser } from '../actions';

const styles = {
    container: {
        height: '100%',
        maxWidth: 800,
        width: '100%',
        paddingLeft: 16,
        paddingRight: 16,
        margin: '0 auto'
    }
};

@withRouter
@connect( mapStateToProps, { signUp, signUser } )
export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {email: '', password: ''};

        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.props.signUp();
    }

    handleChangeMail(event) {
        this.setState({email: event.target.value});
    }

    handleChangePass(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit() {
        const user = {
          email: this.state.mail,
          password: this.state.password
        };
        this.props.signUser(user);
    }

    render() {
        return (
          <div>
              <h1>Sign Up</h1>
              <form onSubmit={this.handleSubmit}>
                  <label>
                      E-mail:
                      <input type="text" value={this.state.mail} onChange={this.handleChangeMail} />
                  </label>
                  <label>
                      Password:
                      <input type="text" value={this.state.pass} onChange={this.handleChangePass} />
                  </label>
                  <input type="hidden" name="_csrf" value={this.props.signup} />
                  <input type="submit" value="Submit" />
              </form>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        signup: state.signup.signup.data
    };
}
