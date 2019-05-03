// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/posts/", function(req, res) {
    db.Post.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for returning posts of a specific category
  app.get("/api/posts/category/:category", function(req, res) {
    db.Post.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    db.Post.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // POST route for saving a new post
  app.post("/api/posts", function(req, res) {
    console.log(req.body);
    db.Post.create({
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  //RPI Routes

  app.get("/api/rpi/all", function(req, res) {
    db.Rpi.findAll({}).then( function(allPi){
      res.json(allPi);
    });
  });
  
  app.post("/api/rpi", function(req, res) {
    db.Rpi.create({
      light: 0,
      temp: 0
    }).then(function(newPi) {
      res.json(newPi);
    });
  });

  app.put("/api/rpi/light/:light/:id", function(req, res){
    lightVal = req.params.light;

    if( lightVal === '0'){
      lightVal = 0;
    }
    else if( lightVal === '1'){
      lightVal = 1;
    }
    else{
      lightVal = 0;
    }

    db.Rpi.update({
      light: lightVal
    },{
      where: {
        id: req.params.id
      }
    }).then(function(updatePi){
      res.json(updatePi);
    });
  });

  app.put("/api/rpi/temp/:temp/:id", function(req, res){
    
    tempVal = parseFloat(req.params.temp);


    db.Rpi.update({
      temp: tempVal
    },{
      where: {
        id: req.params.id
      }
    }).then(function(updatePi){
      res.json(updatePi);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Post.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
};
