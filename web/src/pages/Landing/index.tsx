import React from "react";
import { Link } from "react-router-dom";


import "./styles.css";
import logoImg from "../../asssets/images/logo.svg";
import landingImg from "../../asssets/images/landing.svg";
import studyIcon from "../../asssets/images/icons/study.svg";
import giveClassesIcon from "../../asssets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../asssets/images/icons/purple-heart.svg";

export default function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>
                <img
                    src={landingImg}
                    alt="SUa plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conexões já realizadas{" "}
                    <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    );
}