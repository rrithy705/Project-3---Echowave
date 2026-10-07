const API_URL = '/api/events'

const request = async (url) => {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Request to ${url} failed with status ${response.status}`)
    return response.json()
}

const getAllEvents = () => request(API_URL)

const getEventsById = (id) => request(`${API_URL}/${id}`)

export default {
    getAllEvents,
    getEventsById
}
