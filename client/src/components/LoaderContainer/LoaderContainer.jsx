import React from 'react';
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './loaderContainer.css';

const LoaderContainer = () => (
  <div className="loader-container">
    <Loader
      type="Circles"
      color="#1abc9c"
      height={64}
      width={64} />
  </div>
)

export default LoaderContainer;
