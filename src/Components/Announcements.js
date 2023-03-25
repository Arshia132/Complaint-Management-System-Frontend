import React from "react";
import Ads1 from "../Assets/11.jpg";
import Ads2 from "../Assets/22.jpg";
import Ads3 from "../Assets/33.jpg";

const Announcements = () => {
  const announcementsInfoData = [
    {
      image: Ads1,
      title: "Real Estate",
      text: "Making your dream home a reality !",
    },
    {
      image: Ads2,
      title: "BigBazar",
      text: "Your Comfort our Priority ",
    },
    {
      image: Ads3,
      title: "Fashion",
      text: "Fashion today, Fashion Tomorrow",
    },

  ];

  return (
    <div className="Announcements-container">
      <h1>"Make your voice heard -Advertise on our platform!" </h1>
      <div className="Announcements-cards-container">
        {announcementsInfoData.map((data, index) => (
          <div key={index} className="Announcements-card">
            <img src={data.image} alt="" />
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;


