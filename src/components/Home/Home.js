import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="home">
      <div className="container">
        <Link to="/peliculas" className="box" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'https://play-lh.googleusercontent.com/6eRpIKSEHPNny49xvp28qdODpI2F3rH7vvUjk7xoqHm54JHEwITQtv3rwuLkk838GkZPYjyUOONb8cEM5bM'})` }}>
          <h2 className="description" style={{ color: 'yellow' }}>PELÍCULAS</h2>
        </Link>
        
        <Link to="/series" className="box" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/rkETp35xJVj-6WaffQsS77awykM/AAAABaTpyiCPwQud2gAtvjgDwXabRK8hbbyjOXH6NMIRaTGgjgWAA08i-Eonz1AyP00-DVJqSiy4e_dRjNUv3BLmjX9Xwr8bpa7JJk4.jpg?r=6f7'})` }}>
          <h2 className="description" style={{ color: 'yellow' }}>SERIES</h2> 
        </Link>
      </div>
    </div>
  );
}

export default Home;
