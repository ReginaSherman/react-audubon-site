import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const BirdDetails = () => {
    let{ id } = useParams()
    const [ bird, setBird ] = useState(null)
    const url = 'https://audubon-api.herokuapp.com/api/birds/'
    let newUrl = url + id
    
    
    useEffect(() => {
      fetch(newUrl)
      .then((res) => res.json())
      .then((json) => setBird(json))
      .catch((err) => console.log('Error!', err))
    }, [newUrl])

    if (!bird) {
      return <p>Loading...</p>
    }
    
    return (
        <div className="details-container">
          <img
            src={ bird.image }
            alt={ bird.name }
          />
          <div className="details">
            <h2>{ bird.name }</h2>
            <h3>({ bird.genus })</h3>
            <h4>Conservation Status</h4>
            <p>
              { bird.conservationStatus }
            </p>
            <a
              href={  bird.homepage }
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        </div>
      );

}

export default BirdDetails