import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Nav from "../../Nav/Nav";
import Footer from "../../Nav/Footer";
import post from "../../pics/post1.png";
import "./Details.css";
import Cards from "./Cards";

export default function Details() {
  const { id } = useParams(); // Get article ID from URL
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);  
  
  

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://data-lime.vercel.app/articles/${id}`);
        setArticle(response.data);

        const relatedResponse = await axios.get( "https://data-lime.vercel.app/articles");
        const filteredCards = relatedResponse.data.filter(article => article.id <= 3); // Filter by id
        setCards(filteredCards);
      } catch (error) {
        console.error("Error fetching article:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]); // Re-run when the ID changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!article) {
    return <p>Article not found</p>;
  }
  const detailsData = {
   
    features: [
      { label: "Brand", value: "Beats" },
      { label: "Condition", value: "New" },
      { label: "Authenticity", value: "Original" },
      { label: "Features", value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
    ],
  };
  const ownerData = {
    name: "Savannah Nguyen",
    memberSince: "Member Since 2022",
    location: "1978 Jasper Avenue #22A",
    images: {
      owner: "/images/owner.png",
      map: "/images/Map2.png",
      phoneIcon: "/images/PhonePlus.png",
    },
  };
  return (
    <div>
      <div id="Post">
        <img src={post} id="imgs" alt="" />
        <div id="float">
          <Nav />
          <div className="title">
            <h1 id='lis'>ProductDetails</h1>
            <Link to="/" className='aa'>Home</Link>
            <Link to={`/details/${id}`} className="aa">{article.title}</Link>
          </div>
        </div>
      </div>
      
      <div className="contai">
        <img src={`/${article.image}`} alt={article.title} id="caskP" />
        <div className="text">
          <span id='span' style={{ color: "#929292", fontFamily: "Abhaya Libre SemiBold" }}>
            {article.date}
          </span>
          <img src={`/${article.viewsI}`} alt="Views" style={{ marginLeft: "2%" }} />
          <span  style={{ color: "#929292", fontFamily: "Abhaya Libre SemiBold" }}>
            {article.views}
          </span>
          <p id="descriptionn">{article.contenu}</p>
          <h2 id="price" style={{ color: "#020053", fontSize: "50px", fontWeight: "bold" }}>
            {article.prix} DH
          </h2>
          <p style={{ color: "#929292", fontFamily: "Abhaya Libre SemiBold", marginLeft: "34%", marginTop: "-12%" }}>
            {article.negotiable}
          </p>
        </div>
        <div id="divside"></div>
        <h4 id="Featuress" style={{ color: "#020053" }}>Features:</h4>
        <hr style={{ width: "90%", marginLeft: "3%" }} />
        <div>
          {detailsData.features.map((feature, index) => (
            <button key={index} style={{
              width: "max-content", padding: "10px", borderRadius: "10px",
              backgroundColor: "#6a68d25a", color: "#020053", fontFamily: "Abhaya Libre SemiBold",
              border: "none", fontSize: "larger", fontWeight: "bold", margin: "2%"
            }}>
              {feature.label}: {feature.value}
            </button>
          ))}
        </div>

        <div id="divside"></div>
        <h4 id="Descriptionn" style={{ color: "#020053" }}>Description:</h4>
        <hr style={{ width: "90%", marginLeft: "3%" }} />
        <p id="lorem">{article.description}</p>
      </div>
      <div id="content-wrapper">
          
      <div id="owner">
      <div id="divside"></div>
      <h4 style={{ color: "#020053" }} id="AdOwner">Ad Owner:</h4>
      
      <div id="photo" style={{ display: "flex", alignItems: "center" }}>
        <img src={ownerData.images.owner} alt="Owner" width="50px" />
        <div style={{ marginLeft: "5%" }}>
          <h5 style={{ color: "#020053", fontFamily: "Abhaya Libre SemiBold", fontWeight: "bold", marginTop: "7%" }}>
            {ownerData.name}
          </h5>
          <p style={{ color: "#574E4E" }}>{ownerData.memberSince}</p>
        </div>
      </div>

      <div id="location" style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
        <img src={ownerData.images.map} alt="Map" width="8%" height="30px" />
        <div style={{ color: "#574e4e95", marginLeft: "10px" }}>
          {ownerData.location} <br />
          {ownerData.location}
        </div>
      </div>

      <button
        style={{width: "max-content",padding: "10px",borderRadius: "10px",backgroundColor: "#FF4367",color: "#f5f2f2ea",fontFamily: "Abhaya Libre SemiBold",border: "none",margin: "5% 0% 0% 10%",display: "flex",alignItems: "center",}}>
        <img src={ownerData.images.phoneIcon} alt="Phone" style={{ marginRight: "5px" }} />
        Click to See Number
      </button>
    </div>
    <div id="contact">
          <div id="divside"></div>
          <h4 style={{ color: '#020053' }} id="AdOwner">Contact Seller :</h4>
          <div style={{ margin: '0% 0% 5% 10%' }}>
          <input
        type="text"
        className="form-control w-75"
        style={{
          backgroundColor: '#fff',
          border: 'solid 1.5px #020053',
          marginBottom: '3%',
        }}
        placeholder="Name"
      />
    <input
        type="text"
        className="form-control w-75"
        style={{
          backgroundColor: '#fff',
          border: 'solid 1.5px #020053',
          marginBottom: '3%',
        }}
        placeholder="Mail Address"
      />            
   <textarea
        placeholder="Type Message"
        className="form-control w-75"
        rows="4"
        style={{
          backgroundColor: '#fff',
          border: 'solid 1.5px #020053',
        }}
      ></textarea>            
      <button   style={{ width: 'max-content',padding: '10px',borderRadius: '10px',backgroundColor: '#FF4367',color: '#f5f2f2ea',fontFamily: 'Abhaya Libre, SemiBold',border: 'none',margin: '5% 0% 0% 20%'}}> <img src="../images/send.png" alt="" />Send To Seller</button>
          </div>
      </div>
   
        <div id="review">
          <div id="divside"></div>
          <h4 id="Review">1 Review :</h4>
          <hr style={{ width: '90%', marginLeft: '3%' }} />
          <img src="../images/stars.png" alt="" id="stars2" />
          <div id="photoRev">
            <img src="../images/review.png" alt="" />
            <div style={{ margin: '3% 0% 0% 4%' }}>
              <span style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', fontWeight: 'bold', fontSize: 'larger' }}>Jane Cooper</span><br />
              <span style={{ color: '#574E4E' }}>Sep 4, 2021 at 12:14 am</span>
            </div>
          </div>
          <p id="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
        </div>
        </div>
        <div id="related">
    <div >
    <div id="divsidee"></div>
      <h4 id="Related">Related Ads :</h4>
      <Link
        to="/listing"
        id='va'
        style={{
          textDecoration: 'none',
          padding: '10px',
          borderRadius: '10px',
          backgroundColor: '#FF4367',
          color: '#f5f2f2ea',
          fontFamily: 'Abhaya Libre SemiBold',
          // position:'absolute',
          // left:'85%',
          // top:'28%',
          marginLeft: '90%',
          marginTop: '90%',
        }}
      >
        View All Ads
      </Link>
    </div>
      <hr id='hr' />
         <div className="cards-container">
            {cards.map((card) => (
               <Cards key={card.id} Carte={card} />
            ))}
          </div>
       
    
    </div>


      <Footer />
    </div>
  );
}
