import React, { useState, useEffect } from 'react'
import dates from '../utils/dates'
import '../css/Event.css'

const Event = ({ title, date, time, image, locationName }) => {
    const [remainingMs, setRemainingMs] = useState(() => dates.getRemainingMs(date, time))

    // tick the countdown every second
    useEffect(() => {
        setRemainingMs(dates.getRemainingMs(date, time))
        const interval = setInterval(() => setRemainingMs(dates.getRemainingMs(date, time)), 1000)
        return () => clearInterval(interval)
    }, [date, time])

    const hasPassed = remainingMs < 0

    return (
        <article className={`event-information ${hasPassed ? 'event-passed' : ''}`}>
            <img src={image} alt={title} />

            <p className={`event-countdown ${hasPassed ? 'negative-time-remaining' : ''}`}>
                <i className={`fa-regular ${hasPassed ? 'fa-calendar-xmark' : 'fa-clock'}`}></i>
                {dates.formatRemainingTime(remainingMs)}
            </p>

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{title}</h3>
                    {locationName && <p><i className="fa-solid fa-location-dot"></i> {locationName}</p>}
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {dates.formatDate(date)} <br /> {dates.formatTime(time)}</p>
                </div>
            </div>
        </article>
    )
}

export default Event
