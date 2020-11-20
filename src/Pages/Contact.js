import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Button from "react-bootstrap/Button";
import Resume from "../Images/resume.pdf"

function Contact() {


  return (
    <><br></br>
    <br></br>
    <br></br>
      <Card className="row no-gutters">
        <div className="col-md-12">
          <h4 className="card-title">Contact</h4>
          <hr />
        </div>
      </Card>
      <CardDeck className="justify-content-center">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Text>
             Email me at eugeniasol13@gmail.com
            </Card.Text>
            <Button variant="dark" target="_blank" href="https://www.linkedin.com/in/eugenia-solana/">LinkedIn</Button>
            <br></br>
            <br></br>

            <Button variant="dark" target="_blank" href="https://github.com/eugesol">GitHub</Button>
            <br></br>
            <br></br>

            <Button variant="dark" target="_blank" href={Resume} >Resume</Button>
          </Card.Body>
        </Card>

      </CardDeck>
    </>
  );
}

export default Contact;