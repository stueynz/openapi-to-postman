/**
 * constructor openApiErr
 * @constructor
 * @param {*} message errorMessage
 * @param {*} data data
 */
function openApiErr(message, data) {
  this.message = message || '';
  this.data = data || {};
}

openApiErr.prototype = Error();

module.exports = openApiErr;
