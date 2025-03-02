import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adminLogin } from '../../authActions';
import './Adminlogin.css';

export default function Adminlogin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminToken, adminLoading, adminError } = useSelector((state) => state.auth);

  useEffect(() => {
    if (adminToken) {
      navigate('/'); // Redirect to admin dashboard
    }
  }, [adminToken, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminLogin({ ...credentials, rememberMe }));
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="imgcont">
      <img src="pics/AsAdmin.png" className="imge e" alt="Admin background" />
      <div id="divupp">
        <Link className="navbar-brand" to="/">
          <img src="pics/logoo.png" alt="Logo" id='lg'/>
        </Link>
        <form id="formulaires" onSubmit={handleSubmit}>
          <h2 id='hh2'>Admin Section</h2>
          <div id="inputs">
            <label
              htmlFor="email"
              style={{
                color: '#020053',
                fontFamily: 'Abhaya Libre SemiBold',
              }}
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={credentials.email}
              onChange={handleChange}
              style={{
                backgroundColor: '#FFF3F3',
                border: '1px solid #020053',
                marginBottom: '5px',
              }}
            />
            <label
              htmlFor="password"
              style={{
                color: '#020053',
                fontFamily: 'Abhaya Libre SemiBold',
              }}
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={credentials.password}
              onChange={handleChange}
              style={{
                backgroundColor: '#FFF3F3',
                border: '1px solid #020053',
              }}
            />
          </div>

          {/* Remember Me Checkbox */}
          <div style={{ margin: '5px 20px',width:'30%', display: 'flex', alignItems: 'center' }} id='renm'>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={{ 
                marginRight: '10px',
                width: '18px',
                height: '18px',
                accentColor: '#FA5252'
              }}
            />
            <label 
              htmlFor="rememberMe"
              style={{
                color: '#020053',
                fontFamily: 'Abhaya Libre SemiBold',
                cursor: 'pointer'
              }}
            >
              Remember Me
            </label>
          </div>

          {adminError && (
            <div style={{ 
              color: '#FA5252', 
              textAlign: 'left', 
              margin: '-5px 20px',
              fontFamily: 'Abhaya Libre SemiBold'
            }}>
              {adminError}
            </div>
          )}
          <button
            type="submit"
            style={{
              padding: '10px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#FA5252',
              color: '#f5f2f2ea',
              fontFamily: 'Abhaya Libre SemiBold',
              margin: '5% 0% 0% 75%',
              width: '20%',
              cursor: adminLoading ? 'not-allowed' : 'pointer'
            }}
            disabled={adminLoading}
          >
            {adminLoading ? 'Authenticating...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
}