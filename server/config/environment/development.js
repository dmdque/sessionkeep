'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/sessionkeep-dev'
    //uri: 'mongodb://daniel:daniel@kahana.mongohq.com:10078/sessionkeep'
  },

  seedDB: true
};
