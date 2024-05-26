var Util = function () {};

Util.prototype.success = function (payload, message, total_records) {
  return total_records || total_records === 0
    ? { success: true, message: message, result: payload, total_records }
    : { success: true, message: message, result: payload };
};
Util.prototype.error = function (payload, message) {
  //log.error("err: " + payload)
  return { success: false, message: message, result: [] };
};
Util.prototype.error_object = function (payload, message) {
  return { success: false, message: message, result: payload };
};
module.exports = new Util();
