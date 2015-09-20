/*!
 * express-routes-autoloader
 * Copyright(c) 2015 Nitesh Oswal
 * MIT Licensed
 */

var fs = require('fs');

/**
 * @param {string} path The path pointing to the routes directory
 */
var Autoloader = function(path) {
    this.path = path;
}

/**
 * The function that traverses all the routes
 * @param  {string} path The path that's going to be traversed
 * @param  {function} app express.js instance
 * @param  {string} orig The Origin, the base path of the routes directory
 */
function __traverse(path, app, orig) {
    if(!orig) {
        orig = path;
    }
    fs.readdir(path, function(err, files) {
        if(err) {
            console.error(err);
        } else {
            files.forEach(function(file) {
                temp = path + '/' + file;
                if(file.indexOf('.js') > -1) {
                    app.use(temp.replace(orig, '').replace('.js', '') , require(temp)); //let it use it!
                } else {
                    __traverse(temp, app, orig);
                }
            });
        }
    });
}

/**
 * @param  {function} express.js instance
 */
Autoloader.prototype.load = function(app) {
    var _self = this;
    __traverse(_self.path, app);
}

module.exports = Autoloader;