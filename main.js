var time = 61;
var userShot = randomShot;
var foeShot = randomShot;

$(document).ready (function() {
  page.init();
});

  var page = {
    init: function () {
      page.initEvents();
    },

    initEvents: function () {
      $('.titleBox').on('click', '.start',      page.initStyling);
      $('.characters').on('click', '.character1', page.userDrink);
      $('.bar').on('click', '.nutBowl', page.clickNuts);
      $('.gameBox').on('click', '.again', page.resets)
    },

    initStyling: function () {
      $('.titleBox').addClass('hide');
      $('.runningGame').removeClass('hide');
      page.addUserStats();
      page.addFoeStats();
      page.runTime();
    },

    userDrink: function(){
        ted.drink(userShot);
        console.log(userShot);
        randomShot = shotsArray[Math.floor(Math.random() * shotsArray.length)];
        userShot = randomShot;
        page.addUserStats();
        // switch sprite to chugging sprite
      },

    clickNuts: function () {
        $('.userInfo').empty();
        ted.eatNuts();
        page.loadTemplate("userStats", ted, $('.userInfo'))
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


    ////////////////////////////
    // FOE FUNCTIONS //////////
    ///////////////////////////

    foeDrink: function () {
      bill.drink(foeShot);
      console.log(foeShot);
      foeShot = randomShot;
      $('.foeInfo').empty();
       page.loadTemplate("foeStats", bill, $('.foeInfo'));
      // switch sprite to chugging sprite
    },

    /////////////////////////////
    /// BEER FUNCTIONS /////////
    ///////////////////////////

    generateShot: function () {
      //on load, user and foe randomly assigned a shot. Shot title and alchol content are displayed on screen
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
      page.initStyling();
    }
      // decrease timer value by 1 every second
      //if timer === 0, and if user beertally is greater than foe beertally display 'winner', else if foe beertally is greater than user beer tally display 'disgraced'. If beertally is equal display 'Tie'
    }
