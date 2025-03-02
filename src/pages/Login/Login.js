import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../authActions';
import './Login.css';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="imgcont">
      <img src="pics/login1.png" className="imge" alt="Login background" />
      <div id="divup">
        <Link className="navbar-brand" to="/">
          <img src="pics/logoo.png" alt="Logo" />
        </Link>
        <form id="formulaire" onSubmit={handleSubmit}>
          <h2 id='hh2'>Login</h2>
          <div id="inputs">
            <label htmlFor="email" style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={credentials.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#fff',
                border: '1px solid #020053',
                marginBottom: '5px',
              }}
            />

            <label htmlFor="password" style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={credentials.password}
              onChange={handleChange}
              required
              style={{
                backgroundColor: '#fff',
                border: '1px solid #020053',
              }}
            />
          </div>

          {error && (
            <div className="error-message" style={{ color: '#FA5252', textAlign: 'center', marginTop: '10px' }}>
              {error}
            </div>
          )}

          <div id='bb'>
            <button
              type="submit"
              className="login-btn"
              disabled={loading}
              style={{
                padding: '10px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor: '#FA5252',
                color: '#f5f2f2ea',
                fontFamily: 'Abhaya Libre SemiBold',
                margin: '10% 0% 0% 5%',
                width: '20%',
                cursor: loading ? 'not-allowed' : 'pointer'
              }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </div>

          <img src="images/or.png" alt="or separator" id="or" />
          
          <div id="alinks">
            <button type="button" className="google-btn"  style={{
              backgroundColor: 'transparent',
              border: '1px solid #4A429A',
              borderRadius: '8px',
              padding: '10px',
              width: '100%',
              margin: '10px 0px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src="images/GoogleChromeLogo.png"
                alt="Google logo"
                style={{ width: '20px', marginRight: '10px' }}
              />
              Continue with Google
            </button>
          </div>
          <div id="alinks">
            <Link to="/adminlogin" className="google-btn"  style={{
              backgroundColor: 'transparent',
              border: '1px solid #4A429A',
              borderRadius: '8px',
              padding: '10px',
              width: '100%',
              margin: '10px 0px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <img
                src="images/User.png"
                alt="Admin login"
                style={{ width: '20px', marginRight: '10px' }}
              />
              Continue as Admin
            </Link>
          </div>
          <p className="signup-prompt" style={{
            color: '#020053',
            fontFamily: 'Abhaya Libre SemiBold',
            margin: '20px 0',
            textAlign: 'center'
          }}>
            Don't have an account?{' '}
            <Link to="/signup" style={{ color: '#FA5252' }}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}