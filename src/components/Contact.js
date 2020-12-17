import React, { useState } from 'react'
import { Container, Form, Button, Alert } from 'react-bootstrap'
import Footer from './Footer'
import FormContainer from './FormContainer'
import axios from 'axios'
import Loader from './Loader'

const Contact = () => {
  const { REACT_APP_API } = process.env
  const [state, setState] = useState({
    email: '',
    phone: '',
    topic: '',
    message: '',
    error: '',
    success: '',
    loading: '',
  })

  const { email, phone, topic, message, error, success, loading } = state

  const handleSubmit = async (e) => {
    e.preventDefault()
    setState({ ...state, loading: true })
    try {
      const response = await axios.post(`${REACT_APP_API}/message`, {
        email: email,
        phone: phone,
        topic: topic,
        message: message,
      })
      if (response) {
        setState({
          email: '',
          phone: '',
          topic: '',
          message: '',
          error: '',
          success: response.data.message,
          loading: '',
        })
      }
    } catch (error) {
      setState({ ...state, loading: false, error: error.response.data.error })
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <div id='contact'>
      <Container style={{ backgroundColor: 'white', padding: '80px 0 10px 0' }}>
        <h2
          style={{
            backgroundColor: 'black',
            textAlign: 'center',
            color: 'white',
            margin: '0',
            padding: '5px',
          }}
        >
          Contact
        </h2>

        <FormContainer>
          <h2 style={{ textAlign: 'center', margin: '20px 0' }}>
            Send me a message
          </h2>

          {error && (
            <Alert
              variant='danger'
              dismissible
              onClose={() => {
                setState({ ...state, error: '' })
              }}
            >
              {error}
            </Alert>
          )}
          {success && (
            <Alert
              variant='success'
              dismissible
              onClose={() => {
                setState({ ...state, success: '' })
              }}
            >
              {success}
            </Alert>
          )}
          {loading && <Loader />}

          <p style={{ color: 'gray' }}>
            You can send me a message about anything you want, question or
            feedback or job related topics.
          </p>
          <Form onSubmit={handleSubmit} className='mb-4'>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleChange}
                name='email'
                value={email}
                required
                type='email'
                placeholder='Enter email'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Phone number{' '}
                {
                  <span style={{ color: 'gray', marginLeft: '10px' }}>
                    *optional
                  </span>
                }
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name='phone'
                value={phone}
                type='number'
                placeholder='Enter number'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Topic</Form.Label>
              <Form.Control
                onChange={handleChange}
                name='topic'
                value={topic}
                required
                type='text'
                placeholder='What do you want to talk about?'
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Message</Form.Label>
              <Form.Control
                onChange={handleChange}
                name='message'
                value={message}
                required
                as='textarea'
                rows={5}
                type='text'
                placeholder='Type your message'
              />
            </Form.Group>
            <Button type='submit' variant='dark' className='Link'>
              Submit
            </Button>
          </Form>
        </FormContainer>
        <hr></hr>

        <h2 style={{ textAlign: 'center', margin: '40px 0' }}>
          Contact me on social media
        </h2>
        <Footer />
        <footer style={{ padding: '20px 0' }}>
          <p style={{ textAlign: 'center' }}>
            Copyright © by Michael.Donchenko
          </p>
        </footer>
      </Container>
    </div>
  )
}

export default Contact
