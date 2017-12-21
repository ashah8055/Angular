var request = require('request');
//rword random word generator npm install ---save rword
var rword = require('rword');

//word-definition gives you the meaning of a word npm install --save word-definition
var wd = require("word-definition");


var storeRWord = "";

//generates a word using rword.generate();
var generateRWord = function(){
	return rword.generate();
};

var getMeaning = function(req,res){
	//set a word to storeRWord variable using generateRWord();
	storeRWord = generateRWord();

	//word-definition requires word ex:city,language ex: en,options : it can be null or options like exact eg: accent ex:événement, callbackfunction
	wd.getDef(storeRWord,"en",null,function(definition){
		res.send({"definition":definition});
	});
};

exports.getMeaning = getMeaning;
console.log("controller Initialized");
