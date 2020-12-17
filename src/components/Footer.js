import React from 'react'
import './css/footer.css'

const Footer = () => {
  return (
    <div style={{ margin: '50px 0' }} className='footer'>
      <div className='iconDiv'>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/michael-donchenko-39aa711b3/'
          className='myIcons'
        >
          {' '}
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div className='iconDiv'>
        <a
          target='_blank'
          href='https://www.instagram.com/michael.donchenko/?hl=en'
          className='myIcons'
        >
          {' '}
          <i className='fab fa-instagram '></i>
        </a>
      </div>
      <div className='iconDiv'>
        <a
          target='_blank'
          href='https://github.com/michaelDonchenko'
          className='myIcons'
        >
          {' '}
          <i className='fab fa-github '></i>{' '}
        </a>
      </div>

      <div className='iconDiv'>
        <a
          target='_blank'
          href='https://www.facebook.com/michael.donchenko.10/'
          className='myIcons'
        >
          {' '}
          <i className='fab fa-facebook-square '></i>
        </a>
      </div>

      <div className='iconDiv'>
        <i className='fab fa-whatsapp myIcons'></i>
        <span style={{ fontSize: '25px' }}>0544721640</span>
      </div>
    </div>
  )
}

export default Footer
