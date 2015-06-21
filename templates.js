var templates = {};

templates.userStats =
[  "<li class='shotTally'><%=ted.shotTally%> shots</li>",
  "<li class='drunkMeter'>",
    "<div class='drunkBar' style='width: <%=ted.nausea%>%'>DRUNKNESS</div>",
  "</li>",
  "<li class='shotName'><%=userShot.type%></li>"
].join("");

templates.timer =  ["<div class='countDownNumber'><%=time%></div>"].join("")

templates.foeStats =
[  "<li class='shotTally'><%=bill.shotTally%> shots</li>",
  "<li class='drunkMeter'>",
    "<div class='drunkBarFoe' style='width: <%=bill.nausea%>%;'>DRUNKNESS</div>",
  "</li>",
  "<li class='shotName'><%=foeShot.type%></li>"
].join("");

templates.userSprites =
["<img src ='<%= activeUserSprite %>'>"].join("");
templates.foeSprites =
["<div class='character2'><img src ='<%= activeFoeSprite %>'></div>"].join("");
