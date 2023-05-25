const database = {
    venues: [{
        id: 1,
        name: "The Beverly Hilton",
        address: "9876 Wilshire Blvd, Beverly Hills, CA 90210",
        squareFootage: 6000,
        maxOccupancy: 333
}, {
        id: 2,
        name: "The Regency Ballroom",
        address: "1300 Van Ness Ave, San Francisco, CA 94109",
        squareFootage: 7000,
        maxOccupancy: 400
}, {
        id: 3,
        name: "The Novo by Microsoft",
        address: "800 W Olympic Blvd A335, Los Angeles, CA 90015",
        squareFootage: 7500,
        maxOccupancy: 500 
}, {
        id: 4,
        name: "The Masonic",
        address: "1111 California St, San Francisco, CA 94108",
        squareFootage: 2500,
        maxOccupancy: 150
} , {
        id: 5,
        name: "The Wiltern",
        address: "3790 Wilshire Blvd, Los Angeles, CA 90010",
        squareFootage: 5400,
        maxOccupancy: 300
} , {
        id: 6,
        name: "The Warfield",
        address: "982 Market St, San Francisco, CA 94102",
        squareFootage: 2300,
        maxOccupancy: 230
} , {
        id: 7,
        name: "The Greek Theatre",
        address: "2700 N Vermont Ave, Los Angeles, CA 90027",
        squareFootage: 5870,
        maxOccupancy: 444
}, {
        id: 8,
        name: "The Fillmore",
        address: "1805 Geary Blvd, San Francisco, CA 94115",
        squareFootage: 1200,
        maxOccupancy: 115
}, {
        id: 9,
        name: "The Great American Music Hall",
        address: "859 O'Farrell St, San Francisco, CA 94109",
        squareFootage: 5555,
        maxOccupancy: 600
}],
    bands: [{
        id: 1,
        name: "The Beatles",
        numberOfmembers: 4,
        genre: "Rock",
        yearFormed: 1960
    }, {
        id: 2,
        name: "Led Zeppelin",
        numberOfmembers: 4,
        genre: "Rock",
        yearFormed: 1968
    }, {
        id: 3,
        name: "The Rolling Stones",
        numberOfmembers: 4,
        genre: "Rock",
        yearFormed: 1962
    }, {
        id: 4,
        name: "Queen",
        numberOfmembers: 4,
        genre: "Rock",
        yearFormed: 1970
    }, {
        id: 5,
        name: "Pink Floyd",
        numberOfmembers: 5,
        genre: "Progressive rock",
        yearFormed: 1965
    }, {
        id: 6,
        name: "AC/DC",
        numberOfmembers: 5,
        genre: "Rock",
        yearFormed: 1973
    }, {
        id: 7,
        name: "Metallica",
        numberOfmembers: 4,
        genre: "Heavy metal",
        yearFormed: 1981
    }, {
        id: 8,
        name: "U2",
        numberOfmembers: 4,
        genre: "Rock",
        yearFormed: 1976
    }, {
        id: 9,
        name: "Radiohead",
        numberOfmembers: 5,
        genre: "Alternative rock",
        yearFormed: 1985
    }, {
        id: 10,
        name: "Nirvana",
        numberOfmembers: 3,
        genre: "Grunge",
        yearFormed: 1987
    }, {
        id: 11,
        name: "The Red Hot Chili Peppers",
        numberOfmembers: 4,
        genre: "Rock",
        yearFormed: 1983
    }, {
        id: 12,
        name: "Coldplay",
        numberOfmembers: 4,
        genre: "Rock",
        yearFormed: 1996
}],
    bookings: [{
        id: 1,
        bandId: 3,
        venueId: 9,
        bookingDate: "5/10/2023",
    }, {
        id: 2,
        bandId: 12,
        venueId: 7,
        bookingDate: "5/17/2023",
    }, {
        id: 3,
        bandId: 8,
        venueId: 5,
        bookingDate: "5/23/2023",
    }, {
        id: 4,
        bandId: 6,
        venueId: 8,
        bookingDate: "5/30/2023",
    }, {
        id: 5,
        bandId: 1,
        venueId: 6,
        bookingDate: "6/07/2023",
    }, {
        id: 6,
        bandId: 3,
        venueId: 2,
        bookingDate: "6/10/2023",
    }, {
        id: 7,
        bandId: 4,
        venueId: 1,
        bookingDate: "6/16/2023",
    }, {
        id: 8,
        bandId: 2,
        venueId: 3,
        bookingDate: "6/23/2023",
    }, {
        id: 9,
        bandId: 11,
        venueId: 4,
        bookingDate: "6/30/2023",
    }, {
        id: 10,
        bandId: 12,
        venueId: 9,
        bookingDate: "7/04/2023",
    }]}

    export const getVenues = () => {
        return database.venues.map(venue => ({...venue}))
    }
    
    export const getBands = () => {
        return database.bands.map(band => ({...band}))
    }
    
    export const getBookings = () => {
        return database.bookings.map(booking => ({...booking}))
    }
    
    