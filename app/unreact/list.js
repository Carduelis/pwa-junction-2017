const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
export default function(item, i) {
	const cover = '//placecage.com/300/30'+i;
	const dateStart = new Date().toLocaleDateString('en-GB', dateOptions);
	const tomorrow = new Date().getTime() + 1000*60*60*24;
	const dateEnd = new Date(tomorrow).toLocaleDateString('en-GB', dateOptions);
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
							Red Hot Chilly Peppers  ${item.id}
						</div>
						<div class="price">
							<span>€&thinsp;</span>757
						</div>
					</div>
					<div class="ticket-subheader">
						<div class="city">
							Moscow, Russia
						</div>
						<div class="dates">
							Tomorrow
						</div>
					</div>
				</div>
				<div class="additional-data">
					<div class="concert-info">
						<div class="artist-cover" style="background-image: url('${cover}');">
						</div>
						<div class="consert-info">
							<div class="consert-name">
								Junction 2017
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
						<button class="btn btn-lg btn-share" type="button">Invite a friend</button>
						<button class="btn btn-purple btn-lg btn-fill btn-book" type="button">Book now! &rarr;</button>
					</div>
				</div>
				<div class="background">
				</div>
			</div>
		`;

}
