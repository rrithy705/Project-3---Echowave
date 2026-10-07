import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'

// detail page URL for each location id (must match the routes in App.jsx)
const locationPaths = {
    1: '/echolounge',
    2: '/houseofblues',
    3: '/pavilion',
    4: '/americanairlines'
}

const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const locationsData = await LocationsAPI.getAllLocations()
                setLocations(locationsData)
            }
            catch (error) {
                console.error(error)
            }
        }) ()
    }, [])

    return (
        <div className='available-locations'>
            <h2 className='locations-heading'>
                <i className="fa-solid fa-music"></i> Pick a venue
            </h2>

            <div className='venue-grid'>
                {locations.map(location =>
                    <Link key={location.id} to={locationPaths[location.id]} className='venue-card'>
                        <img src={location.image} alt={location.name} />

                        <div className='venue-card-info'>
                            <h3>{location.name}</h3>
                            <p><i className="fa-solid fa-location-dot"></i> {location.city}, {location.state}</p>
                            <span className='venue-card-cta'>See events <i className="fa-solid fa-arrow-right"></i></span>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Locations
