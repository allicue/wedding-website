import React from 'react';
import './Travel.css';
import Map from '../../assets/BoathouseMap2png.png';

function Travel(props) {
  return (
    <div>
      <header className='other-header'>
          <h2 className='header-title'>Getting There</h2>
      </header>
      <body id='travel-body'>
        <h3 className='travel-subtitle'>Rideshare Dropoff & Pickup Location (Uber, Lyft, etc.)</h3>
        <p className='travel-text'>Set destination/pickup to Lincoln Road & Ocean Avenue Entrance: <b>101 Ocean Ave, Brooklyn, NY 11225</b>.
        Walk straight across the bike path following park lamp posts with 'Boathouse' Signs until you reach the Cleftridge
        Tunnelon the right- walk through to the Boathouse.</p>

        <h3 className='travel-subtitle'>Public Transportation</h3>
        <p className='travel-text'>Take the train to B, Q, S Prospect Park Station, exit to Lincoln Road & turn left to the Park Entrance.
        Walk straight across the bike path following park lamp posts with 'Boathouse' Signs until you reach the Cleftridge
        Tunnel on the right- walk through to the Boathouse.</p>
        
        <h3 className='travel-subtitle'>Driving & Parking</h3>
        <p className='travel-text'>Make your way to the Willink Drive & Flatbush Avenue Entrance: <b>40.66377620318476, -73.9630156760817</b>.
        You can enter the park here and a wayfinder will direct you to the parking lot inside Prospect Park. Please note that parking is
        limited and if the lot is full, street parking is available near the Lincoln Road & Ocean Avenue Entrance: <b>101 Ocean Ave, Brooklyn, NY 11225</b></p>
      
        <h3 className='travel-subtitle'>Map</h3>
        <p className='travel-text'>Please see a map of the venue and entrance locations below or by clicking
        <a className='random-links' rel="noreferrer" target='_blank' href={Map}> here</a>.</p>
        
        <section className='map-container'>
          <img alt='map' className='img-map' src={Map}>
          </img></section>
        
      </body>
    </div>
  );
}

export default Travel;