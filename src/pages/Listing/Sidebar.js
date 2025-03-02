import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
 

    const categories = [
        { name: "Multimedia", imgSrc: "/images/iconLap.png" },
        { name: "Household Appliances", imgSrc: "/images/houseHold.png" },
        { name: "Sport", imgSrc: "/images/Sport.png" },
        { name: "Pets", imgSrc: "/images/Pets.png" },
        { name: "Home And Garden", imgSrc: "/images/Home.png" },
        { name: "Clothes", imgSrc: "/images/Clothes.png" },
        { name: "Work And Study", imgSrc: "/images/Work.png" },
        { name: "Vehicles", imgSrc: "/images/Vehicules.png" }
    ];
    
    return (
        <div className="navSide">
            {categories.map((category, index) => (
                <div key={index} className="cate-Item">
                    <Link 
                        to={`/categorie/${encodeURIComponent(category.name)}`}  
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                        <img src={category.imgSrc} alt={category.name} className="iconR" />
                        <span className='text'>{category.name}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
    
}

