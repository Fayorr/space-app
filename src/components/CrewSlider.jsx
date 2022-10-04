import React from 'react'
import Slider from "react-slick";
import data from "../dataSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/Crew.css'



const Card = ({ name, title, about, image }) => {
return (
    <div className="  crew-con">
        <div className="crew-det">
            <h4>{title}</h4>
            <h3>{name}</h3>
            <p>{about}</p>
        <div className="crew-img">
            <img src={image} alt="" />
        </div>
        <hr className="crew-line" />
        </div>
    </div>
);
};

function CrewSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        };
        return (
            <>
     <Slider {...settings}>

   {data.map((obj) => {
   return(
   <Card {...obj} key={obj.id}/>)})}


     </Slider>
    </>
);
};




export default CrewSlider