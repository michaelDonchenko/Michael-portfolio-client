import React from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import profile from '../img/profile.jpg'
import { useSpring, animated } from 'react-spring'

const Top = () => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <section id='top'>
      <Container>
        <Row style={{ backgroundColor: 'white', padding: '80px 0 80px 0' }}>
          <Col className='text-center' md={3}>
            <Image
              rounded
              style={{ height: '350px', marginBottom: '60px' }}
              src={profile}
              alt='profile'
            />
          </Col>
          <Col className='text-center' md={9}>
            <animated.h1
              className='mb-5'
              style={{ color: 'black', fontWeight: '600', fontSize: '3rem' }}
            >
              Full Stack Web Developer
            </animated.h1>
            <h2 className='mb-5' style={{ color: 'black' }}>
              Welcome to my Portfolio site!
            </h2>
            <h2 className='mb-5'>
              My name is{' '}
              <span style={{ color: 'black', fontWeight: '600' }}>
                Michael Donchenko,
              </span>{' '}
            </h2>
            <h2 style={{ color: 'black' }}>
              I am a self-taught{' '}
              <span style={{ color: 'black', fontWeight: '600' }}>
                Full Stack (MERN)
              </span>{' '}
              web developer.
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Top
