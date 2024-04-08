import React,{ useState }  from 'react';
import "../CSS/item.css";
import { useNavigate } from 'react-router-dom';
const Card = ({ item }) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const handleClick = () => {
    navigate('/item');
  };
  const openPopup = () => { // Add this function
    setIsPopupOpen(true);
  };

  const closePopup = () => { // Add this function
    setIsPopupOpen(false);
  };
  return (
    <div className="card" >
      <img src={item.image} alt={item.title} /> {/* Use the image from the item object */}
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
        <button className='check-btn' onClick={openPopup}>Check Hostel Availability</button> 
        {/* <a href="/billing" className="btn btn-primary">Go to Billing</a> */}
      </div>
      {isPopupOpen && (
        <div className="overlay">
          <div className="popup">
            <h2>Availability</h2>
            <p>Hostel: {item.hostelName}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
