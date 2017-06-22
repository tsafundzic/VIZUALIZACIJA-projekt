format = d3.format(",");
d3.json("data.json",  function(error, data) {
      if (error) throw error;

	var Perad2012Uku=[], Koze2012Uku=[], Svinje2012Uku=[], Goveda2012Uku=[], Ovce2012Uku=[], Perad2013Uku=[], Koze2013Uku=[], Svinje2013Uku= [], Goveda2013Uku= [], Ovce2013Uku= [];
	var Perad2013Uku=[], Koze2013Uku=[], Svinje2013Uku=[], Goveda2013Uku=[], Ovce2013Uku=[], Perad2013Uku=[], Koze2013Uku=[], Svinje2013Uku= [], Goveda2013Uku= [], Ovce2013Uku= [];
    var Perad2014Uku=[], Koze2014Uku=[], Svinje2014Uku=[], Goveda2014Uku=[], Ovce2014Uku=[], Perad2013Uku=[], Koze2013Uku=[], Svinje2013Uku= [], Goveda2013Uku= [], Ovce2013Uku= [];
	var Perad2015Uku=[], Koze2015Uku=[], Svinje2015Uku=[], Goveda2015Uku=[], Ovce2015Uku=[], Perad2013Uku=[], Koze2013Uku=[], Svinje2013Uku= [], Goveda2013Uku= [], Ovce2013Uku= [];
	var Perad2016Uku=[], Koze2016Uku=[], Svinje2016Uku=[], Goveda2016Uku=[], Ovce2016Uku=[], Perad2013Uku=[], Koze2013Uku=[], Svinje2013Uku= [], Goveda2013Uku= [], Ovce2013Uku= [];

	var Perad2012Kont=[], Koze2012Kont=[], Svinje2012Kont=[], Goveda2012Kont=[], Ovce2012Kont=[], Perad2013Kont=[], Koze2013Kont=[], Svinje2013Kont= [], Goveda2013Kont= [], Ovce2013Kont= [];
	var Perad2013Kont=[], Koze2013Kont=[], Svinje2013Kont=[], Goveda2013Kont=[], Ovce2013Kont=[], Perad2013Kont=[], Koze2013Kont=[], Svinje2013Kont= [], Goveda2013Kont= [], Ovce2013Kont= [];
    var Perad2014Kont=[], Koze2014Kont=[], Svinje2014Kont=[], Goveda2014Kont=[], Ovce2014Kont=[], Perad2013Kont=[], Koze2013Kont=[], Svinje2013Kont= [], Goveda2013Kont= [], Ovce2013Kont= [];
	var Perad2015Kont=[], Koze2015Kont=[], Svinje2015Kont=[], Goveda2015Kont=[], Ovce2015Kont=[], Perad2013Kont=[], Koze2013Kont=[], Svinje2013Kont= [], Goveda2013Kont= [], Ovce2013Kont= [];
	var Perad2016Kont=[], Koze2016Kont=[], Svinje2016Kont=[], Goveda2016Kont=[], Ovce2016Kont=[], Perad2013Kont=[], Koze2013Kont=[], Svinje2013Kont= [], Goveda2013Kont= [], Ovce2013Kont= [];

	var Perad2012Jad=[], Koze2012Jad=[], Svinje2012Jad=[], Goveda2012Jad=[], Ovce2012Jad=[], Perad2013Jad=[], Koze2013Jad=[], Svinje2013Jad= [], Goveda2013Jad= [], Ovce2013Jad= [];
	var Perad2013Jad=[], Koze2013Jad=[], Svinje2013Jad=[], Goveda2013Jad=[], Ovce2013Jad=[], Perad2013Jad=[], Koze2013Jad=[], Svinje2013Jad= [], Goveda2013Jad= [], Ovce2013Jad= [];
    var Perad2014Jad=[], Koze2014Jad=[], Svinje2014Jad=[], Goveda2014Jad=[], Ovce2014Jad=[], Perad2013Jad=[], Koze2013Jad=[], Svinje2013Jad= [], Goveda2013Jad= [], Ovce2013Jad= [];
	var Perad2015Jad=[], Koze2015Jad=[], Svinje2015Jad=[], Goveda2015Jad=[], Ovce2015Jad=[], Perad2013Jad=[], Koze2013Jad=[], Svinje2013Jad= [], Goveda2013Jad= [], Ovce2013Jad= [];
	var Perad2016Jad=[], Koze2016Jad=[], Svinje2016Jad=[], Goveda2016Jad=[], Ovce2016Jad=[], Perad2013Jad=[], Koze2013Jad=[], Svinje2013Jad= [], Goveda2013Jad= [], Ovce2013Jad= [];


for(var i = 0; i < data.length; i++){

	if(data[i]["ukupnagrla"] != "da"){
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "ukupno")){ Perad2012Uku.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "ukupno")){ Koze2012Uku.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "ukupno")){ Svinje2012Uku.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "ukupno")){ Goveda2012Uku.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "ukupno")){ Ovce2012Uku.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "ukupno")){ Perad2013Uku.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "ukupno")){ Koze2013Uku.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "ukupno")){ Svinje2013Uku.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "ukupno")){ Goveda2013Uku.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "ukupno")){ Ovce2013Uku.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "ukupno")){ Perad2014Uku.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "ukupno")){ Koze2014Uku.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "ukupno")){ Svinje2014Uku.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "ukupno")){ Goveda2014Uku.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "ukupno")){ Ovce2014Uku.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "ukupno")){ Perad2015Uku.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "ukupno")){ Koze2015Uku.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "ukupno")){ Svinje2015Uku.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "ukupno")){ Goveda2015Uku.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "ukupno")){ Ovce2015Uku.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "ukupno")){ Perad2016Uku.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "ukupno")){ Koze2016Uku.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "ukupno")){ Svinje2016Uku.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "ukupno")){ Goveda2016Uku.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "ukupno")){ Ovce2016Uku.push(data[i]); }
		

		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "kontinentalna")){ Perad2012Kont.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "kontinentalna")){ Koze2012Kont.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "kontinentalna")){ Svinje2012Kont.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "kontinentalna")){ Goveda2012Kont.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "kontinentalna")){ Ovce2012Kont.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "kontinentalna")){ Perad2013Kont.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "kontinentalna")){ Koze2013Kont.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "kontinentalna")){ Svinje2013Kont.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "kontinentalna")){ Goveda2013Kont.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "kontinentalna")){ Ovce2013Kont.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "kontinentalna")){ Perad2014Kont.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "kontinentalna")){ Koze2014Kont.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "kontinentalna")){ Svinje2014Kont.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "kontinentalna")){ Goveda2014Kont.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "kontinentalna")){ Ovce2014Kont.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "kontinentalna")){ Perad2015Kont.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "kontinentalna")){ Koze2015Kont.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "kontinentalna")){ Svinje2015Kont.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "kontinentalna")){ Goveda2015Kont.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "kontinentalna")){ Ovce2015Kont.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "kontinentalna")){ Perad2016Kont.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "kontinentalna")){ Koze2016Kont.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "kontinentalna")){ Svinje2016Kont.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "kontinentalna")){ Goveda2016Kont.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "kontinentalna")){ Ovce2016Kont.push(data[i]); }


		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "jadranska")){ Perad2012Jad.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "jadranska")){ Koze2012Jad.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "jadranska")){ Svinje2012Jad.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "jadranska")){ Goveda2012Jad.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2012") && (data[i]["rh"] === "jadranska")){ Ovce2012Jad.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "jadranska")){ Perad2013Jad.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "jadranska")){ Koze2013Jad.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "jadranska")){ Svinje2013Jad.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "jadranska")){ Goveda2013Jad.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2013") && (data[i]["rh"] === "jadranska")){ Ovce2013Jad.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "jadranska")){ Perad2014Jad.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "jadranska")){ Koze2014Jad.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "jadranska")){ Svinje2014Jad.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "jadranska")){ Goveda2014Jad.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2014") && (data[i]["rh"] === "jadranska")){ Ovce2014Jad.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "jadranska")){ Perad2015Jad.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "jadranska")){ Koze2015Jad.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "jadranska")){ Svinje2015Jad.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "jadranska")){ Goveda2015Jad.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2015") && (data[i]["rh"] === "jadranska")){ Ovce2015Jad.push(data[i]); }
		
		if( (data[i]["sorta"] === "perad") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "jadranska")){ Perad2016Jad.push(data[i]); }
		if( (data[i]["sorta"] === "koze") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "jadranska")){ Koze2016Jad.push(data[i]); }
		if( (data[i]["sorta"] === "svinje") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "jadranska")){ Svinje2016Jad.push(data[i]); }
		if( (data[i]["sorta"] === "goveda") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "jadranska")){ Goveda2016Jad.push(data[i]); }
		if( (data[i]["sorta"] === "ovce") && (data[i]["godina"] === "2016") && (data[i]["rh"] === "jadranska")){ Ovce2016Jad.push(data[i]); }
	}
}

 d3.selectAll("input").on("change", selectDataset);

    function selectDataset(){
   		var odabirgrla = d3.select('input[name=dataset2]:checked').attr('value');
	 	var odabirgodine  = d3.select('input[name=dataset3]:checked').attr('value');
		var odabirregije = d3.select('input[name=dataset4]:checked').attr('value');
	
			if (odabirgrla == "perad" && odabirgodine == "2012" && odabirregije == "ukupno"){ change(Perad2012Uku);}
			else if (odabirgrla == "koze" && odabirgodine == "2012" && odabirregije == "ukupno"){ change(Koze2012Uku); }
			else if (odabirgrla == "svinje" && odabirgodine == "2012" && odabirregije == "ukupno"){	change(Svinje2012Uku); }
			else if (odabirgrla == "goveda" && odabirgodine == "2012" && odabirregije == "ukupno"){ change(Goveda2012Uku); }
			else if (odabirgrla == "ovce" && odabirgodine == "2012" && odabirregije == "ukupno"){ change(Ovce2012Uku); }
			
			if (odabirgrla == "perad" && odabirgodine == "2013" && odabirregije == "ukupno"){ change(Perad2013Uku); }
			else if (odabirgrla == "koze" && odabirgodine == "2013" && odabirregije == "ukupno"){ change(Koze2013Uku); }
			else if (odabirgrla == "svinje" && odabirgodine == "2013" && odabirregije == "ukupno"){	change(Svinje2013Uku); }
			else if (odabirgrla == "goveda" && odabirgodine == "2013" && odabirregije == "ukupno"){	change(Goveda2013Uku); }
			else if (odabirgrla == "ovce" && odabirgodine == "2013" && odabirregije == "ukupno"){ change(Ovce2013Uku); }
			
			if (odabirgrla == "perad" && odabirgodine == "2014" && odabirregije == "ukupno"){ change(Perad2014Uku); }
			else if (odabirgrla == "koze" && odabirgodine == "2014" && odabirregije == "ukupno"){ change(Koze2014Uku);}
			else if (odabirgrla == "svinje" && odabirgodine == "2014" && odabirregije == "ukupno"){ change(Svinje2014Uku); }
			else if (odabirgrla == "goveda" && odabirgodine == "2014" && odabirregije == "ukupno"){	change(Goveda2014Uku); }
			else if (odabirgrla == "ovce" && odabirgodine == "2014" && odabirregije == "ukupno"){ change(Ovce2014Uku);}
			
			if (odabirgrla == "perad" && odabirgodine == "2015" && odabirregije == "ukupno"){ change(Perad2015Uku); }
			else if (odabirgrla == "koze" && odabirgodine == "2015" && odabirregije == "ukupno"){ change(Koze2015Uku); }
			else if (odabirgrla == "svinje" && odabirgodine == "2015" && odabirregije == "ukupno"){	change(Svinje2015Uku); }
			else if (odabirgrla == "goveda" && odabirgodine == "2015" && odabirregije == "ukupno"){	change(Goveda2015Uku); }
			else if (odabirgrla == "ovce" && odabirgodine == "2015" && odabirregije == "ukupno"){ change(Ovce2015Uku); }
			
			if (odabirgrla == "perad" && odabirgodine == "2016" && odabirregije == "ukupno"){ change(Perad2016Uku); }
			else if (odabirgrla == "koze" && odabirgodine == "2016" && odabirregije == "ukupno"){ change(Koze2016Uku); }
			else if (odabirgrla == "svinje" && odabirgodine == "2016" && odabirregije == "ukupno"){	change(Svinje2016Uku); }
			else if (odabirgrla == "goveda" && odabirgodine == "2016" && odabirregije == "ukupno"){	change(Goveda2016Uku);}
			else if (odabirgrla == "ovce" && odabirgodine == "2016" && odabirregije == "ukupno"){ change(Ovce2016Uku); }
			
			if (odabirgrla == "perad" && odabirgodine == "2012" && odabirregije == "kontinentalna")	{ change(Perad2012Kont); }
			else if (odabirgrla == "koze" && odabirgodine == "2012" && odabirregije == "kontinentalna"){ change(Koze2012Kont); }
			else if (odabirgrla == "svinje" && odabirgodine == "2012" && odabirregije == "kontinentalna"){ change(Svinje2012Kont); }
			else if (odabirgrla == "goveda" && odabirgodine == "2012" && odabirregije == "kontinentalna"){ change(Goveda2012Kont); }
			else if (odabirgrla == "ovce" && odabirgodine == "2012" && odabirregije == "kontinentalna"){ change(Ovce2012Kont); }
			
			if (odabirgrla == "perad" && odabirgodine == "2013" && odabirregije == "kontinentalna"){ change(Perad2013Kont); }
			else if (odabirgrla == "koze" && odabirgodine == "2013" && odabirregije == "kontinentalna"){ change(Koze2013Kont); }
			else if (odabirgrla == "svinje" && odabirgodine == "2013" && odabirregije == "kontinentalna"){ change(Svinje2013Kont); }
			else if (odabirgrla == "goveda" && odabirgodine == "2013" && odabirregije == "kontinentalna"){ change(Goveda2013Kont); }
			else if (odabirgrla == "ovce" && odabirgodine == "2013" && odabirregije == "kontinentalna"){ change(Ovce2013Kont); }
			
			if (odabirgrla == "perad" && odabirgodine == "2014" && odabirregije == "kontinentalna"){ change(Perad2014Kont); }
			else if (odabirgrla == "koze" && odabirgodine == "2014" && odabirregije == "kontinentalna"){ change(Koze2014Kont); }
			else if (odabirgrla == "svinje" && odabirgodine == "2014" && odabirregije == "kontinentalna"){ change(Svinje2014Kont); }
			else if (odabirgrla == "goveda" && odabirgodine == "2014" && odabirregije == "kontinentalna"){ change(Goveda2014Kont); }
			else if (odabirgrla == "ovce" && odabirgodine == "2014" && odabirregije == "kontinentalna"){ change(Ovce2014Kont); }
			
			if (odabirgrla == "perad" && odabirgodine == "2015" && odabirregije == "kontinentalna"){ change(Perad2015Kont); }
			else if (odabirgrla == "koze" && odabirgodine == "2015" && odabirregije == "kontinentalna"){ change(Koze2015Kont); }
			else if (odabirgrla == "svinje" && odabirgodine == "2015" && odabirregije == "kontinentalna"){ change(Svinje2015Kont); }
			else if (odabirgrla == "goveda" && odabirgodine == "2015" && odabirregije == "kontinentalna"){ change(Goveda2015Kont); }
			else if (odabirgrla == "ovce" && odabirgodine == "2015" && odabirregije == "kontinentalna"){ change(Ovce2015Kont); }
			
			if (odabirgrla == "perad" && odabirgodine == "2016" && odabirregije == "kontinentalna"){ change(Perad2016Kont); }
			else if (odabirgrla == "koze" && odabirgodine == "2016" && odabirregije == "kontinentalna"){ change(Koze2016Kont); }
			else if (odabirgrla == "svinje" && odabirgodine == "2016" && odabirregije == "kontinentalna"){ change(Svinje2016Kont); }
			else if (odabirgrla == "goveda" && odabirgodine == "2016" && odabirregije == "kontinentalna"){ change(Goveda2016Kont); }
			else if (odabirgrla == "ovce" && odabirgodine == "2016" && odabirregije == "kontinentalna"){ change(Ovce2016Kont); }

			if (odabirgrla == "perad" && odabirgodine == "2012" && odabirregije == "jadranska"){ change(Perad2012Jad); }
			else if (odabirgrla == "koze" && odabirgodine == "2012" && odabirregije == "jadranska"){ change(Koze2012Jad); }
			else if (odabirgrla == "svinje" && odabirgodine == "2012" && odabirregije == "jadranska"){change(Svinje2012Jad); }
			else if (odabirgrla == "goveda" && odabirgodine == "2012" && odabirregije == "jadranska"){ change(Goveda2012Jad); }
			else if (odabirgrla == "ovce" && odabirgodine == "2012" && odabirregije == "jadranska"){ change(Ovce2012Jad); }
			
			if (odabirgrla == "perad" && odabirgodine == "2013" && odabirregije == "jadranska"){ change(Perad2013Jad); }
			else if (odabirgrla == "koze" && odabirgodine == "2013" && odabirregije == "jadranska"){ change(Koze2013Jad); }
			else if (odabirgrla == "svinje" && odabirgodine == "2013" && odabirregije == "jadranska"){ change(Svinje2013Jad); }
			else if (odabirgrla == "goveda" && odabirgodine == "2013" && odabirregije == "jadranska"){ change(Goveda2013Jad); }
			else if (odabirgrla == "ovce" && odabirgodine == "2013" && odabirregije == "jadranska"){ change(Ovce2013Jad); }
			
			if (odabirgrla == "perad" && odabirgodine == "2014" && odabirregije == "jadranska"){ change(Perad2014Jad); }
			else if (odabirgrla == "koze" && odabirgodine == "2014" && odabirregije == "jadranska"){ change(Koze2014Jad); }
			else if (odabirgrla == "svinje" && odabirgodine == "2014" && odabirregije == "jadranska"){ change(Svinje2014Jad); }
			else if (odabirgrla == "goveda" && odabirgodine == "2014" && odabirregije == "jadranska") {	change(Goveda2014Jad);	}
			else if (odabirgrla == "ovce" && odabirgodine == "2014" && odabirregije == "jadranska"){ change(Ovce2014Jad); }
			
			if (odabirgrla == "perad" && odabirgodine == "2015" && odabirregije == "jadranska"){ change(Perad2015Jad); }
			else if (odabirgrla == "koze" && odabirgodine == "2015" && odabirregije == "jadranska"){ change(Koze2015Jad); }
			else if (odabirgrla == "svinje" && odabirgodine == "2015" && odabirregije == "jadranska"){ change(Svinje2015Jad); }
			else if (odabirgrla == "goveda" && odabirgodine == "2015" && odabirregije == "jadranska"){ change(Goveda2015Jad); }
			else if (odabirgrla == "ovce" && odabirgodine == "2015" && odabirregije == "jadranska"){ change(Ovce2015Jad); }
			
			if (odabirgrla == "perad" && odabirgodine == "2016" && odabirregije == "jadranska"){ change(Perad2016Jad); }
			else if (odabirgrla == "koze" && odabirgodine == "2016" && odabirregije == "jadranska"){ change(Koze2016Jad); }
			else if (odabirgrla == "svinje" && odabirgodine == "2016" && odabirregije == "jadranska"){ change(Svinje2016Jad); }
			else if (odabirgrla == "goveda" && odabirgodine == "2016" && odabirregije == "jadranska"){ change(Goveda2016Jad); }
			else if (odabirgrla == "ovce" && odabirgodine == "2016" && odabirregije == "jadranska"){ change(Ovce2016Jad); }
	}

   //https://bl.ocks.org/caravinden/eb0e5a2b38c8815919290fa838c6b63b
   var	margin = {top: 30, right: 123, bottom: 50, left: 223},
            width = 1030 - margin.left - margin.right,
            height = 500- margin.top - margin.bottom;

    var div = d3.select("body").append("div").attr("class", "toolTip");

    var y = d3.scale.ordinal()
            .rangeRoundBands([height, 0], .2, 0.5);

    var x = d3.scale.linear()
            .range([0, width]);

    var xAxis = d3.svg.axis()
            .scale(x)
            .tickSize(-height)
            .orient("bottom");

    var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");
  
    var svg = d3.select("#svgdiv").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

    d3.select("input[value=\"total\"]").property("checked", true);
    change(Perad2012Uku);

	//https://bl.ocks.org/syncopika/f1c9036b0deb058454f825238a95b6be
    function change(dataset) {

        y.domain(dataset.map(function(d) { return d.naziv; }));
        x.domain([0, d3.max(dataset, function(d) { return d.kolicina; })]);

        svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);

        svg.select(".y.axis").remove();
        svg.select(".x.axis").remove();

        svg.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(0)")
                .attr("x", width / 2)
				.attr("y", height + margin.bottom/1.5)
                .attr("dx", ".1em")
                .style("text-anchor", "end")
                .text("Broj grla");


        var bar = svg.selectAll(".bar")
                .data(dataset, function(d) { return d.naziv; });
        // new data:
        bar.enter().append("rect")
                .attr("class", "bar")
                .attr("x", function(d) { return x(d.kolicina); })
                .attr("y", function(d) { return y(d.naziv); })
                .attr("width", function(d) { return width-x(d.kolicina); })
                .attr("height", y.rangeBand());

        bar
                .on("mousemove", function(d){
                    div.style("left", d3.event.pageX+10+"px");
                    div.style("top", d3.event.pageY-25+"px");
                    div.style("display", "inline-block");
                    div.html("<span class='tooltip_naziv'>" + (d.naziv) + "</span>"+"<br>"+format(d.kolicina));
                });
        bar
                .on("mouseout", function(d){
                    div.style("display", "none");
                });

        bar.exit().remove();
        bar.transition()
                .duration(750)
                .attr("x", function(d) { return 0; })
                .attr("y", function(d) { return y(d.naziv); })
                .attr("width", function(d) { return x(d.kolicina); })
                .attr("height", y.rangeBand());
    };
});