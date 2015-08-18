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
				//p["mp"] = pdtl[3];
			}
	    }
	}  
	return p;
});

$(".panel-body").after("<div>Players:" + players.length+ "<br/>"+ playerData.length +"</div>");
mappedPlayers.map(function(mp){
	$(".panel-body").after("<div> - player:" + mp.name+ " | "+ mp.url +"</div>");
});
