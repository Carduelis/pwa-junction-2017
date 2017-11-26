import $ from 'jquery';
const $header = $(`
		<h1 class="results-title">
			Concert Fly <span>Trips</span>
		</h1>
`);
$header.on('click', function() {
	window.location.href = '/';
});
export default $header;
