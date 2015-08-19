/// <reference path="typings/jquery/jquery.d.ts"/>
var mappedPlayers = players.map(function(p){
	var pnum = p.num;
	for(var i=0;i<playerData.length;i++){
		var pdtl = playerData[i].toLowerCase().split(",");
		if(pdtl[2]==pnum){
			var lname = pdtl[3].split(" ");
			var pname = p.name;
			if(pname.toLowerCase().indexOf(lname[0])>-1){
				p["url"] = pdtl[4]; 
				p["label"] =  pnum + " - " + pname;
				p["value"] = pnum + " - " + pname;
			}
	    }
	}  
	return p;
});

setTimeout(addLookup,2500);
function addLookup(){
  $(".panel-body").html("<div class='playerlookup'> " + mappedPlayers.length+ " players loaded </div>");
  $(".playerlookup").append("<div> <label>Player Lookup:</label><br/><input id='playerLU'/></div>");
  $("#playerLU").autocomplete({
	  minLength: 0,
	  source: mappedPlayers,
	  //focus: function(e,ui){
	//	  $("#playerLU").val(ui.item.pname);
	  //},
	  select: function(e,ui){
		  getPlayerData(ui.item);
		  $("#playerLU").val("");
		  return false;
	  }
  })
}

function getPlayerData(po){
	//$("#playerLU").val("");
	$(".playerlookup").append("<div id='playerDetail'> <label>"+po.name+"</label><br/>"+po.url+"</div>");
	$("#hidplayerData").load("http://www.ohiostatebuckeyes.com"+po.url+".html #Content", function(){alert("load done");} )
}
//mappedPlayers.map(function(mp){
	//$(".panel-body").after("<div> - player:" + mp.name+ " | "+ mp.url +"</div>");
//});
