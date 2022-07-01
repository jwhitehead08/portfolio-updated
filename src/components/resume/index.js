import React from "react";
import { Card , Container} from 'react-bootstrap';
import PDF from './JWResume.pdf'

function Resume(){
    return(<>
    <main id="resume">
<Container className="mr-auto p-1">

    <Card className="bg-secondary m-5 p-5">
  <Card.Header>Skills</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, MongoDB, MySQL, Command Line, Github
{' '}
      </p>
      <footer >
      <a className="text-black" href={PDF} target="_blank" rel="noopener noreferrer">Resume</a>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Container>

    </main>
    </>)
}

export default Resume;