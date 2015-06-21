var templates = {};

templates.userStats =
[  "<li class='shotTally'><%=ted.shotTally%> shots</li>",
  "<li class='drunkMeter'>",
    "<div class='drunkBar' style='width: <%=ted.nausea%>%'></div>",
  "</li>"
].join("");

templates.timer =  ["<div class='countDownNumber'><%=time%></div>"].join("")

templates.foeStats =
[  "<li class='shotTally'><%=bill.shotTally%> shots</li>",
  "<li class='drunkMeter'>",
    "<div class='drunkBarFoe' style='width: <%=bill.nausea%>%;'></div>",
  "</li>"
].join("");

// templates.characterSprites =
// ["<div class='character1 character'><img src ='<%= character1Sprite %>'></div>",
// "<div class='character2 character'><img src ='<%= character2Sprite %>'></div>"].join("");
