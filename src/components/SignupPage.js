import { useState } from 'react';

function SignupPage() {
  const [state, setState] = useState({
    email: '',
    password: '',
    nationality: 'de',
  });
  const [isBlurred, setIsBlurred] = useState({
    email: false,
    password: false,
  });

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function handleBlur(event) {
    if (!isBlurred[event.target.name]) {
      setIsBlurred({ ...isBlurred, [event.target.name]: true });
    }
  }

  function renderGreeting(nationality) {
    if (nationality === 'en') {
      return 'Hello';
    }

    if (nationality === 'de') {
      return 'Hallo';
    }

    if (nationality === 'fr') {
      return 'Bonjour';
    }
  }

  function validate() {
    const errors = {};

    // Obs.: NÃO pode ter espaços na regex
    if (!state.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)) {
      errors.email = 'You typed an invalid email';
    }

    if (
      !state.password.match(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm
      )
    ) {
      errors.password = 'Your password is too weak';
    }

    return errors;
  }

  // LEMBRETE: fazer por extenso
  function checkValidation(field) {
    if (isBlurred[field]) {
      return errors[field] ? 'is-invalid' : 'is-valid';
    }

    return '';
  }

  const errors = validate();

  console.log(errors);
  console.log(state);

  return (
    <div className="m-5">
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="signupEmail">
            E-mail
          </label>
          <input
            type="email"
            className={`form-control ${checkValidation('email')}`}
            id="signupEmail"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={state.email}
          />
          {checkValidation('email') && errors.email ? (
            <div className="invalid-feedback">{errors.email}</div>
          ) : (
            <div className="valid-feedback">You type a valid email</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="signupPassword">
            Password
          </label>
          <input
            type="password"
            className={`form-control ${checkValidation('password')}`}
            id="signupPassword"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={state.password}
          />
          {checkValidation('password') && errors.password ? (
            <div className="invalid-feedback">{errors.password}</div>
          ) : (
            <div className="valid-feedback">Your password is strong</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="signupNationality">
            Nationality
          </label>
          <select
            className="form-select"
            id="signupNationality"
            name="nationality"
            onChange={handleChange}
            value={state.nationality}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </select>
        </div>

        <button className="btn btn-primary" type="submit">
          Sign up
        </button>
      </form>

      <hr />

      <p>{renderGreeting(state.nationality)}</p>

      <p>Your email address is: {state.email}</p>

      <p>Your email address {errors.email ? 'is not correct' : 'is correct'}</p>
    </div>
  );
}

export default SignupPage;
