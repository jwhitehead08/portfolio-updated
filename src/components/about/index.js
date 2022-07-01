import React from "react";
import { Card , Container} from 'react-bootstrap';

function About(){
    return(<>
    <main id="about">
<Container className="mr-auto p-1">


    <Card className="bg-secondary m-5 p-5">
    <Card.Img variant="top" src="./images/jw.jpeg"/>
  <Card.Header>About Jeff Whitehead</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {' '}
        Full stack developer with an entrepreneurial and business background. Recently earned a certificate in full stack development from the Coding Bootcamp at UT Austin, a six month program with a focus on Javascript, CSS, Node.js, Mysql, React.js among other technologies. 

As a motivated professional at ease leading projects with many moving parts and cross disciplinary needs, I can bring my experience in creative pursuits and design to help identify elegant solutions to complex problems. I enjoy working with teams and clients, and creating systems to make work flow more efficient. With every project, my goal is to create a high quality product that is intuitive and benefits the user’s experience. I’m excited to deepen my understanding of software engineering and create great things. {' '}
      </p>
      <footer >
      <a className="text-black" href="https://www.linkedin.com/in/jeff-whitehead-530a376a/">LinkedIn</a>
      </footer>
    </blockquote>
  </Card.Body>
</Card>
</Container>

    </main>
    </>)
}

export default About;