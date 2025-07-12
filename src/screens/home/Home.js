// import React, { useState } from "react";
// import "./Home.css";
// import headerBgImg from "../../assets/headerBgImg.png";
// import aboutSectionBg from "../../assets/aboutSectionBg.png";
// import aboutSectionSpeck from "../../assets/aboutSectionSpeck.png";
// import productsSectionImg from "../../assets/productsSectionImg.png";
// import productsSectionImg2 from "../../assets/productsSectionImg2.png";
// import productsSectionImg3 from "../../assets/productsSectionImg3.png";
// import productsSpecksImg1 from "../../assets/productsSpecksImg1.png";
// import productsSpecksImg2 from "../../assets/productsSpecksImg2.png";
// import productsSpecksImg3 from "../../assets/productsSpecksImg3.png";
// import lensesBg from "../../assets/lensesBg.png";
// import lensImg1 from "../../assets/lensImg1.png";
// import lensImg2 from "../../assets/lensImg2.png";
// import lensImg3 from "../../assets/lensImg3.png";
// import sunglassesSectionImg from "../../assets/sunglassesSectionImg.png";
// import sunglassBlackImg from "../../assets/sunglassBlackImg.png";
// import whyChooseIcon1 from "../../assets/whyChooseIcon1.png";
// import whyChooseIcon2 from "../../assets/whyChooseIcon2.png";
// import whyChooseIcon3 from "../../assets/whyChooseIcon3.png";
// import Navbar from "../../components/Navbar/Navbar";
// import SpecsHover from "../../components/specsHover/SpecsHover";
// import clientImg from "../../assets/clientImg.png";
import contactSectionBg from "../../assets/contactSectionBg.png";
import GetQuote from "../../components/getQuote/GetQuote";
// tailwind css implimentation
import PartnerSlider from "../../components/partnerSlider/PartnerSlider";
import HappyCustomers from "./HappyCustomers";
import Choose from "./Choose";
import Sunglasses from "./Sunglasses";
import Lenses from "./Lenses";
import Products from "./Products";
import About from "./About";
import HomeHeader from "./HomeHeader";

const Home = () => {
  // const [mainImage, setMainImage] = useState(productsSectionImg);

  return (
    <div>
      {/* Home Header */}
      <HomeHeader />
      {/* Partner Slider */}
      <PartnerSlider />
      {/* About Us Section */}
      <About />                                                                                                                                                                                                     
      {/* Our Products Section */}
      <Products />
      {/* Lenses Section */}
      <Lenses />
      {/* Our Sunglasses Section */}
      <Sunglasses />
      {/* Why Choose Us Section */}
      <Choose />
      
      {/* Our Happy Customers section */}
      {/* <div className="Home-OurClient-Section-Container">
        <h1 className="Home-OurClient-Section-Heading">Our Happy Client</h1>

        <div className="Home-OurClient-Row-Container">
          <div className="Home-OurClient-CardBox">
            <img
              src={clientImg}
              alt="clientImg"
              className="Home-OurClient-Img"
            />
            <h1 className="Home-OurClient-Heading">Roman Reigns</h1>
            <h2 className="Home-OurClient-Sub-Heading">Founder</h2>
            <p className="Home-OurClient-Description">
              Passionate about eye health, Dr.Harper ensures every exam is
              thorough and every client gets the best care possible.
            </p>
          </div>
          <div className="Home-OurClient-CardBox">
            <img
              src={clientImg}
              alt="clientImg"
              className="Home-OurClient-Img"
            />
            <h1 className="Home-OurClient-Heading">Roman Reigns</h1>
            <h2 className="Home-OurClient-Sub-Heading">Founder</h2>
            <p className="Home-OurClient-Description">
              Passionate about eye health, Dr.Harper ensures every exam is
              thorough and every client gets the best care possible.
            </p>
          </div>
          <div className="Home-OurClient-CardBox">
            <img
              src={clientImg}
              alt="clientImg"
              className="Home-OurClient-Img"
            />
            <h1 className="Home-OurClient-Heading">Roman Reigns</h1>
            <h2 className="Home-OurClient-Sub-Heading">Founder</h2>
            <p className="Home-OurClient-Description">
              Passionate about eye health, Dr.Harper ensures every exam is
              thorough and every client gets the best care possible.
            </p>
          </div>
        </div>
      </div> */}
      <HappyCustomers />

      <GetQuote backgroundImage={contactSectionBg} />
    </div>
  );
};
export default Home;
