'use strict';

angular.module('sessionkeepApp')
  .controller('SessionkeepCtrl', function (
    $scope
    , $http
    , user
  ) {
    $scope.message = 'Hello';
    $scope.is_sessioning = false;
    $scope.start_time;
    $scope.stop_time;
    $scope.sessions;
    $scope.user;

    user.fetch().then(function(user) {
      console.log('user: ', user);
      $scope.user = user;
    });

    $scope.start_session = function() {
      $scope.start_time = new Date();
      console.log('start_time: ', $scope.start_time);
      $scope.is_sessioning = true;
    }

    $scope.stop_session = function() {
      $scope.stop_time = new Date();
      console.log('stop_time : ', $scope.stop_time);
      $scope.is_sessioning = false;
      // post to server
      // TODO: move into a service
      //$http
      var session = {
        start_time: $scope.start_time
        , stop_time: $scope.stop_time
      }
      $http.post('/api/practices', session)
      .success(function(data) {
        console.log(data);
      })
    }

    $scope.get_sessions = function() {
      // TODO: move into service
      $http.get('/api/practices')
      .success(function(data) {
        $scope.sessions = data
        console.log(data);
      })
    }
    $scope.get_sessions();

  });
