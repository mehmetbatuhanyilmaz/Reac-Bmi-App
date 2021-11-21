import React from "react";
import "./style.css";
import { Card } from "react-bootstrap";

function About() {
  return (

    
    <div className="bgAbout">
      <div>
      <Card className="cardmain" >
          <Card.Header className="cardAbout">
            Hakkımızda
          </Card.Header>
          <Card.Body >
          <Card.Title> Tüm Hakları Saklıdır</Card.Title>
            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>




      <div className="cardList">
        <Card className="card card1" border="primary">
          <Card.Header className="cardText">
            Diyet ve Sağlıklı Beslenme
          </Card.Header>
          <Card.Body >
           
          </Card.Body>
        </Card>
        <br />

        <Card className="card card2 " border="secondary">
          <Card.Header className="cardText">Online Beslenme Danışmanlığı</Card.Header>
          <Card.Body>
            
          </Card.Body>
        </Card>
        <br />

        <Card className="card card3 " border="success">
          <Card.Header className="cardText">Sporcu Beslenmesi</Card.Header>
          <Card.Body>
            
          </Card.Body>
        </Card>
        <br />

        <Card className="card card4 " border="danger">
          <Card.Header className="cardText">Kurumsal Beslenme Danışmanlığı</Card.Header>
          <Card.Body>
            
          </Card.Body>
        </Card>

        <br />
      </div>
    </div>
  );
}

export default About;
