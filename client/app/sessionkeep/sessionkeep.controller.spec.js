'use strict';

describe('Controller: SessionkeepCtrl', function () {

  // load the controller's module
  beforeEach(module('sessionkeepApp'));

  var SessionkeepCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionkeepCtrl = $controller('SessionkeepCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
