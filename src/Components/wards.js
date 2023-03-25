import React from "react";
import Mumbai from "../Assets/1.jpg";
 import Worli from "../Assets/2.jpg";
  import Airport from "../Assets/3.jpg";
import Marine from "../Assets/4.jpg";
import Pune from "../Assets/5.jpg";
import MainPune from "../Assets/6.jpg";
import PuneCity from "../Assets/7.jpg";
import PuneMain from "../Assets/8.jpg";

const Wards = () => {
  const wardsInfoData = [
    {
      image:Mumbai,
      title: "Mumbai",
      text: "Mumbai Ward - Coulaba",
      
    },
    {
      image: Worli,
      title: "Bandra",
    text: "Bandra Ward - Worli",
    },
    {
      image: Airport,
      title: "Airport",
      text: "Andheri Ward - Airport Road",
    },
    {image:Marine,
     
        title: "Marine Drive",
        text: "Mumbai Ward - Marine Drive",
      },
      {
        image:Pune,
        title: "Pune",
        text: "Pune Ward - Chinchwad",
        
      },
      {
        image: MainPune,
        title: "Pune",
      text: "Pune Ward - Lohgad Fort",
      },
      {
        image: PuneCity,
        title: "Pune",
        text: "Pune Ward - GandhiNagar",
      },
      {image:PuneMain,
       
          title: "Pune",
          text: "Pune Ward - College Road",
        },
     
  ];

  return (
    <div className="wards-container">
      <h1>Search for your Ward Here</h1>
      <div className="wards-cards-container">
        {wardsInfoData.map((data, index) => (
          <div key={index} className="wards-card">
            <img src={data.image} alt="" />
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wards;




