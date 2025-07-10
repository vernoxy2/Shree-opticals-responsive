import React from "react";
// import "./ContactUs.css";
// import callImg from "../../assets/callImg.png";
// import mailImg from "../../assets/mailImg.png";
// import locationImg from "../../assets/locationImg.png";
// import mapBgImg from "../../assets/mapBgImg.png";
// import contactFormBg from "../../assets/contactFormBg.png";     
import contactHeaderImg from "../../assets/contactHeaderImg.png";
import Header from "../../components/header/Header";
import ContactDetails from "./ContactDetails";
import ContactFrom from "./ContactFrom";

const ContactUs = () => {
  return (
    <div className="w-full h-full pb-[100px] flex flex-col items-center justify-cente">
      <Header
        backgroundImage={contactHeaderImg}
        headingText={"Contact Us"}
        description={
          "Experience expert eye care and stylish eyewear, combining innovation, precision, and personalized service for crystal-clear vision and lasting confidence"
        }
      />

      {/* contact details */}
      {/* <div className="Contact-Details-Main-Row-Container">
        <div className="Contact-Details-Section1-Container">
          <div className="Contact-Details-CallUs-Main-Container">
            <div className="Contact-Call-Sub-Container">
              <div className="Contact-Details-CallUs-Row-Container">
                <img
                  src={callImg}
                  alt="callImg"
                  className="Contact-Call-Icon"
                />
                <h1 className="Contact-Call-Text">Call Us :</h1>
              </div>
              <h1 className="Contact-Call-Text">+ 91 99825 76458</h1>
            </div>
          </div>
          <div className="Contact-Call-Sub-Container">
            <p className="Contact-Details-Description">
              I am text block. Click edit button to change this text. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="Contact-Details-CallUs-Row-Container">
              <img src={mailImg} alt="mailImg" className="Contact-Call-Icon" />
              <div>
                <h1 className="Contact-Email-Address-Heading">Email :</h1>
                <p className="Contact-Email-Address-Description">
                  shree234@gmail.com
                </p>
              </div>
            </div>
            <div className="Contact-Details-CallUs-Row-Container">
              <img
                src={locationImg}
                alt="locationImg"
                className="Contact-Call-Icon"
              />

              <div>
                <h1 className="Contact-Email-Address-Heading">Address :</h1>
                <p className="Contact-Email-Address-Description">
                  pramukh sannidhya complex, B-5, Abrama Village, Valsad,
                  Abrama, Gujarat 396002
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="Contact-Details-Section2-Container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.848900548641!2d72.93863877599081!3d20.594227302559858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c3e59a68829f%3A0x9ef062442028e5b6!2sShree%20Optical!5e0!3m2!1sen!2sin!4v1749185031379!5m2!1sen!2sin"
            width="90%%"
            height="100%"
            allowFullScreen="true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
            className="Contact-Map"
          ></iframe>
          <div
            className="Contact-Map-Bg-Img"
            style={{ backgroundImage: `url(${mapBgImg})` }}
          ></div>
        </div>
      </div>  */}
      <ContactDetails />

      {/* contact form */}
      {/* <div className="Contact-Form-Main-Container">
        <h1 className="Contact-Form-Heading">
          We Are Ready To Serve,
          <br />
          Get In Touch.
        </h1>
        <div
          className="Contact-Form-Bg-Container"
          style={{ backgroundImage: `url(${contactFormBg})` }}
        >
          <div className="Contact-Form-Row-Container">
            <div className="Contact-Input-Container">
              <h1 className="Contact-Form-Input-Heading">Name</h1>
              <input className="Contact-Input" type="text" />
            </div>
            <div className="Contact-Input-Container">
              <h1 className="Contact-Form-Input-Heading">Email</h1>
              <input className="Contact-Input" type="text" />
            </div>
          </div>
          <div className="Contact-Input-Container2">
            <h1 className="Contact-Form-Input-Heading">Message :</h1>
            <input className="Contact-Input2" type="text" />
          </div>
          <button className="Contact-Input-Btn" type="submit">Submit</button>
        </div>
      </div> */}
      <ContactFrom  />

    </div>
  );
};
export default ContactUs;
