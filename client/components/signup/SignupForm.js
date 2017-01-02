import React, { PropTypes } from 'react'
import timezones from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: '',
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    console.log(e.target.name);
    this.setState({ [e.target.name]: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ errors: {}, isLoading: true });
    this.props.userSignupRequest(this.state).then(
      () => {},
      (err) => this.setState({ errors: err.response.data, isLoading: false })
    );
  }

  render () {
    const { errors } = this.state;
    const options = map(timezones, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community!</h1>

        <div className={classnames("form-group", { 'has-error': errors.username})}>
          <label className="control-label">Username</label>
          <input
            onChange={this.onChange}
            value={this.state.username}
            className="form-control"
            type="text"
            name="username"
          />
        {errors.username && <span className="help-block">{errors.username}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.email})}>
          <label className="control-label">Email</label>
          <input
            onChange={this.onChange}
            value={this.state.email}
            className="form-control"
            type="text"
            name="email"
          />
        {errors.email && <span className="help-block">{errors.email}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.password})}>
          <label className="control-label">Password</label>
          <input
            onChange={this.onChange}
            value={this.state.password}
            className="form-control"
            type="text"
            name="password"
          />
        {errors.password && <span className="help-block">{errors.password}</span>}
        </div>

        <div className={classnames("form-group", { 'has-error': errors.passwordConfirmation})}>
          <label className="control-label">Password Confirmation</label>
          <input
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            className="form-control"
            type="text"
            name="passwordConfirmation"
          />
        {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
        </div>


        <div className={classnames("form-group", { 'has-error': errors.timezone})}>
          <label className="control-label">Timezone</label>
          <select
            onChange={this.onChange}
            value={this.state.timezone}
            className="form-control"
            type="text"
            name="timezone"
          >
            <option value="" disabled>Choose your timezone</option>
            {options}
          </select>
        {errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>

        <div className="form-group">
          <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
            Sign up
          </button>
        </div>
      </form>
    )
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default SignupForm;
