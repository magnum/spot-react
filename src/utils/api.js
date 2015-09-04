var request = require("superagent");

var token = JSON.parse(localStorage.getItem('bootreact_token'));
//request.set('x-access-token', token.token);

var api = function (){
  var baseUrl = window.apiUrl || 'https://api.spotify.com/v1';
  
  function processCallback(req, fn){
    if (typeof fn == 'function'){
      return req.end(fn);
    }
    return req;
  }

  return {
    del: function(path, fn) {
      var req = request
        .del(baseUrl + path);
      return processCallback(req, fn);
    },
    get: function(path, fn) {
      var req = request
        .get(baseUrl + path)
        .set('Accept', 'application/json');
      return processCallback(req, fn);
    },
    patch: function(path, data, fn) {
      var req = request
        .patch(baseUrl + path, data);
      return processCallback(req, fn);
    },
    post: function(path, data, fn) {
      var req = request
        .post(baseUrl + path, data);
      return processCallback(req, fn);
    },
    put: function(path, data, fn) {
      var req = request
        .put(baseUrl + path, data);
      return processCallback(req, fn);
    }
  };
};


module.exports = api;