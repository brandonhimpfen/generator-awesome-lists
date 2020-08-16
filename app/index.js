'use strict';
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var fs = require('fs');

var AwesomeListsGenerator = yeoman.generators.Base.extend({

    prompting: function() {
        var done = this.async();

        var prompts = [{
            name: 'appLIST',
            message: 'What is your Awesome list name?'
        }];

        this.prompt(prompts, function(props) {
            this.appLIST = props.appLIST;

            done();
        }.bind(this));

    },

    files: function() {
        var context = {
            awesome_name: this.appLIST
        };

        this.template("_README", "README.md", context);

    },

    end: function () {

    }

});

module.exports = AwesomeListsGenerator;
