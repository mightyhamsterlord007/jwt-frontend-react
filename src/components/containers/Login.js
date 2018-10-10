import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser } from '../../actions';
import TextFieldGroup from '../common/TextFieldGroup';


class Login extends Component {

    state = {
        email: '',
        password: '',
        errors: {}
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/');
        }
      }
    
      componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
          this.props.history.push('/');
        }
    
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }


      onSubmit = (e) => {
        e.preventDefault();
    
        const userData = {
          email: this.state.email,
          password: this.state.password
        };
    
        this.props.loginUser(userData);
      }
    
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

    render() {

        const { errors } = this.state;

        return (
            <div
                style={{
                width: 100 + '%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 250
            }}>
                <form onSubmit={this.onSubmit}>
                    <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}
                    />

                    <TextFieldGroup
                    placeholder="Password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    error={errors.password}
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <br />
                    <br />

                    <hr />
                </form>
                
            </div>

        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  
  export default connect(mapStateToProps, { loginUser })(withRouter(Login));