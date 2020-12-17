import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link, animateScroll as scroll } from 'react-scroll'

const Header = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Navbar
      style={{
        backgroundColor: '#212121',
      }}
      sticky='top'
      expand='lg'
      expanded={expanded}
    >
      <Container>
        <Navbar.Toggle
          style={{ backgroundColor: 'white' }}
          aria-controls='basic-navbar-nav'
          onClick={() => setExpanded(expanded ? false : 'expanded')}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link style={{ color: 'white', fontSize: '1.2rem' }}>
              <Link
                className='Link'
                onClick={() => (scroll.scrollToTop(), setExpanded(false))}
                spy={true}
                smooth={true}
                duration={1000}
              >
                Top
              </Link>
            </Nav.Link>

            <Nav.Link style={{ color: 'white', fontSize: '1.2rem' }}>
              <Link
                className='Link'
                onClick={() => setExpanded(false)}
                to='projects'
                spy={true}
                smooth={true}
                duration={1000}
                offset={-70}
              >
                Projects
              </Link>
            </Nav.Link>

            <Nav.Link
              style={{
                color: 'white',
                fontSize: '1.2rem',
              }}
            >
              <Link
                className='Link'
                onClick={() => setExpanded(false)}
                to='skills'
                spy={true}
                smooth={true}
                duration={1000}
              >
                Skills
              </Link>
            </Nav.Link>

            <Nav.Link style={{ color: 'white', fontSize: '1.2rem' }}>
              <Link
                className='Link'
                onClick={() => setExpanded(false)}
                to='about'
                spy={true}
                smooth={true}
                duration={1000}
                offset={-100}
              >
                About
              </Link>
            </Nav.Link>

            <Nav.Link style={{ color: 'white', fontSize: '1.2rem' }}>
              <Link
                className='Link'
                onClick={() => setExpanded(false)}
                to='about'
                spy={true}
                smooth={true}
                duration={1000}
                offset={450}
              >
                Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
