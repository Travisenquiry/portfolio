import React from 'react';
import M from "materialize-css";

export default class CarouselComponent extends React.Component {


  componentDidMount() {
    // Auto initialize all the things!
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var intervalFunction;
      var instances = M.Carousel.init(elems, {
        indicators: true,
        fullWidth: true,
        duration: 300,
      });
      var elem = document.querySelector('.carousel');
      var instance = M.Carousel.getInstance(elem);
      intervalFunction = setInterval(function() {
        instance.next()
      }, 4000);
    });
  }

  render() {
    return(
    <div>
       <div className="carousel carousel-slider">
        <a className="carousel-item" href="https://travisenquiry.github.io/sei22-poker-game/"><img src="https://res.cloudinary.com/travisenquiry/image/upload/v1592905624/Screenshot_2020-06-23_at_5.42.56_PM_litivb.png"></img></a>
        <a className="carousel-item" href="https://whispering-beyond-66555.herokuapp.com/"><img src="https://res.cloudinary.com/travisenquiry/image/upload/v1592905717/Screenshot_2020-06-23_at_5.46.29_PM_dbpd48.png"></img></a>
        <a className="carousel-item" href="https://goldfish-trainerds.herokuapp.com/"><img src="https://res.cloudinary.com/travisenquiry/image/upload/v1592906139/Screenshot_2020-05-26_at_5.20.54_PM_itr9rk.png"></img></a>
        <a className="carousel-item" href="https://sei22-user-forum.herokuapp.com/"><img src="https://res.cloudinary.com/travisenquiry/image/upload/v1592904957/Screenshot_2020-06-16_at_2.00.52_PM_v3kpjo.png"></img></a>
      </div>
    </div>
    )
  }
}