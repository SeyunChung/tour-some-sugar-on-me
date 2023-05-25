import { getVenues, getBands, getBookings } from "./database.js";

const venues = getVenues()
const bands = getBands()
const bookings = getBookings()


export const Venues = () => {
    return `
      <ul>
        ${venues.map((venue) => {
          return `<li data-maxoccupancy="${venue.maxOccupancy}" data-venuesize="${venue.squareFootage}" 
          data-address="${venue.address}" data-name="${venue.name}" data-id="${venue.id}" data-type="venue">${venue.name}</li>`
        }).join('')}
      </ul>
    `
  }
  

  document.addEventListener("click", (clickEvent) => { // This line adds an event listener to the entire document, so that when any element is clicked, the function specified in the second argument will be called.
    const itemClicked = clickEvent.target // This line sets the variable itemClicked to the element that was clicked, which is stored in the target property of the clickEvent object.
    if (itemClicked.dataset.type === 'venue') { // This line checks if the data-type attribute of the clicked element is equal to 'venue'. dataset is an object that contains all the data-* attributes of an element.
      const clickedVenueId = itemClicked.dataset.id // These lines set the variables clickedVenueId and clickedVenueName to the values of the data-id and data-name attributes of the clicked element, respectively.
      const clickedVenueName = itemClicked.dataset.name // These lines set the variables clickedVenueId and clickedVenueName to the values of the data-id and data-name attributes of the clicked element, respectively.
      const venueBookings = bookings.filter((booking) => `${booking.venueId}` === clickedVenueId) // This line creates a new array called venueBookings by filtering the bookings array to only include bookings for the venue with the ID stored in clickedVenueId. The filter method returns a new array containing only the elements for which the callback function returns true.
      const bookedBands = venueBookings.map((booking) => { //This line creates a new array called bookedBands by mapping over the venueBookings array and finding the band name associated with each booking. This is done by finding the band in the bands array with an ID matching the bandId property of the booking, and returning its name property.
        return bands.find((band) => booking.bandId === band.id).name //
      }) //
      const bandsMessage = bookedBands.length > 0 ? `${bookedBands.join(', ')} will be playing at ${clickedVenueName}` : `No bands are currently booked to play at ${clickedVenueName}` //This line sets the variable bandsMessage to a message that will be displayed in an alert dialog. If there are booked bands, the message will include their names and the name of the venue. If there are no booked bands, the message will say that no bands are currently booked for the venue.
      window.alert(bandsMessage)
    }
  })