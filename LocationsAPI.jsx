const API_URL = '/api/locations'

const request = async (url) => {
    const response = await fetch(url)
    if (!response.ok) throw new Error(`Request to ${url} failed with status ${response.status}`)
    return response.json()
}

const getAllLocations = () => request(API_URL)

const getLocationById = (id) => request(`${API_URL}/${id}`)

const getEventsByLocation = (id) => request(`${API_URL}/${id}/events`)

export default {
    getAllLocations,
    getLocationById,
    getEventsByLocation
}
