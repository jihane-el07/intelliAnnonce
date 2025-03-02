import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Listing from './pages/Listing/Listing';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Details from './pages/Details/Details';
import HomePage from './pages/Home/Homepage';
import Categorie from './pages/Multimedia/Categorie';
import Adminlogin from './pages/Adminligin/Adminlogin';
import Favorites from './pages/Favorites/Favorites';
import Postad from "./pages/Postad/Postad";
import YourAds from './pages/YourAds/YourAds';
import { useSelector } from 'react-redux';
import SettingsSidebar from './pages/SettingsSidebar/SettingsSidebar';
export default  function App() {
  const { token } = useSelector((state) => state.auth);
  
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing" element={<Listing/>} />
        <Route path="/categorie/:category" element={<Categorie/>} /> 
        <Route path="/categories" element={<Categories/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/login" element={<Login/>} />   
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/adminlogin" element={<Adminlogin/>} /> 
        <Route path="/details/:id" element={<Details />} />
        <Route path="/favorites" element={token ? <Favorites /> : <Navigate to="/login" />}  />
        <Route path="/post-ad" element={<Postad />} />
        <Route path="/post-ad/:id" element={<Postad />} />
        <Route path="/your-ads" element={<YourAds />} />        </Routes>
        <SettingsSidebar/>
    </div>
  );
}