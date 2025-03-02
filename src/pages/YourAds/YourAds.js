import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../Nav/Nav';
import './YourAds.css';
import Footer from '../../Nav/Footer';
import { saveAd, getAds, deleteAd } from '../../utils/storage';

export default function YourAds() {
  const navigate = useNavigate();
  const [ads, setAds] = useState([]);
  
  useEffect(() => {
    const storedAds = getAds();
    console.log("Retrieved Ads:", storedAds); // Debugging
    setAds(storedAds);
  }, []);

  const handleDelete = (adId) => {
    if (window.confirm('Are you sure you want to delete this ad?')) {
      deleteAd(adId); // Remove from local storage
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== adId)); // Update state
    }
  };
  const handleEdit = (adId) => {
    navigate(`/post-ad/${adId}`);
  };

  return (
    <div>
        <div id="Post">
                      <img src="images/navP.png" id="Nimg" alt="" />
                      <div id="float">
                        <Nav />
                     
                  </div>
     
     <h2 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold',fontSize:'3rem', textAlign:'center',marginBottom:'5%',marginTop:'5%',fontWeight:'2rem', }}>Your Ads</h2>

      <div className="your-ads-container ">
        <div className='ads-list '>
        {ads.length > 0 ? (
          ads.map((ad, index) => (
            <div key={index} className="ad-card">
              <img src={ad.image} alt={ad.title} />
              <div className="ad-details">
                <h3>{ad.title}</h3>
                <p>{ad.price}</p>
                <p>{ad.city}</p>
                <div className="ad-actions">
                <button onClick={() => handleEdit(ad.id)}>Edit</button>
                  <button onClick={() => handleDelete(ad.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No ads posted yet.</p>
        )}

        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}