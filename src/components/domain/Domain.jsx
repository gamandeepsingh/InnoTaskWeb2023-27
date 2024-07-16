import React from 'react'
import './domain.css'

export default function Domain() {
  return (
    <div className="container">

    <div className="firstrow">
      <div className="card" id="web">
        <div className="card-content">
        <h2 className="card-title">Web Development</h2>
        <p className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <a href="#" className="button">
            Learn More
        </a>
        </div>
      </div>

      <div className="card" id="android">
        <div className="card-content">
        <h2 className="card-title">Android Development</h2>
        <p className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <a href="#" className="button">
            Learn More
        </a>
        </div>
      </div>

      <div className="card" id="ml">
        <div className="card-content">
        <h2 className="card-title">Machine Learning</h2>
        <p className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <a href="#" className="button">
            Learn More
        </a>
        </div>
      </div>
    </div>

    <div className="secondrow">
      <div className="card" id="ar_vr">
        <div className="card-content">
        <h2 className="card-title">AR / VR</h2>
        <p className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <a href="#" className="button">
            Learn More
        </a>
        </div>
      </div>

      <div className="card" id="iot">
        <div className="card-content">
        <h2 className="card-title">Internet of Things</h2>
        <p className="card-body">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
        </p>
        <a href="#" className="button">
            Learn More
        </a>
        </div>
      </div>
    </div>
    </div>
  )
}
