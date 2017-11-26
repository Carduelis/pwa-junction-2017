function updateProgress() {
	$.getJSON(
		'http://localhost:8000/process/status',
		{ process_id: getQueryVariable('process_id') },
		function(data) {
			toggleCheckmark($(".progress-artists"), data.artists);
			toggleCheckmark($(".progress-concerts"), data.concerts);
			toggleCheckmark($(".progress-flights"), data.flights);

			if (data.artists && data.concerts && data.flights) {
				window.setTimeout(
					function() {
						window.location.href = './results';
					},
					800
				);
			} else {
				scheduleNextUpdate();
			}
		}
	);
}

function scheduleNextUpdate() {
	window.setTimeout(
		updateProgress,
		500
	);
}

function toggleCheckmark(element, completed) {
	if (completed) {
		element.children('.circle-loader').addClass('load-complete');
	}
}

function getQueryVariable(variable)
{
   var query = window.location.search.substring(1);
   var vars = query.split("&");

   for (var i=0; i<vars.length; i++) {
       var pair = vars[i].split("=");
       if(pair[0] == variable){return pair[1];}
   }

   return(false);
}

$().ready(function(){
	scheduleNextUpdate();
});