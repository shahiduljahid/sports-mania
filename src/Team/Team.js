import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Team.css";

const Team = (props) => {
  const { idLeague, strLeague } = props.leauge;
  const [team, setTeam] = useState([]);
  const {strBadge } = team;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.leagues[0]));
  }, [idLeague]);

  return (
    <div className="team">
      <img src={strBadge} alt="logo" />

      <p>{strLeague}</p>
     
      <Link to={`/team/${idLeague}`}>
        <button className="btn btn-primary">Explore</button>
      </Link>
    </div>
  );
};

export default Team;
