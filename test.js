/**
 *
 *  test 
 *
 */

var util = require("./index");
var assert = require("assert");

var a = {
	m: [{
		x: 'a',
		y: 'b'
	},{
		c: 'x',
		d: 'u'
	}],
	k: new Date,

	l: "adadadad",

	n: false 
}

var newa = util.deepCopy(a);
assert.equal(newa.toString(), a.toString(), "不一样哦");
assert.notEqual(newa, a, "深度复制失败");

var b = {
	m: [{x:'m'}],

	k: 'aaa',

	n: true
}

var newEX = util.extend(a, b);
console.log(newEX);

function bb(){
	this.a = 'a',
	this.b = {
		x: 'aad',
		m: 'fdf'
	}
}
var c = new bb;

var d = util.extend({a:'b',b:{m:'v',n:'f'}}, c);

var f = util.deepCopy(c);

console.log(d);
console.log(f);