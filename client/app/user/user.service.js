'use strict';

angular.module('sessionkeepApp')
  .factory('user', function ($http, $q) {

    var fetch = function() {
      var deferred = $q.defer();
      $http.get('/api/users/me')
      .success(function(data) {
        deferred.resolve(data);
      });
      return deferred.promise;
    }

    // Public API here
    return {
      fetch: fetch
    };
  });
