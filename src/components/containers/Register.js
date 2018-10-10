import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    }

    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
          this.props.history.push('/');
        }
      }

      componentDidUpdate(prevProps, prevState) {
      
          if (prevProps.errors !== this.props.errors) {
            this.updateErrorState(this.props.errors)
          }
      }

      updateErrorState = (errors) => {
        this.setState({ errors: errors });
      }
    
    //   componentWillReceiveProps(nextProps) {
    //     if (nextProps.errors) {
    //       this.setState({ errors: nextProps.errors });
    //     }
    //   }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit = (e) => {
        e.preventDefault();
    
        const newUser = {
          username: this.state.username,
          email: this.state.email,
          password: this.state.password,
          password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);

      }

    render() {

        const { errors } = this.state;
        console.log(this.props)
        return (
            <div
                style={{
                width: 100 + '%',
                display: 'flex',
                justifyContent: 'center',
                marginTop: 250
            }}>
                <form style={{width: 50 + '%'}} onSubmit={this.onSubmit}>
                    <TextFieldGroup
                        placeholder="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChange}
                        error={errors.username}
                    />
                    <TextFieldGroup
                        placeholder="Email"
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
                    <TextFieldGroup
                        placeholder="Confirm Password"
                        name="password2"
                        type="password"
                        value={this.state.password2}
                        onChange={this.onChange}
                        error={errors.password2}
                    />
                    <button type="submit" className="btn btn-primary" style={{marginBottom: 15}}>Submit</button>
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
  
  export default connect(mapStateToProps, { registerUser })(withRouter(Register));