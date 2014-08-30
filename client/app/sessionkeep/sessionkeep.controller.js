'use strict';

angular.module('sessionkeepApp')
  .controller('SessionkeepCtrl', function (
    $scope
    , $http
    , user
  ) {
    $scope.message = 'Hello';
    $scope.is_practicing;
    $scope.start_time;
    $scope.stop_time;
    $scope.sessions;
    $scope.user;
    $scope.practice_location = 'SLC';

    user.fetch().then(function(user) {
      console.log('user: ', user);
      $scope.user = user;

      $scope.is_practicing = user.practicing;
    });

    $scope.start_session = function() {
      $scope.start_time = new Date();
      console.log('start_time: ', $scope.start_time);
      var session = {
        start_time: $scope.start_time
      }
      $http.post('/api/practices', session)
      .success(function(data) {
        $http.post('/api/users/set_practicing', {practicing: true})
        .success(function(data) {
          $scope.is_practicing = true;
        })
      })
    }

    $scope.stop_session = function() {
      $scope.stop_time = new Date();
      console.log('stop_time : ', $scope.stop_time);
      // post to server
      // TODO: move into a service
      //$http
      // session object not needed
      var session = {
        stop_time: $scope.stop_time
      }
      $http.post('/api/practices/stop_practice', session)
      .success(function(data) {
        console.log(data);
        $http.post('/api/users/set_practicing', {practicing: false})
        .success(function(data) {
          $scope.is_practicing = false;
        })
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
