import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="black"> Sakthidhasan.V </span>
              from <span className={'black'}> Thiruppuvanam, India.</span>
              <br /> Exceptionally focused and reliable Entry level MERN stack developer with an outstanding work ethic and computer language knowledge base.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Riding & Travelling..
              </li>
              <li className="about-activity">
                <ImPointRight /> Playing..
              </li>
            </ul>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
