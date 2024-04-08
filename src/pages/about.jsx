import React from "react";
import "../CSS/about.css";
import pic1 from  "../assets/MohitSharma.jpg";
import pic2 from "../assets/SouravNarayan.jpg";
import pic3 from "../assets/Reetika.jpg";
import pic4 from "../assets/ParinitiSinha.jpg";
import pic5 from "../assets/AbhishekDeep.jpg";


const AboutUs = () => {
  const teamMembers = [
    { name: "Mohit Sharma", image: pic1 },
    { name: "Sourav Narayan", image: pic2 },
    { name: "Reetika", image: pic3 },
    { name: "Pariniti Sinha", image: pic4 },
    { name: "Abhishek Deep", image: pic5},
  ];

  return (
    <div className="about">
      <div className="about-us">
        <h1>Know Us Better...</h1>
        <p className="heading-p">
          Welcome to our website! We are a dedicated team of professionals who
          are passionate about what we do.
        </p>
      </div>
      <div className="container">
        <div className="box">
          <h2>Why?</h2>
          <p>Why we do...</p>
        </div>
        <div className="box">
          <h2>What?</h2>
          <p>What we do...</p>
        </div>
        <div className="box">
          <h2>How?</h2>
          <p>How we do...</p>
        </div>
      </div>
      <div className="team-title">
        <h2>Our Team</h2>
      </div>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
