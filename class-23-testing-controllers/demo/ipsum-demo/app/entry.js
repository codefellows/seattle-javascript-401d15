'use strict';

const angular = require('angular');

angular.module('ipsumApp', []);

angular.module('ipsumApp')
.controller('IpsumController', ['$log', IpsumController])
function IpsumController($log){
  // $onInit is used to define state and methods
  // before the template gets compiled (like handlebar.compile)
  this.$onInit = () => {
    this.dictionary  = {
      hacker: [ 'rm -rf', 'password is password', 'hack the mainfraim', 'im in the matrix', 'the password are plain text', 'access granted', 'segfault 11', 'no file found', 'system malfunction', 'leave no trace'],

      bob: ['what an interesting approach', 'why?', 'how delightful', 'its too ova done', 'happy little trees', 'your beautiful', 'happy little accident'],

      simpsons: ['spider cow', 'doh', 'donuts', 'booyea',]

    }
    this.choices = Object.keys(this.dictionary);
    this.selected = this.choices[0];
    this.content = '';

    this.getRandomItem = (list) => {
      return list[Math.floor(Math.random() * list.length)];
    };

    this.handleSubmit = () => {
      let result = [];

      for(let i = 0; i< 15; i++){
        let choice = this.dictionary[this.selected];
        result.push(this.getRandomItem(choice));
      }

      this.content = result.join('. ');
    }

  };
};

