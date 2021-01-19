import React from 'react';
import './Homepage.css'
import Countdown from '../../components/Countdown/Countdown';
import HomepageImg1 from '../../assets/IMG2.jpeg'

function Homepage(props) {
  return (
    <div id='homepage'>
      <header className='homepage-header'>
          <h2 className='header-title'>We're Getting Married!</h2>
          <Countdown />
          <h3 className='header-subtext'>FRIDAY, OCTOBER 1, 2021 | BROOKLYN, NY</h3>
      </header>

      <body className='body-homepage'>
        <section className='column'>
          <img alt='couple' className='img-1' src={HomepageImg1}/>
        </section>

        <section className='column'>
          <h3 className='body-title'>Ceremony & Reception</h3>
          
          <p className="homepage-text body-subtitle">FRIDAY, OCTOBER 1, 2021</p>
          <p className="homepage-text">PROSPECT PARK BOATHOUSE</p>
      
          <p className="homepage-text">6:00 PM - 11:00 PM</p>
          <br></br>
          <p className="homepage-text">DRESS CODE: COCKTAIL ATTIRE</p>
        </section>

      </body>

    </div>
  );
}

export default Homepage;