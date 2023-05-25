import { getBands, getBookings, getVenues } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()

export const Bands = () => {
    let html = "<ul>"

    for (const band of bands) {
        html += `<li data-type="band" data-name="${band.name}" data-id="${band.id}" data-numberOfmembers="${band.numberOfmembers}" data-genre="${band.genre}" data-yearFormed="${band.yearFormed}">${band.name}</li>`
    }
    html += "</ul>"

    return html
}


const findBandBookings = (clickedBandId, bookingsArray) => {
    return bookingsArray.filter(booking => `${booking.bandId}` === clickedBandId);
  };
  
  const findVenues = (clickedBandBookings, venuesArray) => {
    return clickedBandBookings.map(booking => {
      const venue = venuesArray.find(venue => venue.id === booking.venueId);
      return venue && venue.name;
    }).filter(Boolean);
  };
  
  document.addEventListener("click", clickEvent => {
    const itemClicked = clickEvent.target;
    if (itemClicked.dataset.type === "band") {
      const clickedBandId = itemClicked.dataset.id;
      const clickedBandName = itemClicked.dataset.name;
      const bandBookings = findBandBookings(clickedBandId, bookings);
      const venuesBooked = findVenues(bandBookings, venues);
      const numVenuesBooked = venuesBooked.length;
      const venuesPlayingAt = numVenuesBooked === 0
        ? `${clickedBandName} do not currently have any shows booked`
        : `${clickedBandName} ${numVenuesBooked === 1 ? 'has' : 'have'} show${numVenuesBooked > 1 ? 's' : ''} booked at ${venuesBooked.join(', ')}`;
      window.alert(venuesPlayingAt);
    }
  });

