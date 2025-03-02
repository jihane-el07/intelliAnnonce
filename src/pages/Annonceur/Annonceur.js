import React, { useState } from 'react'
import Details from '../Details/Details';
import Favorites from '../Favorites/Favorites';

export default function Annonceur(){
    const [favoriteItems, setFavoriteItems] = useState([]);
  
    const addToFavorites = (product) => {
      setFavoriteItems((prev) => [...prev, product]);
    };
  
    return (
      <div>
        <h1>Product List</h1>
        <Details addToFavorites={addToFavorites} />
        <Favorites favoriteItems={favoriteItems} />
      </div>
    );
  }
  
