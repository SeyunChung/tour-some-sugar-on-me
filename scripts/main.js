import { Venues } from "./venue.js"
import { Bands } from "./band.js"
import { Bookings } from "./booking.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<article class="bookings">
    <h2>Current Bookings</h2>
    ${Bookings()}
</article>
<article class="details">
    <section class="detail--column list details__venues">
        <h2>Venues</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__bands">
        <h2>Bands</h2>
        ${Bands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML

