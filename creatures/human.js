// var cthulhu = require('./cthulhu');

function Human(name) {
  this.name = name;
  this.isSane = true;
  this.alive = true;
}

var counter = 0;
Human.prototype.summonMonster = function(cthulhu) {
  counter++;
  if(counter >= 3) {
    cthulhu.imprisoned = false;
  }
}



module.exports = Human;
