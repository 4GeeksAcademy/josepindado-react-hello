import React from 'react'

const Card = ({title, description, images}) => {
  return (
    <div className="card my-3 mx-auto" style= {{ width: "18rem"}}>
    <img src={images} className="card-img-top" alt="..." style={{ height: "200px", objectFit: "cover", borderRadius: "8px 8px 0 0"}}/>
    <div className="card-body">
      <h3 className="card-title">{title}</h3>
      <p className="card-text">{description}</p>
      <a href="#" className="btn btn-primary">Click here</a>
    </div>
  </div>
  );
};

export default Card