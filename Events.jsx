import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Events.css'

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [locationFilter, setLocationFilter] = useState('all')
    const [sortOrder, setSortOrder] = useState('soonest')

    useEffect(() => {
        (async () => {
            try {
                const [eventsData, locationsData] = await Promise.all([
                    EventsAPI.getAllEvents(),
                    LocationsAPI.getAllLocations()
                ])
                setEvents(eventsData)
                setLocations(locationsData)
            }
            catch (error) {
                console.error(error)
            }
        }) ()
    }, [])

    const visibleEvents = events
        .filter(event => locationFilter === 'all' || event.location_id === Number(locationFilter))
        .sort((a, b) => {
            const diff = `${a.date}T${a.time}`.localeCompare(`${b.date}T${b.time}`)
            return sortOrder === 'soonest' ? diff : -diff
        })

    return (
        <div className='all-events'>
            <div className='events-controls'>
                <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} aria-label='Filter by location'>
                    <option value='all'>See events at all locations</option>
                    {locations.map(location =>
                        <option key={location.id} value={location.id}>{location.name}</option>
                    )}
                </select>

                <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} aria-label='Sort events'>
                    <option value='soonest'>Sort: earliest first</option>
                    <option value='latest'>Sort: latest first</option>
                </select>
            </div>

            <div className='events-grid'>
                {
                    visibleEvents.length > 0 ? visibleEvents.map(event =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.title}
                            date={event.date}
                            time={event.time}
                            image={event.image}
                            locationName={event.location_name}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events found!'}</h2>
                }
            </div>
        </div>
    )
}

export default Events
