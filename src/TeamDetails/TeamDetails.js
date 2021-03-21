import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "../Header/Header";
import "./TeamDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faFutbol, faGlobe,  faMapMarkerAlt, faMars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
  const leaugeId = useParams();
  const objectId = Object.values(leaugeId);
  const id = Number(objectId);

  const [team, setTeam] = useState([]);

  //   const soccerleauge = team.filter(type=>type.)
  const {
    strCountry,
    strDescriptionEN,
    strLeague,
    strBanner,
    strBadge,
    strGender,
    intFormedYear,
    strSport,
    strTwitter,
    strWebsite,
    strYoutube,
  } = team;

  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTeam(data.leagues[0]));
  }, [id]);

  return (
    <div className="teamInfo">
      <div className="badge">
        <Header badge={strBadge}>
          <img src={strBadge} alt="badge" />
        </Header>
      </div>

      <div className="container">
        <div className="row  bg-primary" id="teamDetails">
          <div className="teamDetailsInfo col-xs col-md-6 col-sm-6 col-lg-6">
            <h4>{strLeague}</h4>
            <p> <FontAwesomeIcon className="ic" icon={faMapMarkerAlt} />Founded : {intFormedYear}</p>
            <p> <FontAwesomeIcon className="ic"  icon={faFlag} />Country : {strCountry}</p>
            <p> <FontAwesomeIcon className="ic"  icon={faFutbol} />Sport Type: {strSport}</p>
            <p> <FontAwesomeIcon className="ic"  icon={faMars} />Gender : {strGender}</p>
          </div>
          <div className="teamDetailsBanner col-lg-6 col-xs col-md-6 col-sm-6">
            <img src={strBanner} alt="logo" />
          </div>
        </div>
        <p className="description">Description :{strDescriptionEN}</p>
        <div className="row justify-content-center links">
          <Link className="web" to={`${strWebsite}`}>
            <FontAwesomeIcon icon={faGlobe} />
          </Link>
          <Link className="twitter" to={`${strYoutube}`}>
            <FontAwesomeIcon icon={faTwitterSquare} />
          </Link>
          <Link className="youtube" to={`${strTwitter}`}>
            <FontAwesomeIcon icon={faYoutube} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
