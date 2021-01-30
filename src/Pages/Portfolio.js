import React, { useState } from "react";
import Bytefinder from "../Images/bytefinder.png";
import Emptrack from "../Images/emp-track.jpg";
import Tvquiz from "../Images/tvquiz.jpg";
import Weather from "../Images/weather.png";
import Youfo from "../Images/youfo.jpg";
import Murder from "../Images/house.jpg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import FadeIn from "react-fade-in";



function Porfolio() {


  return (
    <><br></br>
      <br></br>

      <FadeIn>
        <Card className="row no-gutters">
          <FadeIn>
            <div className="col-md-12">
              <h4 className="card-title">Portfolio</h4>
              <hr />
            </div>
          </FadeIn>

          <CardDeck className="justify-content-center">
            <FadeIn></FadeIn>

            <Card style={{ width: '18rem' }}>
              <Card.Img src={Murder}
                alt="Murder at the Manor" variant="top" />
              <Card.Body>
                <Card.Title>Murder at the Manor</Card.Title>
                <Card.Text>
                  A point a click game based around a murder mystery. I personally designed all brackgrounds in adobe creative suite
            </Card.Text>
            <div className="position-absolute bottom-center">
                <Button variant="dark" target="_blank" href="https://github.com/eugesol/Murder-Mystery-Game">Live Site</Button>{' '}
                <Button variant="dark" target="_blank" href="https://github.com/eugesol/Murder-Mystery-Game">Source Code</Button>
              </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img src={Bytefinder}
                alt="ByteFinder" variant="top" />
              <Card.Body>
                <Card.Title>ByteFinder</Card.Title>
                <Card.Text>
                  A website for searching recipes, making shopping lists, and finding near-by stores.
                </Card.Text>
                <div className="position-absolute bottom-center">
                  <Button variant="dark" target="_blank" href="https://logantwalker.github.io/Project-01-ByteFinder/index.html">Live Site</Button>{' '}
                  <Button variant="dark" target="_blank" href="https://github.com/eugesol/Project-01-ByteFinder">Source Code</Button>
                </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img src={Tvquiz}
                alt="TV Quiz" variant="top" />
              <Card.Body>
                <Card.Title>TV Quiz</Card.Title>
                <Card.Text>
                  A fun TV quiz I created using Javascript , HTML, and CSS. It is a timed quiz with high scores saving capabilities.
             </Card.Text>
                <div className="position-absolute bottom-center">
                  <Button variant="dark" target="_blank" href="https://eugesol.github.io/TV-Quiz/">Live Site</Button>{' '}
                  <Button variant="dark" target="_blank" href="https://github.com/eugesol/TV-Quiz">Source Code</Button>
                </div>
              </Card.Body>
            </Card>

          </CardDeck>


          <br></br>

          <CardDeck className="justify-content-center">

            <Card style={{ width: '18rem' }}>
              <Card.Img src={Weather}
                alt="Weather Dashboard" variant="top" />
              <Card.Body>
                <Card.Title>Weather Dashboard</Card.Title>
                <Card.Text>
                  An aplication that will allow the user to search for a city and find out the weather forecast for the the next 5 days.
            </Card.Text>
                <div className="position-absolute bottom-center">
                  <Button variant="dark" target="_blank" href="https://eugesol.github.io/Weather/">Live Site</Button>{' '}
                  <Button variant="dark" target="_blank" href="https://github.com/eugesol/Weather">Source Code</Button>
                </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img src={Youfo}
                alt="YouFO" variant="top" />
              <Card.Body>
                <Card.Title>YouFO</Card.Title>
                <Card.Text>
                  A fun UFO sightings tracking app, you can log in and search for sightings by city
            </Card.Text>
            <div className="position-absolute bottom-center">
                <Button variant="dark" target="_blank" href="https://youfo.herokuapp.com/">Live Site</Button>{' '}
                <Button variant="dark" target="_blank" href="https://github.com/eugesol/YouFO">Source Code</Button>
              </div>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img src={Emptrack}
                alt="Employee tracker" variant="top" />
              <Card.Body>
                <Card.Title>Employee Tracker</Card.Title>
                <Card.Text>
                  Command line application that makes it easy for employers to view and interact with information stored in the employee database.
            </Card.Text>
                <div className="position-absolute bottom-center">
                  <Button variant="dark" target="_blank" href="https://drive.google.com/file/d/1KlQmAjsGThwwt6im3SMx0z--5iDPxygU/view">Demo</Button>{' '}
                  <Button variant="dark" target="_blank" href="https://github.com/eugesol/Employee-Tracker">Source Code</Button>
                </div>
              </Card.Body>
            </Card>

          </CardDeck>
        </Card>
      </FadeIn>
    </>
  );
}

export default Porfolio;
