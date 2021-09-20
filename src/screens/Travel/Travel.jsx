import React from 'react';
import './Travel.css';
import Map from '../../assets/BoathouseMap2png.png';

function Travel(props) {
  return (
    <div>
      <header className='other-header'>
          <h2 className='header-title'>Getting There...</h2>
      </header>
      <body id='travel-body'>
        <h3 className='travel-subtitle'>By Rideshare (Uber, Lyft, etc.)</h3>
        <p className='travel-text'>Set your dropoff/pickup location to the Lincoln Road & Ocean Avenue Entrance: <b>101 Ocean Ave, Brooklyn, NY 11225</b>.
        Walk straight across the bike path following park lamp posts with 'Boathouse' Signs until you reach the Cleftridge
          Tunnelon the right- walk through the tunnel and continue straight to the Boathouse.</p>

        <h3 className='travel-subtitle'>By Public Transportation</h3>
        <p className='travel-text'>Take the B, Q, or S train to Prospect Park Station, exit to Lincoln Road & turn left to the Park Entrance.
        Walk straight across the bike path following park lamp posts with 'Boathouse' Signs until you reach the Cleftridge
        Tunnel on the right- walk through the tunnel and continue straight to the Boathouse.</p>
        
        <h3 className='travel-subtitle'>By Driving</h3>
        <p className='travel-text'>If you're driving, set your GPS location to enter the Willink Drive & Flatbush Avenue Entrance: <b>40.66377620318476, -73.9630156760817</b>.
          Please have the wedding invitation or <a className='random-links' rel="noreferrer" target='_blank' href={Map}> electronic direction card here</a> or below to show to staff who
          will direct you to the guest parking lot. From there, you can follow the path to the boathouse. Please note that parking is limited and if the lot is full, street parking is available
          near the Lincoln Road & Ocean Avenue Entrance: <b>101 Ocean Ave, Brooklyn, NY 11225</b>.</p>
      
        <h3 className='travel-subtitle' id='map-section'>Map</h3>
        <p className='travel-text'>Please see a map of the venue and entrance locations below or by clicking
        <a className='random-links' rel="noreferrer" target='_blank' href={Map}> here</a>.</p>
        
        <section className='map-container'>
        <a className='random-links' rel="noreferrer" target='_blank' href={Map}><img alt='map' className='img-map' src={Map}></img></a>
          
          </section>
        
      </body>
    </div>
  );
}

export default Travel;