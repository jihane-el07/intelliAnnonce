import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Favorites.css';
import Nav from '../../Nav/Nav';
import Cards from '../Listing/Cards'
import Footer from '../../Nav/Footer';
export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="favorites-container">
         <div id="Post">
                <img src="images/navP.png" id="Nimg" alt="" />
                <div id="float">
                  <Nav />
               
            </div>
        </div>
        <div  className="fav">
            <h2 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold',fontSize:'3rem', textAlign:'center',marginBottom:'5%',marginTop:'5%',fontWeight:'2rem', }}>Your Favorites Products</h2>
            {favorites.length === 0 ? (
                <p style={{ color: '#E31616', fontFamily: 'Abhaya Libre SemiBold',fontSize:'2rem', textAlign:'center',marginBottom:'5%', }}>No favorite items yet.</p>
            ) : (
                <div className="favorites-grid">
                {favorites.map((item) => (
                    
                    <Cards key={item.id} Carte={item} />
                ))}
                </div>
            )}
        </div>
    <Footer/> 
    </div>
  );
}
