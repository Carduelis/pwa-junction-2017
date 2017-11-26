import $ from 'jquery';
import data from './data';
import renderPage from './renderPage';

const BASE_URL = ''; // url for fetching tickets
export default function (options = {}) {
	const { sorting } = options;

	const $root = $('#root');
	$root.html(`<div class="preloader-page">
		<div class="preloader">
			<div class="preloader-spin"></div>
		</div>
	</div>`);
	let url = BASE_URL;
	if (sorting) {
		url = url + '?sorting='+sorting;
	}
	return $.getJSON(url).then(response => {
		renderPage(response);
	}).catch(error => {
		console.error('RENDER DUMMY DATA INSTEAD OF API');
		console.error(error);
		renderPage({ collection: data });
	});
}
