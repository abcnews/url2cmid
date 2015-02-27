/**
 * Returns the CoreMedia ID for a supplied URL if possible.
 * @param  {string} url A URL containing a CoreMedia ID
 * @return {string|false} The string representation of a CoreMedia ID or false if no CMID was found.
 */
module.exports = function(url) {
	var matches;
	matches = url.match(/\/([0-9]+)(\/|(\?.*)?$|-[0-9]+x[0-9]+-)/);
	return (matches) ? matches[1] || false : false;
}
