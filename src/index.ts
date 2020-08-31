/**
 * Returns the CoreMedia ID for a supplied URL if possible.
 * @param  {string} url A URL containing a CoreMedia ID
 * @return {string|false} The string representation of a CoreMedia ID or false if no CMID was found.
 * @throws {TypeError} url argument must be a string
 */
export const url2cmid = (url: unknown): false | string => {
  if (typeof url !== 'string')
    throw new TypeError('url argument must be a string');
  const matches = url.match(/\/([0-9]+)(\/|([?#].*)?$|-[0-9]+x[0-9]+-)/);
  return matches ? matches[1] || false : false;
};

export default url2cmid;
