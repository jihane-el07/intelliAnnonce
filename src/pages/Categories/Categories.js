import React from 'react';
import Nav from '../../Nav/Nav';
import Footer from '../../Nav/Footer';
import { Link,useNavigate } from 'react-router-dom';
import "./Categories.css";
export default function Categories() {
  const categories = [
    {
      name: "Multimedia",
      image: "pics/cat1.png",
      link: "/categorie/Multimedia",
  
    },
    {
      name: "Household Appliances",
      image: "pics/cat2.png",
      link: "/categorie/Household Appliances",
      productCount: 1
    },
    {
      name: "Sport",
      image: "pics/cat3.png",
      link: "/categorie/Sport",
      productCount: 1
    },
    {
      name: "Pets",
      image: "pics/cat4.png",
      link: "/categorie/Pets",
      productCount: 2
    },
    {
      name: "Home And Garden",
      image: "pics/cat5.png",
      link: "/categorie/Home And Garden",
      productCount: 2
    },
    {
      name: "Clothes",
      image: "pics/cat6.png",
      link: "/categorie/Clothes",
      productCount: 2
    },
    {
      name: "Work And Study",
      image: "pics/cat7.png",
      link: "/categorie/Work And Study",
      productCount: 1
    },
    {
      name: "Vehicles",
      image: "pics/cat8.png",
      link: "/categorie/Vehicles",
      productCount: 2
    }
  ];

  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    navigate(category.link);
  };
  return (
    <div>
      <div id="Post">
          <img src="pics/post1.png" width={1519} height={700} id='imgs' alt="" />
          <div id='float'>
          <Nav />
          <div className="title">
            <h1 id='h11'>All Categories</h1>
            <Link to="/" className='aa'>Home ---</Link> 
            <Link to='/categories' className='aa'>All Categories</Link>
          </div>
        </div>
      </div>
      
      <div id="containere">
        {categories.map((category, index) => (
          <div className="cats" key={index}>
            <div id="titre" onClick={() => handleCategoryClick(category)}>
              <img src={category.image} alt={category.name} id='pi'/>
              <Link 
                to={category.link} 
                style={{
                  color: "#020053",
                  fontSize: "2rem",
                  fontFamily: "Abhaya Libre SemiBold",
                  marginLeft: "2%",
                  marginTop: "1%",
                  textDecoration:"none",
                }}
              >
                {category.name}
              </Link>
              <Link to="#" className="souscat">{category.productCount} Ads</Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
