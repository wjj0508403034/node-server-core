'use strict';

function Config(options) {

}

Config.prototype.getPort = function() {
  return process.env.PORT || 8080;
};

Config.prototype.getServiceName = function() {
  return process.env.SERVICENAME || "Untitled service";
};

module.exports = Config;