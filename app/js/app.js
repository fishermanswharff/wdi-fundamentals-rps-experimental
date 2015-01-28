'use strict';

var trace = function(){
  for(var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
};

var App = App || {};

App.square = function(x){
  return x * x
};

App.cube = function(x){
  return x * x * x
};

$(document).ready(function(){
  trace('hello world');
});
