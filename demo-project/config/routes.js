/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  '/*': function(req, res, next) {
    console.log("i am confus");
    console.log(req.method, req.url);
    next();
  },
  'OPTIONS /*': function(req, res, next) {
    console.log(req.method, req.url); 
    next();
  },
  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },
  'DELETE /item/delete-item/:id': 'ItemController.deleteItem',
  'GET /users/':"UserController.getUser",
  
   'GET /user/:userId':"UserController.getUserId",
   'PUT /user/login':"UserController.loginUser",
   'PUT  /user/:userId':"UserController.updateUserId",
   'POST /user/create-vip':"UserController.createVipUser",
  
   'POST /user/create-user':"UserController.createUser",
   'POST /user/create-admin':"UserController.createAdmin",
   'GET /items/':"ItemController.ShowItems",
   'PUT /item/edit-item/:itemId':"ItemController.editItem",
   'POST /item/:menuId/create-item/':"ItemController.createItem",

   


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
