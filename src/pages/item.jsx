import React,{useState,useEffect} from 'react';
import Card from "../components/Card"; // Import your Card component
import "../CSS/item.css";
import cardItems from '../database/card_item.json'; // Import your JSON file

const Item = () => {
  return (
    <div className="container">
      <div className="card-grid">
        {cardItems.map((item, index) => (
          <div className="col-sm-4" key={index}>
            <Card item={item} /> {/* Render Card */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
