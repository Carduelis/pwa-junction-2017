let j = null;
export default function asyncLoop(i, callback, delay = 1000) {
	if (j === null) {
		j = i;
	}
	setTimeout(function () {
		console.log(callback);
		if (typeof callback === 'function') {
			callback(j-i, i);
		}
		if (--i) asyncLoop(i, callback, delay);      //  decrement i and call myLoop again if i > 0
	}, delay)
}
