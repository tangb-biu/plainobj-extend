# plainobj-extend


## example
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
    
    assert.notEqual(newa, a, "两个不同的对象");
    
    assert.equal(newa.toString(), a.toString(), "对象的toString相同");
    
    var b = {
      m:[{x:'c'}],
      
      l: 'ad'
    }
    
    var c = util.extend(a, b);
    
    console.log(c);
