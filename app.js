function Character(options) {

  this.name = options.name || Ted;
  this.nausea = options.nausea || Math.floor(Math.random() * 60);
  this.tolerance = (Math.floor(Math.random() * 5) + 1);
  this.shotTally = 0;
  this.shot = randomShot;

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

function Sprite(options) {
  this.sitting = options.sitting;
  this.drinking = options.drinking;
};

var userSprite = new Sprite({sitting: "spriteSitting.png", drinking: "drinkSprite.png"});
var foeSprite = new Sprite({sitting: "foeSittingSprite.png", drinking: "foeDrinkSprite.png"})
var vodka = new Shot({type: "Vodka", alcohol: 8});
var rum = new Shot({type: "Rum", alcohol: 7.4});
var jager = new Shot({type: "Jager", alcohol: 7});
var fireball = new Shot({type: "Fire Ball", alcohol: 6.6});
var moonshine = new Shot({type: "Moon Shine", alcohol: 12});
var sake = new Shot({type: "Sake", alcohol: 3.6});
var baileys = new Shot({type: "Baileys", alcohol: 3.4});
var goldschlager = new Shot({type: "Goldschlager", alcohol: 8.6});
var jackdaniels = new Shot({type: "Jack Daniels", alcohol: 9.2});
var sloegin = new Shot({type: "Sloe Gin", alcohol: 6});
var tequila = new Shot({type: "Tequila", alcohol: 8});
var everclear = new Shot({type: "Everclear", alcohol: 19});
var hennessy = new Shot({type: "Hennessy", alcohol: 8});

var bill = new Character({name: "Bill"});
var ted = new Character({name: "Ted", nausea: 0});

var shotsArray = [vodka, rum, jager, fireball, moonshine, sake, baileys, goldschlager, jackdaniels, sloegin, tequila, everclear, hennessy];
var randomShot = shotsArray[Math.floor(Math.random() * shotsArray.length)];
