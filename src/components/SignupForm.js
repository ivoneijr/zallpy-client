import React from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
      isLoading: false
    }
    
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  
  onSubmit(e) {
    e.preventDefault();
    
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state).then(
      () => {
        browserHistory.push('/');
      },
      ({ data }) => {
        this.setState({ errors: data.errors, isLoading: false })
      }
    );
  }
  
  render() {
    const { errors } = this.state;
    
    return (
      <form onSubmit={this.onSubmit}>
        <h3>Sign up</h3>
        <fieldset>
          <div className={ classnames("form-group", { 'has-error': errors.username }) }>
            <label className="control-label">Username</label>
            <input 
              value={this.state.username}
              onChange={this.onChange}
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
            />
          { errors.username && <span className="help-block"> { errors.username } </span> }
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.email }) }>
            <label className="control-label">Email</label>
            <input 
              value={this.state.email}
              onChange={this.onChange}
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
            />
            { errors.email && <span className="help-block"> { errors.email } </span> }
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.password }) }>
            <label className="control-label">Password</label>
            <input 
              value={this.state.password}
              onChange={this.onChange}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
            />
          { errors.password && <span className="help-block"> { errors.password[0] } </span> }
          </div>
          <div className="form-group">
            <label className="control-label">Password confirmation</label>
            <input 
              value={this.state.password_confirmation}
              onChange={this.onChange}
              type="password"
              name="password_confirmation"
              className="form-control"
              placeholder="Password confirmation"
            />
          </div>
          
          <div disabled={ this.state.isLoading } className="form-group"> 
            <button className="btn btn-primary pull-right">Submit</button>
          </div>
        </fieldset>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;