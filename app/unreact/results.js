import $ from 'jquery';
import data from './data';
import asyncLoop from './asyncLoop';
const $header = $(`
		<h1 class="results-title">We discovered a few trips for you:</h1>
`)
const $wrapper = $(`
	<div class="wrapper"></div>
`);
export default function(searchQuery) {
	const $root = $('#root');
	const $loader = $root.children();
	$loader.fadeOut(function() {
		$root.html($wrapper);
		$root.prepend($header);
		const ticketsHTML = data.map((item, i) => {
			return `
				<div class="card ticket translated">
					<div class="preview-data">
						<div class="hamburger">
							<span></span>
							<span></span>
							<span></span>
						</div>${item.id}
					</div>
					<div class="additional-data">
						<div class="btn-bar">
							<button class="btn btn-lg" type="button">Invite a friend</button>
							<button class="btn btn-success btn-lg btn-fill" type="button">Book now! &rarr;</button>
						</div>
					</div>
				</div>
			`;
		});
		$wrapper.html(ticketsHTML);
		const $ticket = $wrapper.find('.ticket');
		const addClassToTicket = i => {
			$ticket.eq(i).removeClass('translated');
		}
		const DELAY = 50;
		asyncLoop($ticket.length, addClassToTicket, DELAY);
		setTimeout(function() {
			$ticket.eq(0).addClass('opened');
		}, DELAY*10);
		$ticket.find('.preview-data').on('click', function() {
			$(this).parent().toggleClass('opened');
		})
	});
}
