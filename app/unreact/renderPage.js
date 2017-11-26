import $ from 'jquery';
import asyncLoop from './asyncLoop';
import listRender from './list';
import fetchTickets from './fetchTickets';
import $header from './header';
import $sorting from './sorting';

const $wrapper = $(`<div class="wrapper"></div>`);

const DELAY = 50; // ms
const openFirstItem = $el => {
	setTimeout(function() {
		$el.eq(0).addClass('opened');
	}, DELAY*10);
}

const CLASS_CHOSEN_SORT = 'sorting-button--chosen';

export default function({ meta = {}, collection }) {
	console.log('meta is',meta);
	const sortingKey = meta.sorting;
	const $sortingBtns = $sorting.find('.sorting-button');
	if (sortingKey) {
		$sortingBtns.removeClass(CLASS_CHOSEN_SORT);
		$sorting.find(`.sorting-button[key="${sortingKey}"]`).addClass(CLASS_CHOSEN_SORT);
	}
	$sortingBtns.on('click', function(){
		const $btn = $(this);
		if (!$btn.hasClass(CLASS_CHOSEN_SORT)) {
			$btn.addClass('loading');
			fetchTickets({
				sorting: $btn.attr('key')
			}).then(response => {
				$btn.removeClass('loading');
			});
		}
	});
	const $root = $('#root');
	const $loader = $root.children();
	$loader.fadeOut(function() {
		$root.html($wrapper);
		$root.prepend($sorting);
		$root.prepend($header);
		$wrapper.html(collection.map(listRender));
		const $tickets = $wrapper.find('.ticket');
		const animateTicket = i => {
			$tickets.eq(i).removeClass('translated');
		}
		asyncLoop($tickets.length, animateTicket, DELAY);
		openFirstItem($tickets);

		$tickets.find('.preview-data').on('click', function() {
			$tickets.each(function(){
				$(this).removeClass('opened');
			});
			$(this).parent().addClass('opened');
		});
		$tickets.find('.btn-invite').on('click', function() {
			alert('This feature coming soon!');
		});
	});
}
