// CRAZY FILE

import fetchTickets from './fetchTickets';

export default function(request_id) {
	fetchTickets({ sorting: false, request_id });
}
