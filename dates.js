// date comes from the API as 'YYYY-MM-DD' and time as 'HH:MM:SS'
const toDateTime = (date, time = '00:00:00') => new Date(`${date}T${time}`)

const formatDate = (date) =>
    toDateTime(date).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })

const formatTime = (time) =>
    toDateTime('2000-01-01', time).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
    })

const getRemainingMs = (date, time) => toDateTime(date, time) - Date.now()

const formatRemainingTime = (ms) => {
    const totalSeconds = Math.floor(Math.abs(ms) / 1000)
    const days = Math.floor(totalSeconds / 86400)
    const hours = Math.floor((totalSeconds % 86400) / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    if (ms < 0) {
        if (days > 0) return `Event passed ${days} day${days === 1 ? '' : 's'} ago`
        if (hours > 0) return `Event passed ${hours} hour${hours === 1 ? '' : 's'} ago`
        return 'Happening now!'
    }

    return `${days}d ${hours}h ${minutes}m ${seconds}s left`
}

export default {
    formatDate,
    formatTime,
    getRemainingMs,
    formatRemainingTime
}
