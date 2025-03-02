const initialState = {
  loading: false,
  error: null,
  token: localStorage.getItem('userToken') || sessionStorage.getItem('userToken') || null,
  user: JSON.parse(localStorage.getItem('userData')) || null,
  adminToken: localStorage.getItem('adminToken') || sessionStorage.getItem('adminToken') || null,
  adminLoading: false,
  adminError: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return { ...state, loading: true, error: null };
      
    case 'ADMIN_LOGIN_REQUEST':
      return { ...state, adminLoading: true, adminError: null };
      
    case 'LOGIN_SUCCESS':
    case 'REGISTER_SUCCESS':
      // Save user data and token to storage
      if (action.payload.rememberMe) {
        localStorage.setItem('userToken', action.payload.token);
        localStorage.setItem('userData', JSON.stringify(action.payload.user));
      } else {
        sessionStorage.setItem('userToken', action.payload.token);
      }
      return { 
        ...state, 
        loading: false, 
        token: action.payload.token,
        user: action.payload.user
      };

    case 'ADMIN_LOGIN_SUCCESS':
      if (action.payload.rememberMe) {
        localStorage.setItem('adminToken', action.payload.adminToken);
      } else {
        sessionStorage.setItem('adminToken', action.payload.adminToken);
      }
      return {
        ...state,
        adminLoading: false,
        adminToken: action.payload.adminToken
      };

    case 'AUTH_FAILURE':
      return { ...state, loading: false, error: action.payload };
      
    case 'ADMIN_LOGIN_FAILURE':
      return { ...state, adminLoading: false, adminError: action.payload };
      
    case 'LOGOUT':
      // Remove tokens and user data from storage
      localStorage.removeItem('userToken');
      localStorage.removeItem('userData');
      localStorage.removeItem('adminToken');
      sessionStorage.removeItem('userToken');
      sessionStorage.removeItem('adminToken');
      return {
        ...initialState,
        token: null,
        adminToken: null
      };

    default:
      return state;
  }
};
