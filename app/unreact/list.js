const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
export default function(item, i) {
	const { artist, event, price, trip } = item;
	const { inbound, outbound } = trip.flights;
	const eventDate = new Date(event.date*1000);
	const dateStart = new Date(outbound.departure_time*1000).toLocaleDateString('en-GB', dateOptions);
	const dateEnd = new Date(inbound.arrival_time*1000).toLocaleDateString('en-GB', dateOptions);
		return `
			<div class="card ticket translated">
				<div class="preview-data">
					<div class="ticket-header">
						<div class="hamburger">
							<span></span>
							<span></span>
							<span></span>
						</div>
						<div class="title">
							${artist.name}
						</div>
						<div class="price">
							<span>€&thinsp;</span>${Math.floor(price)}
						</div>
					</div>
					<div class="ticket-subheader">
						<div class="city">
							${event.destination}
						</div>
						<div class="dates">
							${dateStart}
						</div>
					</div>
				</div>
				<div class="additional-data">
					<div class="concert-info">
						<div class="artist-cover" style="background-image: url('${artist.photo_url}');">
						</div>
						<div class="consert-info">
							<div class="consert-name">
								${event.name}
							</div>
							<div class="consert-date">
								<div class="date start">
									<span>Start:</span>
									<span>${dateStart}</span>
								</div>
								<div class="date end">
									<span>End:</span>
									<span>${dateEnd}</span>
								</div>
							</div>
						</div>
					</div>
					<div class="btn-bar">
						<div class="flights">
							<div class="inbound">
								<span class="airport">
									${inbound.departure_airport}
								</span>
								<span class="flight-number">
									${inbound.flight_number}
								</span>
							</div>
							<div class="bound">&rarr;</div>
							<div class="outbound">
								<span class="airport">
									${outbound.departure_airport}
								</span>

								<span class="flight-number">
									${outbound.flight_number}
								</span>
							</div>
						</div>
						<a href="${trip.redirect_url}" class="btn btn-purple btn-lg btn-fill btn-book" >Book now! &rarr;</a>
					</div>
				</div>
			</div>
		`;

}
