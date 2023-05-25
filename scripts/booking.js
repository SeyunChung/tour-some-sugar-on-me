import { getVenues, getBands, getBookings } from "./database.js";

// Get copy of state for use in this module
const venues = getVenues()
const bands = getBands()
const bookings = getBookings()


// 
const findBookingVenue = (booking, venues) => {
    let bookingVenue = ""

    for (const venue of venues) {
        if (venue.id === booking.venueId) {
            bookingVenue = venue
        }
    }

    return bookingVenue
}

// 
const findBookingBand = (booking, bands) => {
    let bookingBand = ""

    for (const band of bands) {
        if (band.id === booking.bandId) {
            bookingBand = band
        }
    }

    return bookingBand
}



export const Bookings = () => {
    let html = ""
    html = "<ul>"

    for (const booking of bookings) {
        const venue = findBookingVenue(booking, venues)
        const band = findBookingBand(booking, bands)
    
        html += `<li data-id="${booking.id}" data-type="booking" data-bandyear="${band.yearFormed}" data-bandmembers="${band.numberOfmembers}" data-bandgenre="${band.genre}" data-bandname="${band.name}">${band.name} are playing at ${venue.name} on ${new Date(booking.bookingDate).toLocaleDateString()}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        // Check if each booking list was clicked
        if (itemClicked.tagName === 'LI' && itemClicked.dataset.type === 'booking') {
            const bandInfo = `Band name: ${itemClicked.dataset.bandname}\n` +
                             `Genre: ${itemClicked.dataset.bandgenre}\n` +
                             `Year formed: ${itemClicked.dataset.bandyear}\n` +
                             `Number of members: ${itemClicked.dataset.bandmembers}`
            
            window.alert(bandInfo)
        }
    }
)

