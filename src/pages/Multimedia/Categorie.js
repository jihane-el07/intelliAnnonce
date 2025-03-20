import React, { useState, useEffect } from 'react';
import './Multimedia.css';
import axios from "axios";  
import Sidebar from './Sidebar';  
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import post from '../../pics/post1.png';
import { Link, useParams } from 'react-router-dom';
import Cards from './Cards';

export default function Categorie() {
    const [cards, setCards] = useState([]); 
    const { category } = useParams();

    useEffect(() => {
        axios.get(`https://data-lime.vercel.app/articles/category/${category}`)
            .then(response => setCards(response.data))
            .catch(error => console.error("Erreur :", error));
    }, []);
    
    


    return (
        <div>
          <div id="Post">
                <img src={post} width={1519} height={700} id='imgs' alt="" />
                <div id='float'>
                  <Nav />
                    <div className="titre">
                    <h1 id='h11'>{category} </h1>
                        <Link to="/" className='aa'>Home ---</Link>
                        <Link to='/listing' className='aa'>{category}</Link>
                    </div>
                </div>
            </div>
           
             <div className="cards-wrapper">
                            <div id='side'>
                            <Sidebar />
                            <img src="/images/off.jpg" alt="" id="offer"/>
                            </div>
            
                        <div className="cards-container">
                            {cards.length === 0 ? (
                                <p>Article not found</p>
                            ) : (
                            cards.map((card) => (
                                <Cards 
                                key={card.id} 
                                Carte={card}
                                />
                            ))
                            )}
                        </div>
                       
                            
            </div>
            
           
            <Footer/> 
        </div>
    );
}

