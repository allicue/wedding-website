import React from 'react';
import './Homepage.css'
import Countdown from '../../components/Countdown/Countdown';
import HomepageImg1 from '../../assets/IMG2.jpeg'
import HomepageImg2 from '../../assets/IMG1.jpg'

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

      <body>

        <div className='schedule-homepage'>
        <section className='column'>
          <img alt='couple' className='img-1' src={HomepageImg1} />

          <h3 className='body-title reception-title'>Reception</h3>
          <p className="body-subtitle">6:30 PM - 11:00 PM</p>
          <p className="homepage-text">Cocktails, dinner and dancing!</p>           
        </section>

        <section className='column'>
          <h3 className='body-title'>Ceremony</h3>
          <p className="body-subtitle">6:00 PM</p>
          <p className="homepage-text">We strongly encourage guests to arrive early to make your way through the park as the ceremony will begin promptly at 6:00 PM.</p> 

          <img alt='couple' className='img-1 img-2' src={HomepageImg2} />
        </section>
        </div>
       

        <section className='wedding-party-section'>
        
          <h2 className='body-title wedding-party-header'>Wedding Party</h2>
            
          <div className='wedding-party'>
          <div className='wedding-party-column bridesmaids-column'>
            <h3 className='wedding-party-titles'>Maid of Honor</h3>
            <p className='wedding-party-names'>Sarayah Carver</p>
            <h3 className='wedding-party-titles'>Flower Girl</h3>
            <p className='wedding-party-names'>Olivia Richards</p>
            <h3 className='wedding-party-titles'>Ring Bearer</h3>
            <p className='wedding-party-names'>Emily Richards</p>
          </div>
          <div className='wedding-party-column groomsmen-column'>
            <h3 className='wedding-party-titles'>Best Men</h3>
            <p className='wedding-party-names'>Matt Kramer</p>
            <p className='wedding-party-names'>Eric Muniz</p>
            <p className='wedding-party-names'>Daniel Smith</p>
            <p className='wedding-party-names'>Matthew Smith</p>
            </div>
          </div>
          
        </section>

      </body>

    </div>
  );
}

export default Homepage;