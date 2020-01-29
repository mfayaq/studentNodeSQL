'use strict';
module.exports = (app) => {
  var controller = require('../controller/controller');

  // student Routes
  app.route('/Students')
    .post(controller.create_a_Student)
    .get(controller.list_all_Students);
   
  app.route('/Students/:StudentId')
    .get(controller.read_a_Student)
    .put(controller.update_a_Student)
    .delete(controller.delete_a_Student);

  app.route('/')
    .get(controller.sendHomepage)

  app.route('/Search')
    .get(controller.sendSearch)
  
};