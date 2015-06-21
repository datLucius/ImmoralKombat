function Character(options) {

  this.name = options.name || Ted;
  this.nausea = options.nausea || Math.floor(Math.random() * 90);
  this.tolerance = (Math.floor(Math.random() * 4) + 1);
  this.shotTally = 0;

  this.drink = function (Shot) {
    if(this.nausea < 100) {
      this.nausea = this.nausea + (Shot.alcohol * this.tolerance);
      this.shotTally = this.shotTally + 1;
      console.log(this.name + " is " + this.nausea + " % Drunk");
    } else {
      console.log(this.name + " threw up all over himself.")
    }
  };

  this.eatNuts = function (character){
    this.nausea = this.nausea - 1;
    console.log(this.name + " is " + this.nausea + " % Drunk");

  };

}

function Shot(options) {
  this.type = options.type || "shooter";
  this.alcohol = options.alcohol;
};

var vodka = new Shot({type: "Vodka", alcohol: 15});
var rum = new Shot({type: "Rum", alcohol: 6.7});
var jager = new Shot({type: "Jager", alcohol: 5.4});
var fireball = new Shot({type: "Fire Ball", alcohol: 4.2});
var moonshine = new Shot({type: "Moon Shine", alcohol: 20});

var bill = new Character({name: "Bill"});
var ted = new Character({name: "Ted", nausea: 0});
