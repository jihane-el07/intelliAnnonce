import React, { useState, useEffect } from "react";
import "./Listing.css";
import axios from "axios";
import Cards from "./Cards";
import Sidebar from "./Sidebar";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import { Link } from "react-router-dom";
import Favorites from "../Favorites/Favorites";

export default function Listing() {
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]); // State to store favorites

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://data-lime.vercel.app/articles");
        const filteredCards = response.data.filter((article) => article.id <= 12);
        setCards(filteredCards);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  // Toggle favorite function
  const toggleFavorite = (card) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === card.id)) {
        // Remove if already in favorites
        return prevFavorites.filter((fav) => fav.id !== card.id);
      } else {
        // Add if not in favorites
        return [...prevFavorites, card];
      }
    });
  };

  return (
    <div>
      <div id="Post">
        <img src="pics/post1.png" id="imgs" alt="" />
        <div id="float">
          <Nav />
          <div className="title">
            <h1 id="lis">ListingProduct</h1>
            <Link to="/" className="aa">Home ---</Link>
            <Link to="/listing" className="aa">ListingProduct</Link>
          </div>
        </div>
      </div>

      <div className="cards-wrapper">
        <div id="side">
          <Sidebar />
          <img src="./images/off.jpg" alt="" id="offerR" />
        </div>
        <div className="cards-container">
          {cards.map((card) => (
            <Cards 
              key={card.id} 
              Carte={card} 
              toggleFavorite={toggleFavorite} 
              isFavorite={favorites.some((fav) => fav.id === card.id)}
            />
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}
