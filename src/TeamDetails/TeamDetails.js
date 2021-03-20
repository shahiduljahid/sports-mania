import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const TeamDetails = () => {
  const leaugeId = useParams();
  const objectId = Object.values(leaugeId);
  const id =Number(objectId);

  
  const [team, setTeam] = useState([]);
 
//   const soccerleauge = team.filter(type=>type.)
  const{strCountry,strDescriptionEN,strLeague,strBanner}=team

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.leagues[0]));
  }, [id]);
 
  
  return (
    <div>
        <img src={strBanner} alt="logo"/>
      
      <h3>Name: {strLeague}</h3>
      <h2>country : {strCountry}</h2>
      <p>Description :{strDescriptionEN}</p>
    </div>
  );
};

export default TeamDetails;
