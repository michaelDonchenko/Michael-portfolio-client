import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProjectItem from './ProjectItem'
import jewelry from '../img/projects/jewelry.PNG'
import proShop from '../img/projects/proShop.PNG'
import mernAws from '../img/projects/mern-aws.PNG'

const Projects = () => {
  const projects = [
    {
      name: 'Hackr IO',
      description: 'test',
      builtWith: 'MERN Stack (Redux) + AWS',
      img: mernAws,
      githubLink: 'https://github.com/michaelDonchenko/mern-aws-client',
      demoLink: 'http://ec2-54-164-207-137.compute-1.amazonaws.com',
    },

    {
      name: 'Jewelry shop',
      description:
        'This project is a jewelry shop i did for a client. Fully working production ecommerce app with fully working authentication system with firebase, Admin and customers features and dashboard, full working purchase system orders history and much more.',
      builtWith: 'MERN Stack (Redux) + Firebase Auth',
      img: jewelry,
      githubLink: 'https://github.com/michaelDonchenko/olga-jewelry.01',
      demoLink: 'https://olga-jewelry.herokuapp.com/',
    },

    {
      name: 'Pro-Shop',
      description:
        'My first Full ecommerce app. A lot of admin user functionallity like CRUD products view and update users and view and update orders. Users can buy products with paypal or credit card and see thier order history, Users can rate and comment the products, fully working authentication for logged in users and for admins.',
      builtWith: 'MERN Stack (Redux)',
      img: proShop,
      githubLink: 'https://github.com/michaelDonchenko/proShop',
      demoLink: 'https://pro-shop01.herokuapp.com/',
    },
  ]
  return (
    <section id='projects'>
      <Container style={{ backgroundColor: 'white', paddingBottom: '60px' }}>
        <h2
          style={{
            backgroundColor: 'black',
            textAlign: 'center',
            color: 'white',
            margin: '0',
            padding: '5px',
          }}
        >
          Projects
        </h2>
        <div style={{ margin: '0', textAlign: 'center', padding: ' 5px' }}>
          <h5 style={{ color: 'gray' }}>Some examples of my recent projects</h5>
          <div>
            {projects.map((p, i) => (
              <ProjectItem
                key={i}
                name={p.name}
                description={p.description}
                builtWith={p.builtWith}
                img={p.img}
                githubLink={p.githubLink}
                demoLink={p.demoLink}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Projects
