import React from 'react';
import './Homepage.css'
import Countdown from '../../components/Countdown/Countdown';
import HomepageImg1 from '../../assets/IMG2.jpeg'

function Homepage(props) {
  return (
    <div id='homepage'>
      <header className='homepage-header'>
        <h2 className='header-title'>We're Getting Married!</h2>
        <h3 className='header-subtext'>FRIDAY, OCTOBER 1, 2021 <br></br>PROPSECT PARK BOATHOUSE | BROOKYLN, NY</h3>
        <section id='countdown-container'>
          <Countdown />
        </section>
      </header>

      <body className='body-homepage'>
        <section className='column'>
          <img alt='couple' className='img-1' src={HomepageImg1} />
          <h3 className='body-title'>Reception</h3>
          
          <p className="body-subtitle">6:30 PM - 11:00 PM</p>
          <p className="homepage-text">Cocktails, Dinner and Dancing <br></br>to Immediately Follow!</p> 

        </section>

        <section className='column'>
          <h3 className='body-title'>Ceremony</h3>
          
          <p className="body-subtitle">6:00 PM</p>
          <p className="homepage-text">Doors Open at <b>5:30 PM</b> <br></br>for Welcome Drinks</p> 

        </section>

      </body>

    </div>
  );
}

export default Homepage;