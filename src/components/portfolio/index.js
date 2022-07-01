import React, { useEffect, useState } from "react";
import { Card, CardGroup, Container } from "react-bootstrap";
import projectsData from "./projects.json";

function Portfolio() {
  const [projects,setState] = useState([])
  useEffect(() => {
    setState(projectsData)
  },[])
    return(<>
<Container>
<CardGroup>
  {projects.map((element,key) => (
     <Card className="m-1 p-1" >
       <Card.Img variant="top" src={process.env.PUBLIC_URL+element.screenshot}/>
     <Card.Body>
       <Card.Title key={key}>{element.app}</Card.Title>
       <Card.Text>
        {element.description}
       </Card.Text>
     </Card.Body>
     <Card.Footer className="d-flex justify-content-between">
       <a href={element.github}>Github</a>
       <a href={element.live}>Live</a>
     </Card.Footer>
   </Card>)
 
  )}
  
</CardGroup>
</Container>

    </>)

}

export default Portfolio;