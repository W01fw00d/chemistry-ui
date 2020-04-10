'use strict';

module.exports = function(app) {
  var controller = require('../controllers/escaping-boredom-controller');

  app.route('/tags').get(controller.list_all_tags);
  app.route('/rooms').get(controller.list_all_rooms);
  app.route('/room-details/:roomId').get(controller.read_a_room_details);
};
