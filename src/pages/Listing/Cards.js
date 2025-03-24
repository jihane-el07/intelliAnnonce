import React from 'react';
import './Cards.css'; 
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../favoritesSlice';

export default function Cards({ Carte }) {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites);
    const isFavorite = favorites.some((fav) => fav.id === Carte.id);
    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        if (isFavorite) {
          dispatch(removeFavorite(Carte)); // Utilise removeFavorite au lieu de removeFromFavorites
        } else {
          dispatch(addFavorite(Carte)); // Utilise addFavorite au lieu de addToFavorites
        }
    };

    return (
        <div className='cardd'>
            <img src={Carte.image} alt={Carte.title} className='img' />
            <div className='crdBody'>
                <h5 id='h55'>{Carte.title}</h5>
                <img 
            src={isFavorite ? '/pics/heart2.png' : Carte.imageH} 
            alt="Favorite" 
            width="25px" 
            style={{ position: "absolute", left: "87%", top: "52%", cursor: 'pointer' }} 
            onClick={handleFavoriteClick} 
          />
                <img src={Carte.imageM} alt="Location" width="13%" height="10%" className="location" />
                <span style={{ color: "#929292", position: "absolute", top: "80%", left: "15%" }} className='pos'>{Carte.location}</span>
                <p className='date'>{Carte.date}</p>
                <h4 id='prix'>{Carte.prix} DH</h4>
            </div>
            <Link to={`/details/${Carte.id}`}></Link>
        </div>
    );
}
