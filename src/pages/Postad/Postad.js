
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { saveAd, getAds } from '../../utils/storage';
import post from '../../pics/post1.png';
import './Postad.css';

export default function Postad() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEdit = Boolean(id);

  const [adData, setAdData] = useState({
    id: id || Date.now(),
    title: '',
    category: '',
    price: '',
    description: '',
    phone: '',
    address: '',
    city: '',
    agreed: false,
    image: '',
  });

  useEffect(() => {
    if (isEdit) {
      const ads = getAds();
      const existingAd = ads.find((ad) => ad.id.toString() === id);
      if (existingAd) setAdData(existingAd);
    }
  }, [id, isEdit]);
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAdData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

 
 
  const handleSubmit = (e) => {
    e.preventDefault();
    saveAd(adData); // It now updates if ad exists
    navigate('/your-ads'); // Redirect after update
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAdData((prevData) => ({
          ...prevData,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  

  return (
    <div className="post-ad-container">
      <div id="Post">
        <img src={post} width={1519} height={700} id="imgs" alt="" />
        <div id="float">
          <Nav />
          <div className="title">
            <h1 id="h11">{isEdit ? 'Edit Your Ad' : 'Post Your Ad'}</h1>
            <Link to="/" className="aa">Home ---</Link>
            <Link to="/post-ad" className="aa">PostAd</Link>
          </div>
        </div>
      </div>

      <div id="container2">
        <form className="ad-form" onSubmit={handleSubmit}>
          <div className="idn"  style={{ borderRight: '#01005328 solid' }}>
          <div id="d1" style={{ display: 'flex' }}>
          <div className="divside"></div>
            <h4  style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', marginTop: '3%', marginLeft: '2%' }}>Ad Details</h4>
          </div>
          <div className="form-section"> 
          <div className="form-group">
            <input type="text" name="title" value={adData.title} onChange={handleChange} placeholder="Project Title *" required />
          </div>
          <div className="form-group">
            <select name="category" value={adData.category} onChange={handleChange} required>
              <option value="">Choose category *</option>
              <option value="Multimedia">Multimedia</option>
              <option value="Vehicles">Vehicles</option>
              <option value="Clothes">Clothes</option>
              <option value="Pets">Pets</option>
            </select>
          </div>
          <div className="form-group">
            <input type="number" name="price" value={adData.price} onChange={handleChange} placeholder="Ad Your Price" />
          </div>
          <div className="form-group">
            <textarea name="description" rows={6} cols={60} value={adData.description} onChange={handleChange} placeholder="Ad Description"></textarea>
          </div>
          <div className="form-checkbox terms">
                   <input
                    type="checkbox"
                    id="priceOnCall"
                    name="priceOnCall"
                    onChange={handleChange}
                  />
                  <label htmlFor="priceOnCall">Price On Call</label>
        </div>
        </div>
        <div className="file-upload">
         <div className="upload-area">
         <label htmlFor="file-upload" className="upload-button">
                  Select Files
                  </label>
            <input type="file" id="file-upload" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
            {adData.image && <img src={adData.image} alt="Preview" className="image-preview" />}
            <p className="file-size">Maximum size: 500 KB</p>
          </div>
          </div>
        </div>
          

          <div className="idnn">
          <div id="d" style={{ display: 'flex', width: '100%' }}>
          <div className="divside"></div>
          <h4 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', marginTop: '3%', marginLeft: '2%', width: '100%' }}>Contact Details</h4>
          </div> 
          <div className="form-section">
          <div style={{ display: 'flex' }}>
               <div className="form-checkbox terms">
               <input
                    type="radio"
                   id="sameUser"
                    name="contactType"
                    onChange={handleChange}
                 />
                 <label htmlFor="sameUser">Same User</label>
           </div>
    
                <div className="form-checkbox terms ms-3">
                   <input
                    type="radio"
                    id="someoneElse"
                   name="contactType"
                  value="someoneElse"
                   onChange={handleChange}
                 />
                 <label htmlFor="someoneElse">Someone Else</label>
               </div>
             </div>
          <div className="name-group">
          <div className="form-group">
          <input type="text" name="phone" value={adData.phone} onChange={handleChange} placeholder="Phone Number *" required />
          </div>
          <div className="form-group">
            <input type="text" name="address" value={adData.address} onChange={handleChange} placeholder="Enter Address" />
          </div>
          </div>
          <div className="form-group">
            <select name="city" value={adData.city} onChange={handleChange}>
              <option value="">Select City</option>
              <option value="Casablanca">Casablanca</option>
              <option value="Rabat">Rabat</option>
              <option value="Marrakech">Marrakech</option>
              <option value="Fes">Fes</option>
            </select>
          </div>
          <div className="form-checkbox terms">
                <input
                  type="checkbox"
                 id="termsAgreement"
                  name="agreed"
                  onChange={handleChange}
               />
                <label htmlFor="termsAgreement">I agree to all Terms of Use & Posting Rules *</label>
            </div>
            <button type="submit" className="submit-button">{isEdit ? 'Update Ad' : 'Post Ad'}</button>
          </div>
          
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
}
