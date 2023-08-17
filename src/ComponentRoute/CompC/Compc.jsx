import { useNavigate } from 'react-router-dom';
import React from 'react';

const  Compc =()=> {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/'); // Redirect to the '/about' route
  };

  return (
    <div>
      <h1>Component C</h1>
      <button onClick={handleRedirect}>Go to Home</button>
    </div>
  );
}

export default Compc;
