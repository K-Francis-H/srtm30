//https://dds.cr.usgs.gov/srtm/version2_1
//wget -4 --random-wait -i ../all_links.txt
var links = document.getElementsByTagName("A");
var out = "";
for(var i=0; i < links.length; i++){
	//console.log(links[i].href);	
	if(links[i].href.match(/.zip/)){
		out += links[i].href+"\n";
	}
}
console.log(out);
