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
import clientImg from "../../assets/clientImg.png";
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
    <div className="w-full h-full lg:pb-[100px] flex flex-col items-center justify-center">
      {/* <div
        className="Home-Main-Container2"
        style={{ backgroundImage: `url(${headerBgImg})` }}
      >
        <Navbar />
        <div className="Home-SubContainer-Row-Align">
          <div className="Home-SubContainer1">
            <div className="Home-Container-Column">
              <h1 className="Home-SubContainer-Heading-Text">
                Where Vision <br /> Meets Innovation.
              </h1>

              <p className="Home-SubContainer-Description ">
                Stylish tortoiseshell glasses with clear nose pads, dual-tone
                temples, lightweight lenses, and UV-protected, anti-glare vision
                enhancement.
              </p>

              <a href="/contactus" className="Home-Visit-Btn">
                Visit Now
              </a>
            </div>
          </div>
          <div className="Home-SubContainer2">
            <SpecsHover />
          </div>
        </div>
      </div> */}
      <HomeHeader/>

      {/* ------------------------------------------------------------------------------------ */}

      <PartnerSlider />

      {/* About Us Section */}
      {/* <div className="Home-About-Section-Container">
        <h1 className="Home-About-Section-Heading">About Us</h1>
        <div className="Home-About-Row-Align-Container">
          <div className="Home-About-Sub-Container1">
            <h2 className="Home-About-Heading">
              We see the world through a <br /> sharper lens — Shree Opticals.
            </h2>
            <p className="Home-About-Description">
              With over Shree Opticals of expertise in the optical industry,
              we’re committed to delivering premium vision care and stylish
              eyewear solutions. Whether you're looking for prescription
              glasses, trendy sunglasses, or the latest in contact lens
              technology, we bring you the perfect blend of fashion, function,
              and eye health.
            </p>
            <a href="/contactus" className="Home-About-Visit-Btn">
              Visit Now
            </a>
          </div>
          <div className="Home-About-Sub-Container2">
            <img
              src={aboutSectionSpeck}
              alt="aboutSectionSpeck"
              className="Home-About-SpeckImg"
            />
            <img
              src={aboutSectionBg}
              alt="aboutSectionBg"
              className="Home-About-BgImg"
            />
          </div>
        </div>
      </div> */}
      <About/>
      {/* Our Products Section */}
      {/* <div className="Home-Products-Section-Container">
        <h1 className="Home-Products-Section-Heading">Our Products</h1>
        <h2 className="Home-Products-Section-Sub-Heading">Ours Specks</h2>
        <div className="Home-Products-Row-Align-Container">
          <div className="Home-Products-SubContainer1">
            <img
              src={mainImage}
              alt="productsSectionImg"
              className="Home-Products-Img"
            />
          </div>
          <div className="Home-Products-SubContainer2">
            <h2 className="Home-Products-Heading">
              See Clearly, Wear Confidently
            </h2>
            <p className="Home-Products-Description">
              Discover our premium range of eyewear — blending comfort, clarity,
              and cutting-edge style. From everyday essentials to designer
              frames, we have the perfect pair for every face and lifestyle.
            </p>
            <div className="Home-Products-Specks-Img-Row-Align">
              <img
                src={productsSpecksImg1}
                alt="productsSpecksImg1"
                className="Home-Products-Specks-Img"
                onClick={() => setMainImage(productsSectionImg)}
              />
              <img
                src={productsSpecksImg2}
                alt="productsSpecksImg2"
                className="Home-Products-Specks-Img"
                onClick={() => setMainImage(productsSectionImg2)}
              />
              <img
                src={productsSpecksImg3}
                alt="productsSpecksImg3"
                className="Home-Products-Specks-Img"
                onClick={() => setMainImage(productsSectionImg3)}
              />
            </div>
            <a href="/products" className="Home-Products-More-Btn">
              More Product
            </a>
          </div>
        </div>
      </div> */}
      <Products/>
      {/* Lenses Section */}
      {/* <div className="Home-Lenses-Section-Container">
        <h1 className="Home-Lenses-Section-Heading">Lenses</h1>
        <div
          className="Home-Lenses-Bg-Container"
          style={{ backgroundImage: `url(${lensesBg})` }}
        >
          <div className="Home-Lenses-SubContainer1">
            <h2 className="Home-Lenses-Heading">
              Eyeglass lens options include various types
            </h2>
            <p className="Home-Lenses-Description">
              Explore our wide range of high-quality lenses, including contact
              lenses, anti-reflective, photochromic, and blue light protection —
              designed to enhance vision clarity, comfort, and everyday eye
              protection.
            </p>
            <a href="/products" className="Home-Lenses-More-Btn">
              More Product
            </a>
          </div>
          <div className="Home-Lenses-SubContainer2">
            <img
              src={lensImg1}
              alt="lensImg1"
              className="Home-Lenses-LensTypes-Img"
            />
            <img
              src={lensImg2}
              alt="lensImg2"
              className="Home-Lenses-LensTypes-Img"
            />
            <img
              src={lensImg3}
              alt="lensImg3"
              className="Home-Lenses-LensTypes-Img"
            />
          </div>
        </div>
      </div> */}
      <Lenses />
      {/* Our Sunglasses Section */}
      {/* <div className="Home-Sunglasses-Section-Container">
        <h1 className="Home-Sunglasses-Section-Heading">Our Sunglasses</h1>
        <div className="Home-Sunglasses-Row-Align-Container">
          <div className="Home-Sunglasses-SubContainer1">
            <img
              src={sunglassesSectionImg}
              alt="sunglassesSectionImg"
              className="Home-Singlasses-Img"
            />
          </div>
          <div className="Home-Sunglasses-SubContainer2">
            <h2 className="Home-Products-Heading">
              See Style Clearly – Where Fashion Meets Function.
            </h2>
            <p className="Home-Products-Description">
              Elevate your style while protecting your eyes with our premium
              sunglasses collection. Featuring polarized, UV-protected, and
              fashion-forward designs, our shades offer comfort, clarity, and
              confidence for every occasion.
            </p>
            <a href="/products" className="Home-Products-More-Btn">
              More Product
            </a>
            <img
              src={sunglassBlackImg}
              alt="sunglassBlackImg"
              className="Home-Sunglasses-SubContainer2-Img"
            />
          </div>
        </div>
      </div> */}
      <Sunglasses />
      {/* Why Choose Us Section */}
      {/* <div className="Home-WhyChoose-Section-Container">
        <h1 className="Home-WhyChoose-Section-Heading">Why Choose Us ?</h1>
        <p className="Home-Products-Description">
          Experience the difference with our commitment to vision, style, and
          genuine care — trusted by thousands of happy customers.
        </p>

        <div
          className="Home-WhyChoose-Bg-Container"
          // style={{ backgroundImage: `url(${whyChooseBgImg})` }}
        >
          <div className="Home-WhyChoose-Row-Align-Container">
            <div className="Home-WhyChoose-CardBox">
              <img
                src={whyChooseIcon1}
                alt="whyChooseIcon1"
                className="Home-WhyChoose-Icon"
              />
              <h1 className="Home-WhyChoose-CardBox-Heading">
                State-of-the-art Testing
              </h1>
              <p className="Home-WhyChoose-CardBox-Description">
                Advanced technology ensures precise, reliable eye exams for
                optimal vision care.
              </p>
            </div>
            <div className="Home-WhyChoose-CardBox">
              <img
                src={whyChooseIcon2}
                alt="whyChooseIcon2"
                className="Home-WhyChoose-Icon"
              />
              <h1 className="Home-WhyChoose-CardBox-Heading">
                Curated Eyewear Brands
              </h1>
              <p className="Home-WhyChoose-CardBox-Description">
                Stylish, high-quality eyewear from thoughtfully selected premium
                brands.
              </p>
            </div>
            <div className="Home-WhyChoose-CardBox">
              <img
                src={whyChooseIcon3}
                alt="whyChooseIcon3"
                className="Home-WhyChoose-Icon"
              />
              <h1 className="Home-WhyChoose-CardBox-Heading">
                Personalized Consultations
              </h1>
              <p className="Home-WhyChoose-CardBox-Description">
                Expert guidance tailored to your unique vision and eyewear
                needs.
              </p>
            </div>
          </div>
          <div className="Home-WhyChoose-Row-Align-Container">
            <div className="Home-WhyChoose-CardBox2">
              <img
                src={whyChooseIcon1}
                alt="whyChooseIcon1"
                className="Home-WhyChoose-Icon"
              />
              <h1 className="Home-WhyChoose-CardBox-Heading">
                State-of-the-art Testing
              </h1>
              <p className="Home-WhyChoose-CardBox-Description">
                Advanced technology ensures precise, reliable eye exams for
                optimal vision care.
              </p>
            </div>
            <div className="Home-WhyChoose-CardBox2">
              <img
                src={whyChooseIcon2}
                alt="whyChooseIcon2"
                className="Home-WhyChoose-Icon"
              />
              <h1 className="Home-WhyChoose-CardBox-Heading">
                Curated Eyewear Brands
              </h1>
              <p className="Home-WhyChoose-CardBox-Description">
                Stylish, high-quality eyewear from thoughtfully selected premium
                brands.
              </p>
            </div>
          </div>
        </div>
      </div> */}
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
      <HappyCustomers/>

      <GetQuote backgroundImage={contactSectionBg} />
    </div>
  );
};
export default Home;
