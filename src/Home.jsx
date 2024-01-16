import React from 'react'
import Products from './Products';
import Footer from './Footer'
import Subheading from './Subheading';

const Home = () => {
  return (
    <>
    <div>
     
      
    <div id="carouselExampleControls" className="carousel slide home-img" data-bs-ride="carousel">
      
      
      <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="https://assets.ajio.com/cms/AJIO/WEB/16082023-UHP-D-mainbanner-5090.gif" alt="img"  className="d-block w-100"/>
            </div>

            <div className="carousel-item">
              
            <img src="https://assets.ajio.com/cms/AJIO/WEB/18082023-UHP-D-Main-P4-DillingerJanasya-min60.jpg" alt="img2"  className="d-block w-100" />
            </div>

            <div className="carousel-item">
              <img src="https://assets.ajio.com/cms/AJIO/WEB/18082023-UHP-D-Main-P6-TrendsAvaasDNMX-Min60.jpg" alt="img3"  className="d-block w-100" />
            </div>

      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
  </div>

</div>

      
  
      <Subheading/>
      <Products/>
      <Footer/>
    
    </>
  )
  }

export default Home;