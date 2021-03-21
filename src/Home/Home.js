import React, { useEffect, useState } from "react";
import Header from "../Header/Header";

import Team from "../Team/Team";
import "./Home.css";

const Home = () => {
  const [leauge, setLeauge] = useState([]);

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setLeauge(data.leagues));
  }, []);

  const soccerLeauge = leauge.filter((leauge) => leauge.strSport === "Soccer");
  const Leauge = soccerLeauge.slice(0, 50);

  return (
    <div>
      <Header h1={true}>
        <h1>Greatest Game in earth</h1>
      </Header>

      <div className="Home">
        <div className="container ">
          <div className="row">
            <div className="leauge-section col-md col-xl col-xm col-xs">
              {Leauge.map((lg) => {
                return <Team leauge={lg}></Team>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
