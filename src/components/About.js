import React from 'react'
import { Card, Container } from 'react-bootstrap'

const About = () => {
  return (
    <div id='about'>
      <Container style={{ backgroundColor: 'white' }}>
        <h2
          style={{
            backgroundColor: 'black',
            textAlign: 'center',
            color: 'white',
            margin: '0',
            padding: '5px',
          }}
        >
          About
        </h2>
        <Card
          className='projectCard'
          style={{ marginTop: '80px', padding: '20px' }}
        >
          <h4 className='text-muted' style={{ color: 'gray' }}>
            A little bit about myself:
          </h4>
          <p>
            Hi my name is Michael Donchenko, I am 26 years old from tel-aviv, A
            self taught full stack (MERN) web developer.
          </p>
          <p>
            Before programming I used to be a personal trainer for a few years
            after the army. Worked at the biggest gyms in Israel, met a lot of
            cool people and had a lot of fun.
          </p>
          <p>
            When i decided to switch my career to high tech at first i didn't
            know much about programming. I went to study cyber security like my
            friend did but didn't enjoy it at all. Then during the cyber course
            we had some programming with python, I really liked it and got
            interested more about programming.
          </p>
          <p>
            Since then I finished my cyber security course, and started learning
            programming by myself. It was amazing that I found something
            interesting and challenging at the same time! I studied every day
            and took a lot of internet courses, did a lot of research and it
            became very quickly a part of my life.
          </p>
        </Card>
      </Container>
    </div>
  )
}

export default About
