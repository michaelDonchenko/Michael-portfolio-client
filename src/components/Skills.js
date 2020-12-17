import React from 'react'
import { Card, Container } from 'react-bootstrap'
import aws from '../img/cards/aws.jpg'
import css3 from '../img/cards/css3.png'
import es6 from '../img/cards/es6.png'
import firebase from '../img/cards/firebase.png'
import git from '../img/cards/git.png'
import html5 from '../img/cards/html5.png'
import mongodb from '../img/cards/mongodb.png'
import nodejs from '../img/cards/nodejs.jpg'
import react from '../img/cards/react.png'
import reactbootstrap from '../img/cards/reactbootstrap.png'
import redux from '../img/cards/redux.png'
import './css/skills.css'

const Skills = () => {
  const cards = [
    {
      name: 'HTML5',
      image: html5,
      style: {
        imgWidth: '100%',
      },
    },
    {
      name: 'CSS3',
      image: css3,
      style: {
        imgWidth: '80%',
      },
    },
    {
      name: 'Java Script ES6+',
      image: es6,
      style: {
        imgWidth: '100%',
      },
    },
    {
      name: 'Modern React 16+',
      image: react,
      style: {
        imgWidth: '90%',
      },
    },
    {
      name: 'Redux',
      image: redux,
      style: {
        imgWidth: '90%',
      },
    },
    {
      name: 'React bootstrap',
      image: reactbootstrap,
      style: {
        imgWidth: '90%',
      },
    },
    {
      name: 'Node JS',
      image: nodejs,
      style: {
        imgWidth: '100%',
      },
    },
    {
      name: 'MongoDB',
      image: mongodb,
      style: {
        imgWidth: '90%',
      },
    },
    {
      name: 'Git',
      image: git,
      style: {
        imgWidth: '90%',
      },
    },
    {
      name: 'Firebase',
      image: firebase,
      style: {
        imgWidth: '90%',
      },
    },
    {
      name: 'AWS',
      image: aws,
      style: {
        imgWidth: '100%',
      },
    },
  ]
  return (
    <section id='skills'>
      <Container style={{ backgroundColor: 'white', padding: '80px 0 80px 0' }}>
        <h2
          style={{
            backgroundColor: 'black',
            textAlign: 'center',
            color: 'white',
            margin: '0',
            padding: '5px',
          }}
        >
          Programming Skills
        </h2>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '20px 0',
            padding: '10px',
          }}
        >
          {cards.map((card, i) => (
            <Card
              className='myCard'
              style={{
                width: '13rem',
                margin: '10px',
                textAlign: 'center',
                padding: '10px',
              }}
              key={i}
            >
              <Card.Body>
                <img
                  className='text-center'
                  src={card.image}
                  style={{
                    maxHeight: '150px',
                    width: `${card.style.imgWidth}`,
                  }}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Skills
