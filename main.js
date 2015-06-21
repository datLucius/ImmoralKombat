var time = 61;
var userShot = randomShot;
var foeShot = randomShot;
var activeUserSprite = userSprite.sitting;
var activeFoeSprite = foeSprite.sitting;

$(document).ready (function() {
  page.init();
});

  var page = {
    init: function () {
      page.initEvents();
    },

    initEvents: function () {
      $('.titleBox').on('click', '.start',      page.initStyling);
      $('body').keypress(page.clickNuts);
      $('body').keypress(page.userDrink);
      $('.gameBox').on('click', '.again', page.resets);
    },

    initStyling: function () {
      var startSnd = new Audio("bitcoin.m4v");
      startSnd.play();
      $('.titleBox').addClass('hide');
      $('.runningGame').removeClass('hide');
      page.addUserStats();
      page.addFoeStats();
      page.runTime();
      page.addUserSprites();
      page.addFoeSprites();
    },

    userDrink: function(event){
      var drinkSnd = new Audio("bitdrink.m4v");
      if(event.keyCode === 115)
        {ted.drink(userShot);
        drinkSnd.play();
        console.log(userShot);
        randomShot = shotsArray[Math.floor(Math.random() * shotsArray.length)];
        userShot = randomShot;
        $('.character1').empty();
        activeUserSprite = userSprite.drinking;
        page.addUserSprites();
        page.addUserStats();
        page.userDelayToggle();
      }
    },

    clickNuts: function(event){
    var eatSnd = new Audio("biteat.m4v");
    if(event.keyCode === 110){
      event.preventDefault();
      eatSnd.play();
      console.log("nutz pressed");
        $('.userInfo').empty();
        ted.eatNuts();
        page.loadTemplate("userStats", ted, $('.userInfo'))
        $('.character1').empty();
        activeUserSprite = userSprite.eating;
        page.userDelayToggle();
        page.addUserSprites();
        }
    },

    soberUp: function () {
      $('.userInfo').empty();
      $('.foeInfo').empty();
      if (ted.nausea > 2 && ted.nausea < 100)
      {ted.nausea = ted.nausea - 1;}
      if (bill.nausea > 2 && bill.nausea < 100)
      {bill.nausea = bill.nausea - 2;}
      page.loadTemplate("userStats", ted, $('.userInfo'))
      page.loadTemplate("foeStats", bill, $('.foeInfo'))
    },

    loadTemplate: function(tmplName, data, $target){
       var compiledTmpl = _.template(page.getTemplate(tmplName));
       $target.append(compiledTmpl(data));
     },

    addUserStats: function(ted){
      $('.userInfo').empty();
       page.loadTemplate("userStats", ted, $('.userInfo'));
       console.log("user stats loading")
    },

    addFoeStats: function(bill){
      $('.foeInfo').empty();
        page.loadTemplate("foeStats", bill, $('.foeInfo'));
    },

    getTemplate: function(name){
        return templates[name];
      },

    addUserSprites: function(userSprite){
      page.loadTemplate("userSprites", userSprite, $('.character1'))
    },
    addFoeSprites: function(foeSprite){
      page.loadTemplate("foeSprites", foeSprite, $('.character2'))
    },
    toggleUserSprite: function(){
      $('.character1').empty();
      activeUserSprite = userSprite.sitting;
      page.addUserSprites();
      console.log('running toggle');
  },
    userDelayToggle: function(){
      setTimeout('page.toggleUserSprite()', 1000);
    },

    ////////////////////////////
    // FOE FUNCTIONS //////////
    ///////////////////////////

    foeDrink: function () {
      bill.drink(foeShot);
      console.log(foeShot);
      foeShot = randomShot;
      $('.character2').empty();
      activeFoeSprite = foeSprite.drinking;
      page.addFoeSprites();
      $('.foeInfo').empty();
       page.loadTemplate("foeStats", bill, $('.foeInfo'));
      page.foeDelayToggle();
      // switch sprite to chugging sprite
    },

    toggleFoeSprite: function(){
      $('.character2').empty();
      activeFoeSprite = foeSprite.sitting;
      page.addFoeSprites();
      console.log('running toggle');
  },
    foeDelayToggle: function(){
      setTimeout('page.toggleFoeSprite()', 1000);
    },

    ///////////////////////////
    /// END Game FUNCTIONS/////
    //////////////////////////


    foeBlackOut: function () {
      $('.winnerBox').removeClass('hide');
      $('.runningGame').addClass('hide');
    },

    userBlackOut: function () {
      $('.loserBox').removeClass('hide');
      $('.runningGame').addClass('hide');
    },

    blackOutStopGame: function() {
      if(ted.nausea > 100){
        page.userBlackOut();
      }
      if(bill.nausea > 100){
        page.foeBlackOut();
      }
    },
    timer: function () {
      if(time > 0){
      time = time -1;
      $('.countDown').empty();
      page.loadTemplate("timer", time, $('.countDown'));
    } else if (time === 0 && ted.shotTally > bill.shotTally){
      page.foeBlackOut();
    } else if (time === 0 && bill.shotTally > ted.shotTally){
      page.userBlackOut();
    }
      },

    runTime: function () {
      setInterval( function () {
        page.soberUp();
        page.timer();
        page.blackOutStopGame();
      }, 1000);

      setInterval( function () {
        page.foeDrink();
      }, 5000);
    },

    resets: function () {
      ted.nausea = Math.floor(Math.random() * 90);
      ted.tolerance = (Math.floor(Math.random() * 4) + 1);
      ted.shotTally = 0;
      bill.nausea = Math.floor(Math.random() * 90);
      bill.tolerance = (Math.floor(Math.random() * 4) + 1);
      bill.shotTally = 0;
      $('.loserBox').addClass('hide');
      $('.winnerBox').addClass('hide');
      $('.character2').empty();
      $('.character1').empty();
      activeFoeSprite = foeSprite.sitting;
      activeUserSprite = userSprite.sitting;
      page.initStyling();
    }
      // decrease timer value by 1 every second
      //if timer === 0, and if user beertally is greater than foe beertally display 'winner', else if foe beertally is greater than user beer tally display 'disgraced'. If beertally is equal display 'Tie'
    }
