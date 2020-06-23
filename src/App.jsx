import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import CarouselComponent from './carouselComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="center">Travis's Portfolio</h1>
        <div>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}

export default App;