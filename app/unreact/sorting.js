import $ from 'jquery';

const $sorting = $(`
	<div class="wrapper">
		<div class="sorting">
			<span class="sorting-by">Sort by:</span>
			<span class="sorting-button sorting-button--chosen" key="time">Time</span>
			<span class="sorting-button" key="price">Price</span>
			<span class="sorting-button" key="band">Band</span>
		</div>
	</div>
`);


export default $sorting;
