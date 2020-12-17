import React from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap'

const ProjectItem = ({
  name,
  description,
  builtWith,
  img,
  githubLink,
  demoLink,
}) => {
  return (
    <Card style={{ margin: '50px 0' }}>
      <Card.Header as='h3'>{name}</Card.Header>
      <Card.Body>
        <Row>
          <Col md={6}>
            <img
              className='shadow'
              style={{ margin: '15px 0', width: '95%' }}
              src={img}
            />
          </Col>

          <Col md={6}>
            <Card.Title>Built with {builtWith}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <a target='blank' href={demoLink}>
              <Button className='mx-2 my-2 Link' variant='dark'>
                Live Demo
              </Button>
            </a>

            <a target='blank' href={githubLink}>
              <Button className='mx-2 my-2 Link' variant='dark'>
                Github Reposetory
              </Button>
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}

export default ProjectItem
