import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Patel </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />I am currently in 8th sem pursuing a Bachelor’s degree in<span className="purple"> IT Engineering.</span>
            <br />
            I am an aspiring software engineer who is passionate about learning
            and applying my skills.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hitting the Gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Sci-Fi Movies and Documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Science, Geopolitics, and Spirituality
              Topics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
