import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../authActions';
import './Signup.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, token } = useSelector((state) => state.auth);
  const [localError, setLocalError] = useState('');

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setLocalError('Passwords do not match');
      return;
    }

    if (!formData.agreedToTerms) {
      setLocalError('You must agree to the terms & conditions');
      return;
    }

    dispatch(registerUser({
      username: formData.username,
      email: formData.email,
      password: formData.password
    }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.type === 'checkbox' 
        ? e.target.checked 
        : e.target.value
    });
  };

  return (
    <div id="imgcont">
      <img src="pics/singup1.png" className="imge" alt="Signup background" />
      <div id="divup">
        <Link className="navbar-brand" to="/">
          <img src="pics/logoo.png" alt="Logo" />
        </Link>
        <form id="formulaire" onSubmit={handleSubmit}>
          <h2 id='hh2'>Sign Up</h2>
          
          <div id="inputs" className='input'>
            <label style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={formData.username}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#fff",
                border: "1px solid #020053",
                marginBottom: "5px",
              }}
            />

            <label style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#fff",
                border: "1px solid #020053",
                marginBottom: "5px",
              }}
            />

            <label style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#fff",
                border: "1px solid #020053",
                marginBottom: "5px",
              }}
            />

            <label style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold" }}>
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              style={{
                backgroundColor: "#fff",
                border: "1px solid #020053",
              }}
            />
          </div>

          {(error || localError) && (
            <div style={{ 
              color: '#FA5252', 
              textAlign: 'center', 
              margin: '10px 0',
              fontFamily: 'Abhaya Libre SemiBold'
            }}>
              {error || localError}
            </div>
          )}

          <div className="terms">
            <input 
              type="checkbox" 
              id="terms-checkbox" 
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={handleChange}
              required
            />
            <label htmlFor="terms-checkbox" style={{ fontFamily: 'Abhaya Libre SemiBold' }}>
              I agree to the{' '}
              <Link to="/terms" style={{ color: '#FA5252' }}>
                Terms & Conditions
              </Link>
            </label>
            
            <button 
              type="submit"
              className="signup-btn"
              disabled={loading}
              style={{
                backgroundColor: '#FA5252',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'Abhaya Libre SemiBold',
                fontSize: '16px',
                marginTop: '15px'
              }}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </button>
          </div>

          <img src="images/or.png" alt="or separator" id="orr" />
          
          <div id='ss'>
            <button type="button" id='alinks' style={{
              backgroundColor: 'transparent',
              border: '1px solid #4A429A',
              borderRadius: '8px',
              padding: '10px',
              width: '80%',
              margin: '10px 50px',
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
            
            <p style={{ 
              textAlign: 'center', 
              fontFamily: 'Abhaya Libre SemiBold',
              color: '#020053',
              marginTop: '15px'
            }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#FA5252' }}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}