import React from "react";
import FadeIn from 'react-fade-in';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Resume from "../Images/resume.pdf"

function Contact() {


  return (
    <><br></br>
    
    <br></br>
    <FadeIn>
      <Card className="row no-gutters">
        <FadeIn>
        <div className="col-md-12">
          <h4 className="card-title">Contact</h4>
         <hr />
        </div>
        </FadeIn>

       <Card className="row no-gutters">
        <FadeIn>
        <div className="col-md-12 text-center">
          <a className="card-title">Email me at eugeniasol13@gmail.com</a>
         
        </div>
        <br></br>
        <div className="text-center">
            <Button variant="dark" target="_blank" href="https://www.linkedin.com/in/eugenia-solana/">LinkedIn</Button>{' '}
            <Button variant="dark" target="_blank" href="https://github.com/eugesol">GitHub</Button>{' '}
            <Button variant="dark" target="_blank" href={Resume} >Resume</Button>
        </div>
        </FadeIn>
        </Card>
      </Card>
      </FadeIn>
      <br></br>
      <br></br>

      {/* <FadeIn>
      
        <Card className="row no-gutters justify-content-center " style={{ width: '18rem' }}>
          <Card.Body className="">
            <FadeIn>
            <Card.Text id="email">
             Email me at eugeniasol13@gmail.com
            </Card.Text>
            <br></br>
            <Button variant="dark" target="_blank" href="https://www.linkedin.com/in/eugenia-solana/">LinkedIn</Button>
            <br></br>
            <Button variant="dark" target="_blank" href="https://github.com/eugesol">GitHub</Button>
            <br></br>
            <Button variant="dark" target="_blank" href={Resume} >Resume</Button>
            </FadeIn>
          
        </Card>

      
      </FadeIn> */}
    </>
  );
}

export default Contact;