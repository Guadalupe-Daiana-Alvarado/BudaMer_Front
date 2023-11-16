import React from 'react';

const CarrouselDetails = ({ product }) => {
  if (!product || !product.photo || product.photo.length === 0) {
    // Manejar el caso cuando no hay fotos disponibles
    return <p>No hay fotos disponibles.</p>;
  }

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner rounded-md">
        {product.photo.map((photo, index) => (
          <div key={index} className={`carousel-item${index === 0 ? ' active' : ''}`}>
            <img src={photo} className="d-block w-full h-96 objet-fit-cover" alt={`maleta${index + 1}`} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarrouselDetails;
