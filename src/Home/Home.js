import React, { useEffect, useState } from 'react';

import Team from '../Team/Team';



const Home = () => {

    const [leauge , setLeauge] = useState([]);
   
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(response => response.json())
        .then(data =>setLeauge(data.leagues))
    },[])
   
    const soccerLeauge = leauge.filter(leauge=>leauge.strSport=== "Soccer")
    const Leauge = soccerLeauge.slice(0,20);
  

    
    return (
        <div>
           
           {
               Leauge.map(lg =>{
                   
                  return <Team  leauge={lg}></Team>
               })


           }

            
        </div>
    );
};

export default Home;