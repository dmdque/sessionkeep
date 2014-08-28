'use strict';

angular.module('sessionkeepApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sessionkeep', {
        url: '/sessionkeep',
        templateUrl: 'app/sessionkeep/sessionkeep.html',
        controller: 'SessionkeepCtrl'
      });
  });