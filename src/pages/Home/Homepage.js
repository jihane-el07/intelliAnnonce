import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';
import Nav from '../../Nav/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Footer from '../../Nav/Footer';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [city, setCity] = useState('');
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]); // Store search results
  const navigate = useNavigate();
  const { language, translations } = useSelector((state) => state.language || {
    language: 'en'
  });  
  const currentTranslations = translations?.[language] || translations?.en;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/articles");
        const filteredCards = response.data.filter(article => article.id <= 6); // Filter by id
        setProducts(filteredCards);
       
      } catch (error) {
        console.error("Error fetching articles:", error);
        if (error.response) {
          console.error("Server Response:", error.response.data);
        }
      }
    };
    fetchArticles();
  }, []);
  
  // const handleSearch = async () => {
  //   try {
  //     // Create the query parameters
  //     const params = new URLSearchParams();
  //     if (city) params.append('city', city);
  //     if (category) params.append('category', category);
      
  //     // Send the request to the API with the query parameters
  //     const response = await axios.get(`http://127.0.0.1:8000/api/articles?${params.toString()}`);
      
  //     // Update the state with the filtered results
  //     setResults(response.data);
  //   } catch (error) {
  //     console.error("Error fetching results:", error);
  //   }
  // };
  const handleSearch = () => {
    const params = new URLSearchParams();
    if (city) params.append('city', city);
    if (category) params.append('category', category);
    navigate(`/listing?${params.toString()}`);
  };
  
  
    
  
  // const handleSearch = () => {
  //   const params = new URLSearchParams();
  //   if (city) params.append('city', city);
  //   if (category) params.append('category', category);
  //   navigate(`/listing?${params.toString()}`);
  // };

  return (
    <div id="Post">
      <img src="pics/post3.png" width={1519} height={700} id='imgss' alt="" />
      <div id='float'>
        <Nav />
        <div id="search">
          <div className="hero-container">
            <h1 className="hero-title"><span id='wel'>{currentTranslations.welcome}</span> {currentTranslations.toint}</h1>
            <p className="hero-subtitle" dangerouslySetInnerHTML={{ __html: currentTranslations.subtitle }}></p>
          </div>
          <button
            style={{
              width: '200px',
              padding: '10px',
              borderRadius: '25px',
              backgroundColor: '#E31616',
              color: '#F8E8DA',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              fontSize: 'x-large',
              marginLeft: '400px',
              marginBottom: '10px',
            }}
            className='browsad'
          >
            <Link to={'/listing'} style={{ textDecoration:'none',color:'#F8E8DA' }} >

            {currentTranslations.browseAds}
            </Link>

          </button>
          <button
            style={{
              width: '200px',
              padding: '10px',
              borderRadius: '25px',
              backgroundColor: '#F8E8DA',
              color: '#E31616',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              marginLeft: '30px',
              fontSize: 'x-large',
            }}
            className='postad'
          >
          <Link to={'/post-ad'} style={{ textDecoration:'none' ,color: '#E31616'}} >
            {currentTranslations.postAd}
          </Link>
          </button>
        </div>
        <div id="searchbar">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <select
              className="form-select"
              style={{
                color: '#E31616',
                fontFamily: 'Abhaya Libre SemiBold',
                fontSize: 'larger',
                borderRadius: '15px',
                width: '35%',
                height: '50px',
                background: "url('../../pics/MapPinLine.png') no-repeat 10px center",
                backgroundColor: '#F8E8DA',
                paddingLeft: '50px',
              }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">{currentTranslations.selectCity}</option>
              <option value="Tanger">Tanger</option>
              <option value="Rabat">Rabat</option>
              <option value="Fes">Fès</option>
            </select>
            <select
              className="form-select"
              style={{
                color: '#E31616',
                height: '50px',
                fontFamily: 'Abhaya Libre SemiBold',
                fontSize: 'larger',
                borderRadius: '15px',
                width: '35%',
                marginLeft: '20px',
                background: "url('../../pics/AlignLeft.png') no-repeat 10px center",
                backgroundColor: '#F8E8DA',
                paddingLeft: '50px',
              }}
              value={category}
          onChange={(e) => setCategory(e.target.value)}
            >
                <option value="" >{currentTranslations.selectCategory}</option>
                <option value="Multimedia">Multimedia</option>
                <option value="Household Appliances">Household Appliances</option>
                <option value="Sport">Sport</option>
                <option value="Pets">Pets</option>
                <option value="Home And Garden">Home And Garden</option>
                <option value="Clothes">Clothes</option>
                <option value="Work And Study">Work And Study</option>
                <option value="Vehicles">Vehicles</option>
            </select>
           
            <button
              style={{
                width: '150px',
                borderRadius: '15px',
                backgroundColor: '#E31616',
                color: '#F8E8DA',
                marginLeft: '10px',
                fontFamily: 'Abhaya Libre SemiBold',
                border: 'none',
                fontSize: 'larger',
              }}
              onClick={handleSearch}
            >
              {currentTranslations.search}
            </button>
          </div>
          
        </div>
      </div>
      {/* Popular Categories */}
      <div id="cat">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>{currentTranslations.popularCategories}</h1>
          <button
            style={{
              width: '200px',
              padding: '10px',
              borderRadius: '25px',
              backgroundColor: '#E31616',
              color: '#F8E8DA',
              marginRight: '100px',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              fontSize: 'larger',
            }}
          >
            <Link to={'/categories'} style={{ textDecoration:'none',color:'#F8E8DA' }} >
            {currentTranslations.viewAllCategories}
            </Link>
          </button>
        </div>
        <div className="scroll">
          <div id='divcat1'
            style={{
              marginLeft: '1.5%',
            }}>
            <Link to={'/categorie/Multimedia'} style={{ textDecoration:'none',color:'#F8E8DA' }} >

            <img src="pics/multimedia.png" className='imgcat' width={200} alt="" />
            </Link>

          </div>
          <div
            id='divcat2'
            style={{
              marginLeft: '1.5%',
            }}
          >
            <Link to={'/categorie/Clothes'} style={{ textDecoration:'none',color:'#F8E8DA' }} >

            <img src="pics/clothes.png" className='imgcat' width={200} alt="" />
            </Link>
          </div>
          <div
            style={{
              marginLeft: '2%',
            }}
          >
            <Link to={'/categorie/Vehicles'} style={{ textDecoration:'none',color:'#F8E8DA' }} >

            <img src="pics/vehicles.png" className='imgcat' width={200} alt="" />
            </Link>
            </div>
          <div
            style={{
              marginLeft: '2%',
            }}
          >
           <Link to={'/categorie/Sport'} style={{ textDecoration:'none',color:'#F8E8DA' }} >

            <img src="pics/sport.png" className='imgcat' width={200} alt="" />
            </Link>
            </div>
          <div
            style={{
              marginLeft: '2%',
            }}
          >
            <Link to={'/categorie/Work And Study'} style={{ textDecoration:'none',color:'#F8E8DA' }} >
            <img src="pics/workandstudy.png" className='imgcat' width={200} alt="" />
            </Link>
            </div>
          <div
            style={{
              marginLeft: '2%',
            }}
          >
            <Link to={'/categorie/Home And Garden'} style={{ textDecoration:'none',color:'#F8E8DA' }} >
            <img src="pics/Homeandgarden.png" className='imgcat' width={200} alt="" />
            </Link>
            </div>
        </div>
      </div>

      {/* Recently Published Ads */}
      <div className="containerr">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>
            {currentTranslations.recentAds}
          </h1>
          <button
            style={{
              width: 'max-content',
              borderRadius: '25px',
              backgroundColor: '#E31616',
              color: '#F8E8DA',
              marginRight: '100px',
              fontFamily: 'Abhaya Libre SemiBold',
              border: 'none',
              fontSize: 'larger',
              height: '50px',
              paddingLeft: '2%',
              paddingRight: '2%',
            }}
          >
            <Link to={'/listing'} style={{ textDecoration:'none',color:'#F8E8DA' }} >
            {currentTranslations.viewAllAds}
            </Link>
          
          </button> 
        </div>
        <div className="card-container">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} id="img" />
              <h5 id='h5'>{product.contenu}</h5>
              <img src="images/Heart.png" alt="Favorite" width="25px" style={{ position: "absolute", left: '87%', top: '55%' }} />
              <img src="images/MapPinLine.png" alt="Location" width="13%" height="10%" id="map" />
              <span style={{ color: '#929292', position: 'absolute', top: '77%', left: '16%' }}>{product.location}</span>
              <p style={{ color: ' #BBB3B3', float: 'right', padding: '5%', marginTop: '11%', marginLeft: '60%' }}>{product.date}</p>
              <h4 id='h4'>{product.prix} DH</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Popular and Featurad Ads*/}
      <div className="containerr">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1 style={{ color: '#020053', fontFamily: 'Abhaya Libre SemiBold', marginLeft: '5%' }}>
            {currentTranslations.featuredAds}
          </h1>
        </div>
        <div className="card-container slider">
          <div className="slider-track">
            {[...products, ...products].map((product, index) => (
              <div className="card c" key={index}>
                <img src={product.image} alt={product.title} id="img" />
                <h5 id='h5'>{product.contenu}</h5>
                <img src="images/Heart.png" alt="Favorite" width="25px" style={{ position: "absolute", left: '87%', top: '56%' }} />
                <img src="images/MapPinLine.png" alt="Location" width="13%" height="10%" id="map" />
                <span style={{ color: '#929292', position: 'absolute', top: '77%', left: '16%' }}>{product.location}</span>
                <p style={{ color: ' #BBB3B3', float: 'right', padding: '5%', marginTop: '11%', marginLeft: '60%' }}>{product.date}</p>
                <h4 id='h4'>{product.prix}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="hero-heading">
            {currentTranslations.hereForYou}
          </h1>
        </div>

        {/* Feature Section */}
        <div className="feature-section">
          <div className="feature-item">
            <div>
              <img src="pics/c6.png" alt="" width="100%" />
            </div>
            <div>
              <h1 className="feature-title">{currentTranslations.sellSafely}</h1>
              <h3 className="feature-description">
              {currentTranslations.featureDesc}
              </h3>
            </div>
          </div>

          <div className="feature-item">
            <div>
              <img src="pics/c1.png" alt="" width="100%" />
            </div>
            <div>
              <h1 className="feature-title">{currentTranslations.buyDirectly}</h1>
              <h3 className="feature-description">
              {currentTranslations.featureDesc}
              </h3>
            </div>
          </div>

          <div className="feature-item">
            <div>
              <img src="pics/c2.png" alt="" width="100%" />
            </div>
            <div>
              <h1 className="feature-title">{currentTranslations.friendlyPlatform}</h1>
              <h3 className="feature-description">
              {currentTranslations.featureDesc}
              </h3>
            </div>
          </div>
        </div>

        <div className="feature-section">
          <div className="feature-item">
            <div>
              <img src="pics/c3.png" alt="" width="100%" />
            </div>
            <div>
              <h1 className="feature-title">{currentTranslations.payInPerson}</h1>
              <h3 className="feature-description">
              {currentTranslations.featureDesc}
              </h3>
            </div>
          </div>

          <div className="feature-item">
            <div>
              <img src="pics/c4.png" alt="" width="100%" />
            </div>
            <div>
              <h1 className="feature-title">{currentTranslations.support247}</h1>
              <h3 className="feature-description">
              {currentTranslations.featureDesc}
              </h3>
            </div>
          </div>

          <div className="feature-item">
            <div>
              <img src="pics/c5.png" alt="" width="100%" />
            </div>
            <div>
              <h1 className="feature-title">{currentTranslations.verifiedUsers}</h1>
              <h3 className="feature-description">
               {currentTranslations.featureDesc}
              </h3>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div>
          <h1 className="join-heading">
            {currentTranslations.joinUsTitle}
          </h1>
          <h3 className="join-subheading">{currentTranslations.joinUsSubtitle}</h3>
        </div>

        <div className="step-section">
          <div className="step-item">
            <div>
              <img
                src="pics/UserCircleCheck.png"
                alt=""
                width="30%"
                style={{ marginLeft: "70%" }}
              />
            </div>
            <div>
              <h1 className="step-title">{currentTranslations.createAccount}</h1>
              <h3 className="step-description">
                {currentTranslations.accountDesc}
              </h3>
            </div>
          </div>

          <div className="step-item">
            <div>
              <img
                src="pics/Vector-2.png"
                alt=""
                width="20%"
                style={{ marginLeft: "80%" }}
              />
            </div>
            <div>
              <h1 className="step-title">{currentTranslations.chooseProduct}</h1>
              <h3 className="step-description">
                {currentTranslations.productDesc}
              </h3>
            </div>
          </div>

          <div className="step-item">
            <div>
              <img
                src="pics/Vector-1.png"
                alt=""
                width="20%"
                style={{ marginLeft: "80%" }}
              />
            </div>
            <div>
              <h1 className="step-title">{currentTranslations.fillForm}</h1>
              <h3 className="step-description">
               {currentTranslations.formDesc}
              </h3>
            </div>
          </div>

          <div className="step-item">
            <div>
              <img
                src="pics/Vector.png"
                alt=""
                width="25%"
                style={{ marginLeft: "80%" }}
              />
            </div>
            <div>
              <h1 className="step-title">{currentTranslations.postAnnounce}</h1>
              <h3 className="step-description">
                {currentTranslations.postDesc}
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;