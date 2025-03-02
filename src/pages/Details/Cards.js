import React from 'react';
import './Cards.css'; 
import { Link } from 'react-router-dom'; 


export default function Cards({ Carte }) {
    
    return (
        <div className='cardd'>
            <img src={`../../${Carte.image}`} alt={Carte.title} className='img' />
            <div className='crdBody'>
              <h5 id='h55'>{Carte.contenu}</h5>
                <img src={`../../${Carte.imageH}`} alt="Icon" width="25px" style={{ position: "absolute", left: "87%", top: "52%" }} />
                <img src={`../../${Carte.imageM}`} alt="Location" width="13%" height="10%" className="location" />
                <span style={{ color: "#929292", position: "absolute", top: "80%", left: "15%" }} className='pos'>{Carte.location}</span>
                <p className='date'>{Carte.date}</p>
                <h4 id='prix'>{Carte.prix} DH</h4>
            </div>
            <Link to={`/details/${Carte.id}`}></Link>

            </div>
    );
}
